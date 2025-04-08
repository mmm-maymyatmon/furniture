import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/Icons';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const quantitySchema = z.object({
  quantity: z
    .number({ invalid_type_error: 'Enter a valid number' })
    .min(1, { message: 'Minimum quantity is 1' }),
});

interface ShowBuyNowProps {
  canBuy: boolean;
}

export default function AddToCartForm({ canBuy }: ShowBuyNowProps) {
  console.log(canBuy);
  const form = useForm<z.infer<typeof quantitySchema>>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const quantity = form.watch('quantity');

  const increment = () => {
    form.setValue('quantity', quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      form.setValue('quantity', quantity - 1);
    }
  };

  function onSubmit(values: z.infer<typeof quantitySchema>) {
    toast.success('Product is added to cart successfully.');
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-sm w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Quantity</FormLabel>
              <div className="flex items-center relative">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="rounded-r-none size-8"
                  onClick={decrement}
                >
                  <Icons.minus className="size-3" aria-hidden="true" />
                </Button>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    {...field}
                    className="w-16 h-8 rounded-none  border-x-0 text-center"
                  />
                </FormControl>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="rounded-l-none size-8"
                  onClick={increment}
                >
                  <Icons.plus className="size-3" aria-hidden="true" />
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col items-center  md:flex-row  md:space-x-3 md:w-1/3">
          <Button
            type="button"
            aria-label="Buy now"
            size="sm"
            className={cn(
              'w-full font-semibold mt-2',
              canBuy ? 'bg-emeraldGreen' : 'bg-slate-400'
            )}
          >
            Buy Now
          </Button>
          <Button
            type="submit"
            aria-label="Add To Cart"
            variant={canBuy ? 'outline' : 'default'}
            size="sm"
            className="w-full font-semibold mt-2"
          >
            Add To Cart
          </Button>
        </div>
      </form>
    </Form>
  );
}
