export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="https://cdn.poehali.dev/projects/eb76fa82-8794-471c-bf81-8f28db6f22ad/files/3b9c86bd-4f76-4fad-b4c2-ebf16541f3dc.jpg" alt="Комплект Programat P310/G2 и насос VP5" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О комплекте</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Полный комплект Ivoclar по цене одной печи
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Programat P310/G2 — современная керамическая печь Ivoclar Vivadent для зуботехнических
              лабораторий. Точные программы обжига, интуитивный сенсорный экран и проверенная надёжность.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              В комплекте — вакуумный насос Programat VP5 в подарок. Печь и помпа идеально работают в паре,
              обеспечивая стабильный результат обжига. Вы получаете готовое оснащение и экономите 165 000 ₽.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Оригинальное оборудование Ivoclar Vivadent</p>
                  <p className="text-sm text-muted-foreground">Гарантия качества и долговечности</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Насос VP5 в подарок</p>
                  <p className="text-sm text-muted-foreground">Экономия 165 000 ₽ на оснащении</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">В наличии на складе</p>
                  <p className="text-sm text-muted-foreground">Быстрая отгрузка по всей России</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}