import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BlogPreviewProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  publishDate: string;
  readTime: string;
  slug: string;
}

export function BlogPreview({ 
  id, 
  title, 
  excerpt, 
  image, 
  publishDate, 
  readTime, 
  slug 
}: BlogPreviewProps) {
  return (
    <Card className="group overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card bg-card/50 backdrop-blur-sm">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>{publishDate}</span>
          <span>•</span>
          <span>{readTime} read</span>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Button 
          variant="secondary" 
          className="w-full bg-secondary/80 hover:bg-secondary transition-colors"
          onClick={() => window.location.href = `/blog/${slug}`}
        >
          Read Story
        </Button>
      </CardContent>
    </Card>
  );
}

interface BlogPreviewSectionProps {
  className?: string;
}

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
  }
];

export function BlogPreviewSection({ className }: BlogPreviewSectionProps) {
  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-holographic bg-clip-text text-transparent mb-4">
            Latest Chronicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the rich lore and strategies behind your favorite trading cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <BlogPreview key={post.id} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-card/50 border-2 border-primary/30 hover:border-primary hover:bg-primary/10"
            onClick={() => window.location.href = '/blog'}
          >
            View All Chronicles
          </Button>
        </div>
      </div>
    </section>
  );
}