import type { Product } from '@/types';
import { Link } from 'react-router';
import { Icons } from '@/components/Icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '../ui/button';
import { formatPrice, cn } from '@/lib/utils';

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

const imageUrl = import.meta.env.VITE_IMG_URL;
function ProductCard({ product, className }: ProductProps) {
  return (
    <Card className={cn('w-full overflow-hidden rounded-lg pt-0', className)}>
      <Link to={`/products/${product.id}`}>
        <CardHeader className="p-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={imageUrl + product.images[0].path}
              alt="product image"
              className="size-full object-cover"
              loading="lazy"
              decoding='async'
            />
          </AspectRatio>
        </CardHeader>
      </Link>
      <CardContent className="space-x-1.5">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>
          {formatPrice(product.price)}
          {product.discount > 0 && (
            <span className="ml-2 font-earthlight line-through">
              {formatPrice(product.discount)}
            </span>
          )}
        </CardDescription>
      </CardContent>
      <CardFooter>
        {product.status === 'sold' ? (
          <Button size="sm" disabled aria-label="Sold out" className="w-full">
            Sold out
          </Button>
        ) : (
          <Button className="w-full bg-emeraldGreen">
            <Icons.plus /> Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
