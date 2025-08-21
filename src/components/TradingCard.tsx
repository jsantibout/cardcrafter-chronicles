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
      case 'illustration rare': return 'shadow-glow border-rainbow-gradient';
      default: return 'shadow-card border-primary/50';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'fire type': return 'bg-fire/20 text-fire border-fire/30';
      case 'water type': return 'bg-water/20 text-water border-water/30';
      case 'grass type': return 'bg-grass/20 text-grass border-grass/30';
      case 'electric type': return 'bg-lightning/20 text-lightning border-lightning/30';
      case 'psychic type': return 'bg-psychic/20 text-psychic border-psychic/30';
      case 'fighting type': return 'bg-fighting/20 text-fighting border-fighting/30';
      case 'darkness type': return 'bg-darkness/20 text-darkness border-darkness/30';
      case 'normal type': return 'bg-muted/20 text-muted-foreground border-muted/30';
      case 'colorless type': return 'bg-card/20 text-foreground border-border/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <div 
      className={cn(
        "group relative cursor-pointer transition-all duration-300",
        "hover:scale-105 hover:z-10",
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
            <span className={cn(
              "text-xs font-medium px-2 py-1 rounded-full border",
              getTypeColor(type)
            )}>{type}</span>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
              {rarity}
            </span>
          </div>
        </div>

        {/* Holographic Effect Overlay */}
        <div className="absolute inset-0 bg-rainbow-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-fire/10 via-transparent to-water/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      
      {/* Floating Purchase Indicator */}
      <div className="absolute -top-2 -right-2 bg-lightning text-background text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse">
        Buy Now
      </div>
    </div>
  );
}