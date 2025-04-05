import { Link, useParams } from "react-router";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCard from "@/components/products/ProductCard";

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));

  return (
    <div className="container mx-auto py-10 lg:px-0 px-4">
      <Button variant="outline" asChild>
        <Link to="/blogs" className="flex items-center">
          <Icons.arrowLeft className="mr-2" />
          All Products
        </Link>
      </Button>

      {product ? (
        <div className="my-6">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground">{product.description}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          More Products from Furniture Shop
        </h2>
        <ScrollArea className="whitespace-nowrap">
          <div className="w-full flex space-x-4 p-0">
            {products.slice(0, 4).map((item) => (
              <ProductCard key={item.id} product={item} className="min-w-[260px]" />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

export default ProductDetails;
