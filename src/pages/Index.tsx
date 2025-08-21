import { Header } from "@/components/Header";
import { CardGrid } from "@/components/CardGrid";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Section 1: Hero / Tezziro 9-Card Grid */}
      <div id="hero-cards">
        <CardGrid />
      </div>
      
      {/* Section 2: Recent Blog Previews */}
      <div id="recent-blogs">
        <BlogPreviewSection className="bg-card/10" />
      </div>
      
      {/* Section 3: Call-to-Action / Explore More */}
      <CallToAction />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;