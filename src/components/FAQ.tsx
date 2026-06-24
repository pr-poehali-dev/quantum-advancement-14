import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "До какого числа действует акция?",
      answer:
        "Акция «печь Programat P310/G2 + насос VP5 в подарок» действует до 30.06.2026. Количество комплектов ограничено, поэтому советуем оформить заявку заранее.",
    },
    {
      question: "Действительно ли насос VP5 идёт в подарок?",
      answer:
        "Да. При покупке печи Programat P310/G2 вакуумный насос Programat VP5 предоставляется бесплатно. Так вы получаете полный комплект Ivoclar по цене одной печи и экономите 165 000 ₽.",
    },
    {
      question: "Оборудование оригинальное?",
      answer:
        "Да, мы поставляем только оригинальное оборудование Ivoclar Vivadent. Это гарантирует проверенное качество, долговечность и стабильный результат обжига.",
    },
    {
      question: "Сколько стоит комплект и есть ли он в наличии?",
      answer:
        "Стоимость комплекта — 595 000 ₽. Оборудование в наличии на складе, отгрузка быстрая. Точные детали и сроки уточнит менеджер при оформлении заказа.",
    },
    {
      question: "Как осуществляется доставка?",
      answer:
        "Мы отправляем заказы по всей России. Быстрая отгрузка — одно из наших ключевых преимуществ. Условия доставки в ваш регион уточните у менеджера.",
    },
    {
      question: "Как сделать заказ?",
      answer:
        "Оставьте заявку на сайте или свяжитесь с нами через мессенджеры MAX, Telegram либо по телефону +7 (800) 550-03-52. Менеджер DENTOPT поможет оформить заказ и ответит на вопросы.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}