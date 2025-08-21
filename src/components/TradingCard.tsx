import { cn } from "@/lib/utils";

interface TradingCardProps {
  id: number;
  image: string;
  title: string;
  type: string;
  rarity: string;
  tcgPlayerUrl: string;
  className?: string;
}

export function TradingCard({ 
  id, 
  image, 
  title, 
  type, 
  rarity, 
  tcgPlayerUrl, 
  className 
}: TradingCardProps) {
  const handleCardClick = () => {
    window.open(tcgPlayerUrl, '_blank', 'noopener,noreferrer');
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'legendary': return 'shadow-glow border-accent';
      case 'rare': return 'shadow-card border-primary';
      case 'uncommon': return 'shadow-card border-secondary';
      default: return 'shadow-card border-muted';
    }
  };

  return (
    <div 
      className={cn(
        "group relative cursor-pointer transition-all duration-300",
        "hover:animate-card-hover hover:z-10",
        className
      )}
      onClick={handleCardClick}
    >
      <div className={cn(
        "relative overflow-hidden rounded-xl border-2 bg-card",
        "backdrop-blur-sm bg-gradient-to-br from-card/80 to-card/60",
        getRarityGlow(rarity)
      )}>
        {/* Card Image */}
        <div className="aspect-[5/7] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Card Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent p-3">
          <h3 className="text-sm font-bold text-foreground truncate">{title}</h3>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-muted-foreground">{type}</span>
            <span className={cn(
              "text-xs font-semibold px-2 py-1 rounded-full",
              rarity === 'Legendary' && "bg-accent/20 text-accent",
              rarity === 'Rare' && "bg-primary/20 text-primary",
              rarity === 'Uncommon' && "bg-secondary/20 text-secondary",
              rarity === 'Common' && "bg-muted/20 text-muted-foreground"
            )}>
              {rarity}
            </span>
          </div>
        </div>

        {/* Holographic Effect Overlay */}
        <div className="absolute inset-0 bg-holographic opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      
      {/* Floating Purchase Indicator */}
      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse">
        Buy Now
      </div>
    </div>
  );
}