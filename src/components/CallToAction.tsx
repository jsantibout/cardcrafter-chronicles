import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Ready to Explore More?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Dive deeper into the multiverse of trading cards with our complete collection of stories, strategies, and lore.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/blog'}
          >
            📚 See All Card Stories
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-secondary/50 hover:border-secondary bg-card/50 hover:bg-secondary/10 transition-all duration-300"
            onClick={() => window.location.href = '/gallery'}
          >
            🎨 Browse Card Gallery
          </Button>
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mt-12 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">150+</div>
            <div className="text-sm text-muted-foreground">Cards</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Stories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">25K+</div>
            <div className="text-sm text-muted-foreground">Collectors</div>
          </div>
        </div>
      </div>
    </section>
  );
}