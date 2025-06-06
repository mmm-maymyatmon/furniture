import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Link } from 'react-router';
import { Product } from '@/types';
import { Button } from '../ui/button';

interface ProductProps {
  products: Product[];
}

const imageUrl = import.meta.env.VITE_IMG_URL;

export default function CarouselCard({products}: ProductProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full mt-10">
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card>
                <CardContent className="flex gap-4 w-full ">
                  <div className="w-30 h-30 bg-gray-200 rounded-lg overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover"
                      src={imageUrl + product.images[0].path}

                      alt={product.name}
                      loading="lazy"
                      decoding='async'
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-emeraldGreen pb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <span className="line-clamp-1">{product.description}</span>
                    <br />
                    <Button asChild className="bg-orange-300 rounded-full">
                    <Link
                      className="text-white"
                      to={`/products/${product.id}`}
                    >
                      Read More
                    </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
