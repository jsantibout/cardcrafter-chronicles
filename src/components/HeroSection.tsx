import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="absolute inset-0 bg-holographic opacity-5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse animation-delay-1000" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-holographic bg-clip-text text-transparent mb-6 animate-float">
            TCG Chronicles
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the stories behind your favorite trading cards. Explore legendary artifacts, 
            powerful spells, and epic creatures in our gamified card universe.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('featured-cards')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Cards
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary/50 hover:border-primary bg-card/50 hover:bg-primary/10 transition-all duration-300"
            onClick={() => document.getElementById('latest-chronicles')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read Chronicles
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Cards Featured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Stories Told</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">25K+</div>
            <div className="text-sm text-muted-foreground">Collectors</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
}