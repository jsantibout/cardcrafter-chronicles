import { TradingCard } from "./TradingCard";
import tezziro1 from "@/assets/tezziro-1.jpg";
import tezziro2 from "@/assets/tezziro-2.jpg";
import tezziro3 from "@/assets/tezziro-3.jpg";
import tezziro4 from "@/assets/tezziro-4.jpg";
import tezziro5 from "@/assets/tezziro-5.jpg";
import tezziro6 from "@/assets/tezziro-6.jpg";
import tezziro7 from "@/assets/tezziro-7.jpg";
import tezziro8 from "@/assets/tezziro-8.jpg";
import tezziro9 from "@/assets/tezziro-9.jpg";

const cardData = [
  {
    id: 1,
    image: tezziro1,
    title: "Tezziro, Artifact Wielder",
    type: "Planeswalker",
    rarity: "Legendary",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  },
  {
    id: 2,
    image: tezziro2,
    title: "Tezziro's Mechanical Construct",
    type: "Artifact Creature",
    rarity: "Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  },
  {
    id: 3,
    image: tezziro3,
    title: "Tezziro's Arcane Laboratory",
    type: "Legendary Land",
    rarity: "Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  },
  {
    id: 4,
    image: tezziro4,
    title: "Tezziro's Mind Control",
    type: "Instant",
    rarity: "Uncommon",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  },
  {
    id: 5,
    image: tezziro5,
    title: "Tezziro's Transformation",
    type: "Artifact Equipment",
    rarity: "Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  },
  {
    id: 6,
    image: tezziro6,
    title: "Tezziro's Battle Stance",
    type: "Planeswalker",
    rarity: "Legendary",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  },
  {
    id: 7,
    image: tezziro7,
    title: "Tezziro's Ancient Relic",
    type: "Legendary Artifact",
    rarity: "Legendary",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  },
  {
    id: 8,
    image: tezziro8,
    title: "Tezziro's Artifact Storm",
    type: "Sorcery",
    rarity: "Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  },
  {
    id: 9,
    image: tezziro9,
    title: "Tezziro's Mechanical Dragon",
    type: "Legendary Creature",
    rarity: "Legendary",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  }
];

export function CardGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-holographic bg-clip-text text-transparent mb-4">
            Featured Tezziro Cards
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the legendary collection of Tezziro artifacts and spells. Click any card to purchase on TCGPlayer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <TradingCard
              key={card.id}
              {...card}
              className={`animate-float ${index % 3 === 1 ? 'animation-delay-1000' : index % 3 === 2 ? 'animation-delay-2000' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}