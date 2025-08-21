import { HeroSection } from "@/components/HeroSection";
import { CardGrid } from "@/components/CardGrid";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <div id="featured-cards">
        <CardGrid />
      </div>
      
      <div id="latest-chronicles">
        <BlogPreviewSection className="bg-card/20" />
      </div>
    </div>
  );
};

export default Index;