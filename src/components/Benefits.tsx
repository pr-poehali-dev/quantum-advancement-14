export function Benefits() {
  const benefits = [
    {
      icon: "🎁",
      title: "Насос VP5 в подарок",
      description: "Полный комплект оборудования Ivoclar по цене одной печи",
    },
    {
      icon: "💰",
      title: "Выгода 165 000 ₽",
      description: "Экономия на оснащении лаборатории — насос отдельно не покупаете",
    },
    {
      icon: "🏆",
      title: "Проверенное качество",
      description: "Оригинальное оборудование Ivoclar Vivadent с долгим сроком службы",
    },
    {
      icon: "🔥",
      title: "Идеальная пара",
      description: "Печь и помпа созданы работать вместе для стабильного обжига",
    },
    {
      icon: "🚚",
      title: "Быстрая отгрузка",
      description: "Оборудование в наличии, доставка по всей России",
    },
    {
      icon: "🤝",
      title: "Поддержка специалистов",
      description: "Консультация менеджеров DENTOPT по установке и работе",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему выгодно</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё для вашей лаборатории
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Готовый комплект оборудования Ivoclar Vivadent с максимальной выгодой для зуботехников
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}