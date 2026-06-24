import json
import os
import smtplib
import urllib.request
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

TELEGRAM_CHAT_ID = '6905329993'


def send_telegram(token: str, text: str):
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    data = json.dumps({'chat_id': TELEGRAM_CHAT_ID, 'text': text, 'parse_mode': 'HTML'}).encode()
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req, timeout=10)


def send_email(name: str, phone: str, comment: str):
    to_email = 'shevtsova.a@dentopt.com'
    from_email = 'shevtsova.a@dentopt.com'
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    if not smtp_password:
        return

    subject = f'Новая заявка с сайта — {name}'
    html_body = f"""
    <h2>Новая заявка на комплект Programat P310/G2 + VP5</h2>
    <table style="border-collapse:collapse; width:100%; max-width:500px;">
      <tr><td style="padding:8px; font-weight:bold; border:1px solid #ddd;">Имя</td>
          <td style="padding:8px; border:1px solid #ddd;">{name}</td></tr>
      <tr><td style="padding:8px; font-weight:bold; border:1px solid #ddd;">Телефон</td>
          <td style="padding:8px; border:1px solid #ddd;"><a href="tel:{phone}">{phone}</a></td></tr>
      <tr><td style="padding:8px; font-weight:bold; border:1px solid #ddd;">Комментарий</td>
          <td style="padding:8px; border:1px solid #ddd;">{comment or '—'}</td></tr>
    </table>
    <br>
    <p style="color:#888; font-size:12px;">Заявка отправлена с сайта dentopt.com</p>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    domain = from_email.split('@')[-1].lower()
    if 'yandex' in domain or 'ya.ru' in domain:
        smtp_host, smtp_port, use_ssl = 'smtp.yandex.ru', 465, True
    elif 'mail.ru' in domain or 'bk.ru' in domain or 'list.ru' in domain or 'inbox.ru' in domain:
        smtp_host, smtp_port, use_ssl = 'smtp.mail.ru', 465, True
    elif 'gmail' in domain:
        smtp_host, smtp_port, use_ssl = 'smtp.gmail.com', 587, False
    else:
        smtp_host, smtp_port, use_ssl = f'smtp.{domain}', 587, False

    if use_ssl:
        server = smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10)
    else:
        server = smtplib.SMTP(smtp_host, smtp_port, timeout=10)
        server.starttls()

    server.login(from_email, smtp_password)
    server.sendmail(from_email, [to_email], msg.as_string())
    server.quit()


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта DENTOPT в Telegram и на почту менеджера."""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    try:
        body = json.loads(event.get('body') or '{}')
    except Exception:
        return {'statusCode': 400, 'headers': cors_headers, 'body': json.dumps({'error': 'Invalid JSON'})}

    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    comment = body.get('comment', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    errors = []

    # Отправка в Telegram
    tg_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    if tg_token:
        try:
            text = (
                f'🦷 <b>Новая заявка с сайта DENTOPT!</b>\n\n'
                f'👤 <b>Имя:</b> {name}\n'
                f'📞 <b>Телефон:</b> {phone}\n'
                f'💬 <b>Комментарий:</b> {comment or "—"}'
            )
            send_telegram(tg_token, text)
        except Exception as e:
            errors.append(f'Telegram: {str(e)}')

    # Отправка на почту
    try:
        send_email(name, phone, comment)
    except Exception as e:
        errors.append(f'Email: {str(e)}')

    if errors and not tg_token:
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': '; '.join(errors)})
        }

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'ok': True, 'message': 'Заявка отправлена'})
    }
