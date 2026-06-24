export function Testimonials() {
  const testimonials = [
    {
      name: "Андрей Соколов",
      role: "Зубной техник, частная лаборатория",
      image: "/professional-man-headshot.png",
      quote:
        "Programat P310 работает безупречно каждый день. А насос VP5 в подарок стал приятным бонусом — раньше планировал покупать его отдельно за большие деньги.",
    },
    {
      name: "Марина Власова",
      role: "Руководитель зуботехнической лаборатории",
      image: "/professional-woman-headshot.png",
      quote:
        "Заказывала комплект в DENTOPT — отгрузили быстро, менеджер всё подробно проконсультировал. Печь и помпа отлично работают в паре, результат обжига стабильный.",
    },
    {
      name: "Игорь Петренко",
      role: "Технический директор клиники",
      image: "/professional-woman-smiling.png",
      quote:
        "Оригинальное оборудование Ivoclar по цене одной печи — отличная экономия для оснащения. Качество и надёжность на высоте, рекомендую коллегам.",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Отзывы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Что говорят наши клиенты</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}