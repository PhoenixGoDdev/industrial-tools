import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="mb-4">Product Not Found</h1>
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
      <div className="container-custom">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/products">
            <ArrowLeft className="mr-2" size={18} />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted">
                <img
                  src={getImagePath(product.image)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="mb-4">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specs && product.specs.length > 0 && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="mb-4">Specifications</h3>
                  <div className="space-y-3">
                    {product.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-2 border-b border-border last:border-0"
                      >
                        <span className="font-medium">{spec.label}</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="flex-1">
                <Link to="/contact">
                  <Mail className="mr-2" size={18} />
                  Request Information
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="flex-1">
                <Link to="/where-to-buy">Find a Distributor</Link>
              </Button>
            </div>

            {/* Additional Info */}
            <Card className="mt-8 bg-muted/50">
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our sales team for detailed product information, pricing, and availability.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/contact">Contact Sales →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
