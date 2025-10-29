import { useParams, Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="mb-4">Category Not Found</h1>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2" size={18} />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const getImagePath = (imageName: string) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Category Header */}
      <div className="relative h-[300px] mb-12 overflow-hidden">
        <img
          src={getImagePath(category.image)}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-gradient" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom text-primary-foreground">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/products">
                <ArrowLeft className="mr-2" size={18} />
                All Products
              </Link>
            </Button>
            <h1 className="mb-4">{category.name}</h1>
            <p className="text-xl opacity-90">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No products available in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
