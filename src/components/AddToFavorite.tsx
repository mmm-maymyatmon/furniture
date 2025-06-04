import {
  Button,
  buttonVariants,
  type VariantProps,
} from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { useFetcher } from 'react-router';

interface FavoriteProp extends VariantProps<typeof buttonVariants> {
  productId: string;
  rating: number;
  isFavorite: boolean;
  className?: string;
}

function AddToFavorite({
  productId,
  // rating,
  isFavorite,
  className,
  ...props
}: FavoriteProp) {
  const fetcher = useFetcher({ key: `product:${productId}` });

  let favorite = isFavorite;
  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';

  }


  return (
    <fetcher.Form method="post">
      <Button
        variant="secondary"
        size="icon"
        className={cn('size-8 shrink-0', className)}
        name="favorite"
        value={favorite ? 'false' : 'true'}
        title={favorite ? 'Remove from favorite' : 'Add to favorite'}
        {...props}
      >
        {favorite ? (
          <Icons.heartfill className="size-4 text-red-500" />
        ) : (
          <Icons.heart className="size-4 text-red-500" />
        )}
        {/* <Icons.heart className="size-4" /> */}
      </Button>
    </fetcher.Form>
  );
}

export default AddToFavorite;
