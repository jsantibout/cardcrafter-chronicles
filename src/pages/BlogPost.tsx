import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import tezziro1 from "@/assets/tezziro-1.jpg";

// Sample blog post data - in a real app, this would come from your backend/CMS
const blogPosts = {
  "origins-of-tezziro": {
    id: 1,
    title: "The Origins of Tezziro: From Artificer to Planeswalker",
    content: `
      <p>In the multiverse of trading card games, few characters capture the imagination quite like Tezziro, the Artifact Wielder. His journey from a brilliant artificer to one of the most feared planeswalkers is a tale of ambition, power, and the dangerous allure of perfection through artifice.</p>
      
      <h2>The Early Years</h2>
      <p>Born on the metal-rich plane of Esper, Tezziro showed an early aptitude for working with artifacts and mechanical constructs. Unlike his peers who were content with simple enchantments, Tezziro pushed the boundaries of what was possible, blending magic and technology in ways that both amazed and terrified his mentors.</p>
      
      <h2>The Transformation</h2>
      <p>The turning point came when Tezziro discovered ancient texts describing the process of planeswalker ascension through artificial enhancement. Driven by his desire for perfection and ultimate power, he began replacing parts of his own body with specially crafted artifacts, each one increasing his magical abilities.</p>
      
      <p>The final transformation was both beautiful and terrible to behold. As he integrated the last piece—a crystalline heart that pulsed with pure mana—Tezziro's spark ignited, catapulting him across the multiverse and cementing his status as a planeswalker.</p>
      
      <h2>Legacy and Impact</h2>
      <p>Today, Tezziro's cards are among the most sought-after in competitive play. His ability to turn artifacts into creatures, control the battlefield through mechanical constructs, and reshape reality itself makes him a formidable opponent and a valuable ally.</p>
      
      <p>Whether you're a collector drawn to the intricate artwork or a player seeking to harness his power, Tezziro represents the perfect fusion of storytelling and strategic gameplay that makes trading card games so compelling.</p>
    `,
    excerpt: "Discover the compelling backstory of how a brilliant artificer transcended mortality to become one of the multiverse's most feared planeswalkers.",
    image: tezziro1,
    publishDate: "December 15, 2024",
    readTime: "5 min",
    author: "Chronicle Keeper",
    tcgPlayerUrl: "https://www.tcgplayer.com/"
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The chronicle you're looking for doesn't exist.</p>
          <Button onClick={() => window.location.href = '/'}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Chronicles
          </Button>
          
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
            onClick={() => window.open(post.tcgPlayerUrl, '_blank')}
          >
            Buy Cards
          </Button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
        <div className="bg-card/90 backdrop-blur-sm rounded-xl border border-border p-8 shadow-card">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} read</span>
              </div>
              <span>by {post.author}</span>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-h2:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Ready to Add Tezziro to Your Collection?</h3>
              <p className="text-muted-foreground mb-4">Get the best prices on Tezziro cards from trusted sellers.</p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
                onClick={() => window.open(post.tcgPlayerUrl, '_blank')}
              >
                Shop on TCGPlayer
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Footer Spacing */}
      <div className="h-16" />
    </div>
  );
}