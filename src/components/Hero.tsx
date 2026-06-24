import { Button } from "@/components/ui/button"

export function Hero() {
  const handleBookSession = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const benefitsSection = document.getElementById("benefits")
    benefitsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium">Акция до 30.06.2026 · Количество ограничено</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Печь Programat P310/G2 + помпа VP5 в подарок
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Готовый комплект для зуботехнической лаборатории: надёжная печь Ivoclar Vivadent и
              профессиональный вакуумный насос, которые идеально работают в паре. Выгода 165 000 ₽.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleBookSession}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base"
              >
                Заказать комплект
              </Button>
              <Button
                onClick={handleLearnMore}
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                Узнать о выгоде
              </Button>
            </div>
            <div className="flex gap-8 pt-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">595 000 ₽</p>
                <p className="text-muted-foreground">Цена комплекта</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">165 000 ₽</p>
                <p className="text-muted-foreground">Ваша выгода</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">В наличии</p>
                <p className="text-muted-foreground">Быстрая отгрузка</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-96 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-accent/5 to-muted/30 rounded-2xl p-6 flex items-center justify-center">
              <img
                src="https://cdn.poehali.dev/projects/eb76fa82-8794-471c-bf81-8f28db6f22ad/bucket/8bf8c888-1725-43a5-b4d8-18b9a41710b8.png"
                alt="Печь Programat P310"
                className="w-full max-h-64 object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-gradient-to-br from-muted/30 to-accent/5 rounded-xl p-4 flex items-center justify-center">
                <img
                  src="https://cdn.poehali.dev/projects/eb76fa82-8794-471c-bf81-8f28db6f22ad/bucket/55eddc95-8128-4418-9ffd-dfb14592df7a.png"
                  alt="Насос VP5"
                  className="w-full max-h-32 object-contain drop-shadow-md"
                />
              </div>
              <div className="flex-1 bg-accent rounded-xl p-4 flex flex-col items-center justify-center text-center gap-1">
                <p className="text-accent-foreground font-bold text-2xl">+165 000 ₽</p>
                <p className="text-accent-foreground/90 text-sm font-medium">ваша экономия</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}