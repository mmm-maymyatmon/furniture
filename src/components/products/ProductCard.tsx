import type { Product } from '@/types';
import { Link } from 'react-router';
import { Icons } from '@/components/icons';
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
import { useCartStore } from '@/store/cartStore';
import { motion } from "motion/react"

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

const imageUrl = import.meta.env.VITE_IMG_URL;
function ProductCard({ product, className }: ProductProps) {
  const { carts, addItem } = useCartStore();
  const cartItem = carts.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].path,
      quantity: 1
    })
  }


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
        {product.status === 'INACTIVE' ? (
          <Button size="sm" disabled aria-label="Sold out" className="w-full">
            Sold out
          </Button>
        ) : (
          <Button className="w-full h-8 bg-emeraldGreen rounded-sm font-bold" onClick={handleAddToCart} disabled={!!cartItem} >
              {!cartItem && <Icons.plus className="size-4" />}
              {!cartItem ? 'Add to cart' : 'Added Item'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
