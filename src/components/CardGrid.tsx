import { TradingCard } from "./TradingCard";
import dudunsparce from "@/assets/dudunsparce.png";
import torkoal from "@/assets/torkoal.png";
import wattrel from "@/assets/wattrel.png";
import golbat from "@/assets/golbat.png";
import slowpoke from "@/assets/slowpoke.png";
import passimian from "@/assets/passimian.png";
import vibrava from "@/assets/vibrava.png";
import togetic from "@/assets/togetic.png";
import spheal from "@/assets/spheal.png";

const cardData = [
  {
    id: 1,
    image: dudunsparce,
    title: "Dudunsparce",
    type: "Normal Type",
    rarity: "Illustration Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/search/pokemon/temporal-forces?q=Dudunsparce"
  },
  {
    id: 2,
    image: torkoal,
    title: "Torkoal",
    type: "Fire Type",
    rarity: "Illustration Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/search/pokemon/twilight-masquerade?q=Torkoal"
  },
  {
    id: 3,
    image: wattrel,
    title: "Wattrel",
    type: "Electric Type",
    rarity: "Illustration Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/search/pokemon/twilight-masquerade?q=Wattrel"
  },
  {
    id: 4,
    image: golbat,
    title: "Golbat",
    type: "Darkness Type",
    rarity: "Illustration Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/search/pokemon/shrouded-fable?q=Golbat"
  },
  {
    id: 5,
    image: slowpoke,
    title: "Slowpoke",
    type: "Psychic Type",
    rarity: "Illustration Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/search/pokemon/stellar-crown?q=Slowpoke"
  },
  {
    id: 6,
    image: passimian,
    title: "Passimian",
    type: "Fighting Type",
    rarity: "Illustration Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/search/pokemon/surging-sparks?q=Passimian"
  },
  {
    id: 7,
    image: vibrava,
    title: "Vibrava",
    type: "Fighting Type",
    rarity: "Illustration Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/search/pokemon/surging-sparks?q=Vibrava"
  },
  {
    id: 8,
    image: togetic,
    title: "Togetic",
    type: "Colorless Type",
    rarity: "Illustration Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/search/pokemon/surging-sparks?q=Togetic"
  },
  {
    id: 9,
    image: spheal,
    title: "Spheal",
    type: "Water Type",
    rarity: "Illustration Rare",
    tcgPlayerUrl: "https://www.tcgplayer.com/search/pokemon/surging-sparks?q=Spheal"
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
              {...card}
            />
          ))}
        </div>

        {/* Caption */}
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-accent animate-glow-pulse">
            ✨ Click a card to purchase on TCGPlayer! ✨
          </p>
        </div>
      </div>
    </section>
  );
}