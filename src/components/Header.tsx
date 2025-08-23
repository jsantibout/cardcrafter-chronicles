import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TC</span>
            </div>
            <h1 className="text-2xl font-bold text-primary">
              TCG Chronicles
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="/blog" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Blog
            </a>
            <a 
              href="/about" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}