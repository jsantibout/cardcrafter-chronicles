import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Mobile Menu */}
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="md:hidden"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <a href="/" className="w-full cursor-pointer">
                  Home
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/blog" className="w-full cursor-pointer">
                  Blog
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/about" className="w-full cursor-pointer">
                  About
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}