import { Link, useParams } from 'react-router';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import ProductCard from '@/components/products/ProductCard';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';
import Rating from '@/components/Rating';
import AddToFavorite from '@/components/AddToFavorite';
import AddToCartForm from '@/components/products/AddToCartForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-10 lg:px-0 px-4">
      <Button variant="outline" asChild>
        <Link to="/products" className="flex items-center">
          <Icons.arrowLeft className="mr-2" />
          All Products
        </Link>
      </Button>
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="w-full md:w-1/2">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {product.images?.map((img, index) => (
                <CarouselItem key={index} className="p-0">
                  <Card className="p-0">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        src={img}
                        alt={`Product ${index + 1}`}
                        className="size-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Separator className="mt-4 md:hidden" />
        </div>
        <div className="flex w-full flex-col gap-4  md:w-1/2">
          <h2 className="line-clamp-1 text-2xl font-bold mb-2">
            {product?.name}
          </h2>
          <p className="text-base text-muted-foreground">
            {formatPrice(Number(product?.price))}
          </p>
          <Separator className="my-1.5" />
          <p className="text-base text-muted-foreground">
            {product?.inventory} in stock
          </p>
          <div className="flex justify-between items-center">
            <Rating rating={Number(product?.rating)} />
            <AddToFavorite
              productId={String(product?.id)}
              rating={Number(product?.rating)}
            />
          </div>
          <AddToCartForm canBuy={product?.status === 'active'} />
          <Separator className="my-1.5" />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className='border-none'>
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {
                  product?.description ?? "No description is available for this product."
                }
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          More Products from Furniture Shop
        </h2>
        <ScrollArea className="whitespace-nowrap">
          <div className="w-full flex space-x-4 p-0">
            {products.slice(0, 4).map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                className="min-w-[260px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

export default ProductDetails;
