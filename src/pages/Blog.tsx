import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { BlogSidebar } from "@/components/BlogSidebar";
import { BlogPagination } from "@/components/BlogPagination";

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
            
            <BlogPreviewSection className="py-0" />
            
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