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
      case 'illustration rare': return 'shadow-card border-primary/20';
      default: return 'shadow-card border-border';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'fire type': return 'bg-fire/30 text-fire border-fire/40';
      case 'water type': return 'bg-water/30 text-water border-water/40';
      case 'grass type': return 'bg-grass/30 text-grass border-grass/40';
      case 'electric type': return 'bg-lightning/30 text-lightning border-lightning/40';
      case 'psychic type': return 'bg-psychic/30 text-psychic border-psychic/40';
      case 'fighting type': return 'bg-fighting/30 text-fighting border-fighting/40';
      case 'darkness type': return 'bg-darkness/30 text-darkness border-darkness/40';
      case 'normal type': return 'bg-muted/40 text-muted-foreground border-muted/50';
      case 'colorless type': return 'bg-accent/40 text-foreground border-accent/50';
      default: return 'bg-muted/40 text-muted-foreground border-muted/50';
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
        "relative overflow-hidden rounded-xl border bg-card",
        "transition-all duration-300",
        getRarityGlow(rarity)
      )}>
        {/* Card Image */}
        <div className="aspect-[5/7] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        

        {/* Subtle Hover Effect */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Buy Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}