export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">D</span>
              </div>
              <span className="font-semibold">DENTOPT</span>
            </div>
            <p className="text-sm text-background/70">Стоматологические и зуботехнические материалы и оборудование. Более 15 000 позиций в наличии.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition">
                  О комплекте
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-background transition">
                  Выгода
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Заказать
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#faq" className="hover:text-background transition">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Доставка и отгрузка
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-background transition">
                  Условия акции
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Связаться</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="tel:+78005500352" className="hover:text-background transition">
                  +7 (800) 550-03-52
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  MAX
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2026 DENTOPT. Не является публичной офертой. Количество товара ограничено.</p>
        </div>
      </div>
    </footer>
  )
}