import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Booking() {
  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Готовы заказать?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Закажите комплект Programat</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Оставьте заявку или свяжитесь с нами в мессенджерах — менеджер уточнит детали и оформит заказ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Order Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Оставить заявку</h3>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Как к вам обращаться"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Комментарий</label>
                <textarea
                  placeholder="Вопрос или удобное время для звонка"
                  rows={3}
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
              >
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Не является публичной офертой. Количество товара ограничено.
              </p>
            </form>
          </div>

          {/* Price & Contacts */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Стоимость комплекта</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Печь Programat P310/G2</span>
                  <span className="font-semibold text-foreground">595 000 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Насос Programat VP5</span>
                  <span className="font-semibold text-accent">в подарок</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Ваша выгода</span>
                  <span className="font-semibold text-foreground">165 000 ₽</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-semibold text-foreground">Итого за комплект</span>
                  <span className="text-2xl font-bold text-accent">595 000 ₽</span>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-4">Закажите через мессенджеры:</p>
                <div className="space-y-3">
                  <a href="tel:+78005500352" className="flex items-center gap-3 px-4 py-3 bg-background rounded-lg border border-border hover:border-accent transition">
                    <Icon name="Phone" size={20} className="text-accent" />
                    <span className="font-semibold text-foreground">+7 (800) 550-03-52</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 bg-background rounded-lg border border-border hover:border-accent transition">
                    <Icon name="Send" size={20} className="text-accent" />
                    <span className="font-semibold text-foreground">Telegram</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 bg-background rounded-lg border border-border hover:border-accent transition">
                    <Icon name="MessageCircle" size={20} className="text-accent" />
                    <span className="font-semibold text-foreground">MAX</span>
                  </a>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                ✓ Оригинальное оборудование • ✓ Быстрая отгрузка • ✓ Помощь менеджера
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}