export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-sm border border-border">
              <img
                src="https://cdn.poehali.dev/projects/eb76fa82-8794-471c-bf81-8f28db6f22ad/files/d70917e1-91ba-4e8a-a3b6-f7bcb7994c23.jpg"
                alt="Печь Programat P310/G2"
                className="w-full max-h-56 object-contain"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm border border-border">
              <img
                src="https://cdn.poehali.dev/projects/eb76fa82-8794-471c-bf81-8f28db6f22ad/files/95396791-8907-4a44-86b9-09feeffd438c.jpg"
                alt="Насос VP5"
                className="w-32 h-24 object-contain flex-shrink-0"
              />
              <div>
                <p className="text-accent font-bold text-lg">+ Насос VP5</p>
                <p className="text-muted-foreground text-sm">в подарок при покупке печи</p>
                <p className="text-foreground font-semibold text-sm mt-1">стоимость 165 000 ₽</p>
              </div>
            </div>
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