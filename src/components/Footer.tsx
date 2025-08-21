export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          {/* Logo */}
          <div className="mb-6">
            <h3 className="text-xl font-bold bg-holographic bg-clip-text text-transparent">
              TCG Chronicles
            </h3>
          </div>

          {/* Disclaimer */}
          <div className="space-y-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            <p>
              <strong>Fan Site Disclaimer:</strong> TCG Chronicles is an independent fan website dedicated to trading card game content and is not affiliated with any official TCG publishers.
            </p>
            <p>
              <strong>Affiliate Disclosure:</strong> This site contains affiliate links to TCGPlayer and other retailers. 
              We may earn a commission from qualifying purchases at no additional cost to you.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="https://www.tcgplayer.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              TCGPlayer
            </a>
            <a 
              href="/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="/contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              © 2024 TCG Chronicles. All rights reserved. Card artwork and game content are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}