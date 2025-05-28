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

interface ProductProps {
  products: Product[];
}

const imageUrl = import.meta.env.VITE_IMG_URL;

export default function CarouselCard({products}: ProductProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full container mt-10">
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card>
                <CardContent className="flex gap-4 w-full">
                  <div className="w-30 h-30 bg-gray-200">
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
                    <span className="line-clamp-2">{product.description}</span>
                    <br />
                    <Link
                      className="text-orange-400 hover:text-emeraldGreen-700 focus:text-emeraldGreen-700"
                      to={`/products/${product.id}`}
                    >
                      Read More
                    </Link>
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
