import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogSidebar } from "@/components/BlogSidebar";
import { BlogPagination } from "@/components/BlogPagination";
import { BlogPreview } from "@/components/BlogPreviewSection";

const samplePosts = [
  {
    id: 1,
    title: "The Origins of Tezziro: From Artificer to Planeswalker",
    excerpt: "Discover the compelling backstory of how a brilliant artificer transcended mortality to become one of the multiverse's most feared planeswalkers.",
    image: "/api/placeholder/600/400",
    publishDate: "Dec 15, 2024",
    readTime: "5 min",
    slug: "origins-of-tezziro"
  },
  {
    id: 2,
    title: "Decoding the Artifact Storm: Strategy and Lore",
    excerpt: "Dive deep into the mechanics and flavor behind Tezziro's most devastating spell, and learn how it reflects his mastery over artifacts.",
    image: "/api/placeholder/600/400",
    publishDate: "Dec 12, 2024",
    readTime: "7 min",
    slug: "artifact-storm-guide"
  },
  {
    id: 3,
    title: "The Mechanical Dragon: Engineering Marvel or Magical Beast?",
    excerpt: "Explore the fascinating fusion of technology and magic that brought Tezziro's greatest creation to life.",
    image: "/api/placeholder/600/400",
    publishDate: "Dec 10, 2024",
    readTime: "6 min",
    slug: "mechanical-dragon-analysis"
  },
  {
    id: 4,
    title: "Building the Perfect Artifact Deck",
    excerpt: "A comprehensive guide to constructing powerful artifact-based strategies in competitive play.",
    image: "/api/placeholder/600/400",
    publishDate: "Dec 8, 2024",
    readTime: "8 min",
    slug: "artifact-deck-building"
  },
  {
    id: 5,
    title: "The Art of Tezziro: Visual Storytelling Through Cards",
    excerpt: "Exploring how the artwork on Tezziro cards tells the story of his transformation and power.",
    image: "/api/placeholder/600/400",
    publishDate: "Dec 5, 2024",
    readTime: "4 min",
    slug: "tezziro-art-analysis"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Blog Feed
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover the latest stories, strategies, and lore from the world of trading cards.
              </p>
            </div>
            
            <div className="bg-card/30 border border-border rounded-lg p-6">
              {samplePosts.map((post) => (
                <BlogPreview key={post.id} {...post} variant="list" />
              ))}
            </div>
            
            <BlogPagination />
          </div>
          
          {/* Sidebar */}
          <aside className="w-80 hidden lg:block">
            <BlogSidebar />
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}