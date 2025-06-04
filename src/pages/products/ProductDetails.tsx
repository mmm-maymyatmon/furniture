import {  useLoaderData, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
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
// import AddToFavorite from '@/components/TanstackOptimistic';
import AddToCartForm from '@/components/products/AddToCartForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useSuspenseQuery } from '@tanstack/react-query';
import { oneProductQuery, productQuery } from '@/api/query';
import type { Image, Product } from '@/types';

const imageURL = import.meta.env.VITE_IMG_URL;
function ProductDetails() {
  
  // const { productId } = useParams();
  // const product = products.find((product) => product.id === Number(productId));

  const navigate = useNavigate();
  const { productId } = useLoaderData();
  const { data: productsData } = useSuspenseQuery(productQuery('?limit=4'));
  const { data: productDetail } = useSuspenseQuery(oneProductQuery(productId));

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  return (
    <div className="container mx-auto py-10 lg:px-0 px-4">
      <Button variant="outline" className='mt-8' onClick={() => navigate(-1)}>
      <Icons.arrowLeft className="mr-2" />
      All Products
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
              {productDetail.product.images?.map((img: Image) => (
                <CarouselItem key={img.id} className="p-0">
                  <Card className="p-0">
                    <CardContent className="flex w-full md:h-120 h-full aspect-square items-center justify-center p-0">
                      <img
                        src={imageURL + img.path}
                        alt={productDetail.product.name}
                        className="size-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                        decoding="async"
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
            {productDetail.product.name}
          </h2>
          <p className="text-base text-muted-foreground">
            {formatPrice(Number(productDetail.product.price))}
          </p>
          <Separator className="my-1.5" />
          <p className="text-base text-muted-foreground">
            {productDetail.product.inventory} in stock
          </p>
          <div className="flex justify-between items-center">
            <Rating rating={Number(productDetail.product.rating)} />
            <AddToFavorite
              productId={String(productDetail.product.id)}
              rating={Number(productDetail.product.rating)}
              isFavorite={productDetail.product.User.length === 1}
            />
          </div>
          <AddToCartForm canBuy={productDetail.product.status === 'ACTIVE'} />
          <Separator className="my-1.5" />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {productDetail.product.description ??
                  'No description is available for this product.'}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          More Products from HomeNest
        </h2>
        <ScrollArea className="whitespace-nowrap">
          <div className="w-full flex space-x-4 p-0">
            {productsData.products.slice(0, 4).map((item: Product) => (
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
