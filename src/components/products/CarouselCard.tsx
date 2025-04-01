import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { products } from '@/data/products';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Link } from 'react-router';

export function CarouselCard() {
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
                <CardContent className='flex gap-4 w-full'>
                  <div className='w-30 h-30 bg-gray-200'><img className="w-full h-full object-cover" src={product.image} alt={product.name}/></div>
                  <div>
                  <h3 className='font-bold text-emeraldGreen pb-2'>{product.name}</h3>
                  <span>{product.description}</span><br/>
                  <Link className='text-emeraldGreen' to={`/products/${product.id}`}>Read More</Link>
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
