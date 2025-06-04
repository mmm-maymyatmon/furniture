import { useIsFetching, useMutation } from '@tanstack/react-query';
import {
  Button,
  buttonVariants,
  type VariantProps,
} from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import api from '@/api';
import { queryClient } from '@/api/query';

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
  const fetching = useIsFetching() > 0;
  let favorite = isFavorite;
  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const data = {
        productId: Number(productId),
        favorite: !isFavorite,
      };

      const response = await api.patch('user/products/toggle-favorite', data);
      if (response.status !== 200) {
        return { error: response.data || 'Adding to favorites failed!' };
      }
      return response.data;
    },
    //   onSuccess: () => { },
    //   onError: () => { },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['products', 'detail', productId],
      });
    },
  });

  if (isPending || fetching) {
    favorite = !isFavorite;
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn('size-8 shrink-0', className)}
      title={favorite ? 'Remove from favorite' : 'Add to favorite'}
      onClick={() => mutate()}
      {...props}
    >
      {favorite ? (
        <Icons.heartfill className="size-4 text-red-500" />
      ) : (
        <Icons.heart className="size-4 text-red-500" />
      )}
      {/* <Icons.heart className="size-4" /> */}
    </Button>
  );
}

export default AddToFavorite;
