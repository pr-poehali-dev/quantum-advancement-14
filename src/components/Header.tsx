import { Button } from "@/components/ui/button"

export function Header() {
  const handleGetStarted = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://cdn.poehali.dev/projects/eb76fa82-8794-471c-bf81-8f28db6f22ad/bucket/fe8f3814-b53b-46e6-9f01-be7d1adbc96f.png" alt="DENTOPT" className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
            О комплекте
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">
            Выгода
          </a>
          <a href="#booking" className="text-sm text-muted-foreground hover:text-foreground transition">
            Заказать
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition">
            Отзывы
          </a>
        </nav>
        <Button onClick={handleGetStarted} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Заказать
        </Button>
      </div>
    </header>
  )
}