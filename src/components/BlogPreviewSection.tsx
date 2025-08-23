import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPreviewProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  publishDate: string;
  readTime: string;
  slug: string;
  variant?: "grid" | "list";
  category?: string;
  author?: string;
  isNew?: boolean;
}

export function BlogPreview({ 
  title, 
  excerpt, 
  image, 
  publishDate, 
  readTime, 
  slug,
  variant = "grid",
  category = "ARTICLES",
  author = "TCG Chronicles",
  isNew = false
}: BlogPreviewProps) {
  if (variant === "list") {
    return (
      <div className="flex gap-4 py-6 border-b border-border/50 last:border-b-0">
        {/* Thumbnail on the left */}
        <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content on the right, stacked vertically */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-1 hover:text-primary transition-colors cursor-pointer"
              onClick={() => window.location.href = `/blog/${slug}`}>
            {title}
          </h3>
          
          <div className="text-sm text-muted-foreground mb-2">
            {publishDate}
          </div>
          
          <p className="text-muted-foreground text-sm line-clamp-2">
            {excerpt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="group cursor-pointer">
      <a href={`/blog/${slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
              {category}
            </Badge>
          </div>
          
          {/* New Badge */}
          {isNew && (
            <div className="absolute top-3 right-3">
              <Badge variant="destructive" className="bg-red-500 text-white text-xs font-bold">
                NEW
              </Badge>
            </div>
          )}
          
          {/* Read Time */}
          <div className={cn(
            "absolute top-3 right-3 flex items-center gap-1 text-white/90 text-sm bg-black/20 rounded px-2 py-1",
            isNew && "mr-16"
          )}>
            <Clock size={12} />
            <span>{readTime}</span>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-bold leading-tight line-clamp-2 group-hover:text-primary-foreground transition-colors">
                {title}
              </h3>
              <p className="text-sm text-white/80 line-clamp-2 hidden md:block">
                {excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-white/70 pt-2">
                <div className="flex items-center gap-1">
                  <User size={12} />
                  <span>{author}</span>
                </div>
                <span>•</span>
                <span>{publishDate}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Recent Blog Previews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the rich lore and strategies behind your favorite trading cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <BlogPreview key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}