import { TradingCard } from "./TradingCard";

// Helper function to generate TCGPlayer URLs
const generateTCGPlayerUrl = (name: string, set: string, number: string) => {
  const setSlug = set.toLowerCase().replace(/\s+/g, '-');
  return `https://www.tcgplayer.com/search/pokemon/${setSlug}?q=${name}`;
};

const cardData = [
  {
    id: 1,
    name: "Vibrava",
    set: "Surging Sparks",
    number: "TBA",
    image: "https://images.pokemontcg.io/sv8/105_hires.png",
    tcgPlayerUrl: generateTCGPlayerUrl("Vibrava", "Surging Sparks", "TBA"),
    position: { row: 1, col: 1 }
  },
  {
    id: 2,
    name: "Togetic",
    set: "Surging Sparks",
    number: "TBA",
    image: "https://images.pokemontcg.io/sv8/71_hires.png",
    tcgPlayerUrl: generateTCGPlayerUrl("Togetic", "Surging Sparks", "TBA"),
    position: { row: 1, col: 2 }
  },
  {
    id: 3,
    name: "Wattrel",
    set: "Twilight Masquerade",
    number: "75",
    image: "https://images.pokemontcg.io/sv6/75_hires.png",
    tcgPlayerUrl: generateTCGPlayerUrl("Wattrel", "Twilight Masquerade", "75"),
    position: { row: 1, col: 3 }
  },
  {
    id: 4,
    name: "Torkoal",
    set: "Twilight Masquerade",
    number: "30",
    image: "https://images.pokemontcg.io/sv6/30_hires.png",
    tcgPlayerUrl: generateTCGPlayerUrl("Torkoal", "Twilight Masquerade", "30"),
    position: { row: 2, col: 1 }
  },
  {
    id: 5,
    name: "Passimian",
    set: "Surging Sparks",
    number: "TBA",
    image: "https://images.pokemontcg.io/sv8/111_hires.png",
    tcgPlayerUrl: generateTCGPlayerUrl("Passimian", "Surging Sparks", "TBA"),
    position: { row: 2, col: 2 }
  },
  {
    id: 6,
    name: "Spheal",
    set: "Surging Sparks",
    number: "TBA",
    image: "https://images.pokemontcg.io/sv8/43_hires.png",
    tcgPlayerUrl: generateTCGPlayerUrl("Spheal", "Surging Sparks", "TBA"),
    position: { row: 2, col: 3 }
  },
  {
    id: 7,
    name: "Golbat",
    set: "Shrouded Fable",
    number: "28",
    image: "https://images.pokemontcg.io/sv6pt5/28_hires.png",
    tcgPlayerUrl: generateTCGPlayerUrl("Golbat", "Shrouded Fable", "28"),
    position: { row: 3, col: 1 }
  },
  {
    id: 8,
    name: "Dudunsparce",
    set: "Temporal Forces",
    number: "129",
    image: "https://images.pokemontcg.io/sv5/129_hires.png",
    tcgPlayerUrl: generateTCGPlayerUrl("Dudunsparce", "Temporal Forces", "129"),
    position: { row: 3, col: 2 }
  },
  {
    id: 9,
    name: "Slowpoke",
    set: "Stellar Crown",
    number: "57",
    image: "https://images.pokemontcg.io/sv7/57_hires.png",
    tcgPlayerUrl: generateTCGPlayerUrl("Slowpoke", "Stellar Crown", "57"),
    position: { row: 3, col: 3 }
  }
];

export function CardGrid() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-fire/5 to-lightning/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Teeziro's Connected Art Pokemon Cards
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover the amazing 9-card connected artwork by Teeziro from 2024's Pokemon TCG sets.
          </p>
        </div>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {cardData.map((card) => (
            <TradingCard
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.name}
              type=""
              rarity=""
              tcgPlayerUrl={card.tcgPlayerUrl}
            />
          ))}
        </div>

        {/* Caption */}
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-foreground animate-glow-pulse">
            ✨ Click a card to purchase on TCGPlayer! ✨
          </p>
        </div>
      </div>
    </section>
  );
}