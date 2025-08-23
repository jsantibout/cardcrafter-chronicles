import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogSidebar } from "@/components/BlogSidebar";
import { BlogPagination } from "@/components/BlogPagination";
import { BlogPreview } from "@/components/BlogPreviewSection";

const samplePosts = [
  {
    id: 1,
    title: "Commander Bestiary MTG Deck Guide: Mm'menon, the Right Hand",
    excerpt: "The Reality Chip is now fully sentient and ready to take over your games.",
    image: "https://images.pokemontcg.io/sv8/105_hires.png",
    publishDate: "Aug 23, 2025",
    readTime: "5 min",
    slug: "origins-of-tezziro",
    category: "COMMANDER",
    author: "Jason Coles",
    isNew: true
  },
  {
    id: 2,
    title: "The Top 10 Hottest MTG Cards Sold This Week - 08/22/2025",
    excerpt: "It's Toph's world, we're just living in it and buying her cards at premium prices.",
    image: "https://images.pokemontcg.io/sv8/71_hires.png",
    publishDate: "Aug 22, 2025",
    readTime: "8 min",
    slug: "artifact-storm-guide",
    category: "MARKET",
    author: "Emma Partlow",
    isNew: true
  },
  {
    id: 3,
    title: "What's the Best MTG Deck in Legacy Right Now? Eternal Weekend Edition!",
    excerpt: "Pondering on what to play at Eternal Weekend? Fear not, as Reid has you covered.",
    image: "https://images.pokemontcg.io/sv6/75_hires.png",
    publishDate: "Aug 22, 2025",
    readTime: "10 min",
    slug: "mechanical-dragon-analysis",
    category: "LEGACY",
    author: "Reid Duke",
    isNew: true
  },
  {
    id: 4,
    title: "The Crazy Valuable MTG—FINAL FANTASY Promo Cards You Don't Know About",
    excerpt: "There's a lot of Gil in these Promos, and you might already own some without knowing it.",
    image: "https://images.pokemontcg.io/sv6/30_hires.png",
    publishDate: "Aug 21, 2025",
    readTime: "6 min",
    slug: "artifact-deck-building",
    category: "COLLECTIBLES",
    author: "Emma Partlow"
  },
  {
    id: 5,
    title: "The Biggest Price Spikes in MTG This Week - 08/21/2025",
    excerpt: "Avatar, the Next Fortnite Colander, and other cards seeing major price increases.",
    image: "https://images.pokemontcg.io/sv8/111_hires.png",
    publishDate: "Aug 21, 2025",
    readTime: "5 min",
    slug: "tezziro-art-analysis",
    category: "MARKET",
    author: "Corbin Hosler"
  },
  {
    id: 6,
    title: "Standard Dimir Midrange MTG Deck Guide - Best Cards, How to Sideboard",
    excerpt: "Reid Duke ❤️ Black-based Midrange strategies, and this one is looking so good.",
    image: "https://images.pokemontcg.io/sv8/43_hires.png",
    publishDate: "Aug 20, 2025",
    readTime: "12 min",
    slug: "dimir-midrange-guide",
    category: "STANDARD",
    author: "Reid Duke"
  },
  {
    id: 7,
    title: "Commander Bestiary MTG Deck Guide: Haliya, Guided by Light",
    excerpt: "Getting ahead in life has never looked so good with this new commander build.",
    image: "https://images.pokemontcg.io/sv6pt5/28_hires.png",
    publishDate: "Aug 20, 2025",
    readTime: "5 min",
    slug: "haliya-commander-guide",
    category: "COMMANDER",
    author: "Jason Coles"
  },
  {
    id: 8,
    title: "The Best MTG Commander Precon Decks You Should Buy Right Now",
    excerpt: "New to Commander but don't know where to start? Fret not, we've got you covered.",
    image: "https://images.pokemontcg.io/sv5/129_hires.png",
    publishDate: "Aug 19, 2025",
    readTime: "9 min",
    slug: "best-commander-precons",
    category: "COMMANDER",
    author: "Jason Coles"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        {/* Header Section */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
            ARTICLES
          </h1>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
            <a href="/blog" className="text-primary font-medium border-b-2 border-primary pb-1">
              All Articles
            </a>
            <a href="/blog/commander" className="text-muted-foreground hover:text-primary transition-colors pb-1">
              Commander
            </a>
            <a href="/blog/legacy" className="text-muted-foreground hover:text-primary transition-colors pb-1">
              Legacy
            </a>
            <a href="/blog/limited" className="text-muted-foreground hover:text-primary transition-colors pb-1">
              Limited
            </a>
            <a href="/blog/modern" className="text-muted-foreground hover:text-primary transition-colors pb-1">
              Modern
            </a>
            <a href="/blog/pauper" className="text-muted-foreground hover:text-primary transition-colors pb-1">
              Pauper
            </a>
            <a href="/blog/pioneer" className="text-muted-foreground hover:text-primary transition-colors pb-1">
              Pioneer
            </a>
            <a href="/blog/standard" className="text-muted-foreground hover:text-primary transition-colors pb-1">
              Standard
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Main Content Area - Grid Layout */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {samplePosts.map((post) => (
                <BlogPreview key={post.id} {...post} variant="grid" />
              ))}
            </div>
            
            <BlogPagination />
          </div>
          
          {/* Sidebar */}
          <aside className="w-full lg:w-80 mt-6 lg:mt-0">
            <div className="lg:hidden mb-4">
              <h2 className="text-xl font-semibold text-primary mb-3">More Content</h2>
            </div>
            <BlogSidebar />
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}