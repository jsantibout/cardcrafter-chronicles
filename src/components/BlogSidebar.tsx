import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const popularPosts = [
  {
    title: "The Origins of Tezziro: From Artificer to Planeswalker",
    slug: "origins-of-tezziro",
    views: "2.1K"
  },
  {
    title: "Decoding the Artifact Storm: Strategy and Lore",
    slug: "artifact-storm-guide", 
    views: "1.8K"
  },
  {
    title: "The Mechanical Dragon: Engineering Marvel",
    slug: "mechanical-dragon-analysis",
    views: "1.5K"
  },
  {
    title: "Building the Perfect Artifact Deck",
    slug: "artifact-deck-guide",
    views: "1.2K"
  },
  {
    title: "Trading Card Market Trends 2024",
    slug: "market-trends-2024",
    views: "980"
  }
];

const tags = [
  { name: "Strategy", count: 12 },
  { name: "Lore", count: 8 },
  { name: "Artifacts", count: 15 },
  { name: "Planeswalkers", count: 6 },
  { name: "Deck Building", count: 10 },
  { name: "Market Analysis", count: 4 },
  { name: "Card Reviews", count: 7 },
  { name: "Tournament", count: 5 }
];

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Popular Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={post.slug} className="group cursor-pointer">
              <a 
                href={`/blog/${post.slug}`}
                className="block hover:text-primary transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-primary/60 min-w-[2rem]">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {post.views} views
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tags / Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Tags & Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge 
                key={tag.name}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag.name} ({tag.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Stay Updated
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest card news and strategy guides delivered to your inbox.
          </p>
          <div className="space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background"
            />
            <button className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}