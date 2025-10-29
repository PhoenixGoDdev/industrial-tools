import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured);
  const latestProducts = products.filter((p) => p.latest);

  const getImagePath = (imageName: string) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-shadow hover:card-shadow-hover transition-smooth">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                  <Zap className="text-primary-foreground" size={32} />
                </div>
                <h3 className="mb-2">Superior Performance</h3>
                <p className="text-muted-foreground">
                  Engineered for maximum power and efficiency
                </p>
              </CardContent>
            </Card>
            <Card className="text-center card-shadow hover:card-shadow-hover transition-smooth">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                  <Shield className="text-primary-foreground" size={32} />
                </div>
                <h3 className="mb-2">Built to Last</h3>
                <p className="text-muted-foreground">
                  Industrial-grade durability for demanding jobs
                </p>
              </CardContent>
            </Card>
            <Card className="text-center card-shadow hover:card-shadow-hover transition-smooth">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                  <Award className="text-primary-foreground" size={32} />
                </div>
                <h3 className="mb-2">Trusted Worldwide</h3>
                <p className="text-muted-foreground">
                  Preferred by professionals across industries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Discover Our Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive selection of professional-grade tools and equipment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group"
              >
                <Card className="overflow-hidden card-shadow hover:card-shadow-hover transition-smooth">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={getImagePath(category.image)}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end">
                      <div className="p-6 text-secondary-foreground">
                        <h3 className="mb-2">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2">Featured Products</h2>
              <p className="text-muted-foreground">
                Our most popular professional-grade tools
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/products">
                View All <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild>
              <Link to="/products">
                View All Products <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2">Latest Arrivals</h2>
              <p className="text-muted-foreground">
                Check out our newest tools and equipment
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Distributor Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-primary-foreground">Find a Distributor Near You</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Locate authorized dealers and distributors in your region
          </p>
          <Button size="lg" variant="default" asChild>
            <Link to="/where-to-buy">Find Distributor</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
