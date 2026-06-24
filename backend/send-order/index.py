import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта DENTOPT на почту менеджера."""
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

    to_email = 'shevtsova.a@dentopt.com'
    from_email = 'shevtsova.a@dentopt.com'
    smtp_password = os.environ.get('SMTP_PASSWORD', '')

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

    # Определяем SMTP сервер по домену
    domain = from_email.split('@')[-1].lower()
    if 'yandex' in domain or 'ya.ru' in domain:
        smtp_host, smtp_port = 'smtp.yandex.ru', 465
        use_ssl = True
    elif 'mail.ru' in domain or 'bk.ru' in domain or 'list.ru' in domain or 'inbox.ru' in domain:
        smtp_host, smtp_port = 'smtp.mail.ru', 465
        use_ssl = True
    elif 'gmail' in domain:
        smtp_host, smtp_port = 'smtp.gmail.com', 587
        use_ssl = False
    else:
        # Для корпоративных доменов пробуем стандартный smtp
        smtp_host, smtp_port = f'smtp.{domain}', 587
        use_ssl = False

    try:
        if use_ssl:
            server = smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10)
        else:
            server = smtplib.SMTP(smtp_host, smtp_port, timeout=10)
            server.starttls()

        server.login(from_email, smtp_password)
        server.sendmail(from_email, [to_email], msg.as_string())
        server.quit()
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'ok': True, 'message': 'Заявка отправлена'})
    }
