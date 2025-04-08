import { Button, buttonVariants, type VariantProps } from './ui/button';
import { cn } from '@/lib/utils';
import { Icons } from './Icons';

interface FavoriteProp extends VariantProps<typeof buttonVariants> {
  productId: string;
  rating: number;
}

function AddToFavorite({
  productId,
  rating,
  className,
  ...props
}: FavoriteProp) {
  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn('size-8 shrink-0', className)}
      {...props}
    >
      <Icons.heart className="size-4" />
    </Button>
  );
}

export default AddToFavorite;
