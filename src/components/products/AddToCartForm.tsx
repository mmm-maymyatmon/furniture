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
import { Icons } from '@/components/icons';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import { useEffect } from 'react';

const quantitySchema = z.object({
  quantity: z
    .string()
    .min(1, 'Must not be empty')
    .max(4, 'Too Many! Is it real?')
    .regex(/^\d+$/, 'Must be a number'),
});

interface ShowBuyNowProps {
  canBuy: boolean;
  onHandleCart: (quantity: number) => void;
  idInCart: number;
}

export default function AddToCartForm({
  canBuy,
  onHandleCart,
  idInCart,
}: ShowBuyNowProps) {
  const cartItem = useCartStore((state) =>
    state.carts.find((item) => item.id === idInCart)
  );

  console.log(canBuy);
  const form = useForm<z.infer<typeof quantitySchema>>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: cartItem ? cartItem.quantity.toString() : '1',
    },
  });

  const { setValue, watch } = form;
  const currentQuantity = Number(watch('quantity'));

  useEffect(() => {
    if (cartItem) {
      setValue('quantity', cartItem.quantity.toString(), {
        shouldValidate: true,
      });
    }
  }, [cartItem, setValue]);

  const handleDecrease = () => {
    const newQuantity = Math.max(currentQuantity - 1, 0); // Min limit 0
    setValue('quantity', newQuantity.toString(), { shouldValidate: true });
  };

  const handleIncrease = () => {
    const newQuantity = Math.min(currentQuantity + 1, 9999); // Max limit 9999
    setValue('quantity', newQuantity.toString(), { shouldValidate: true });
  };

  function onSubmit(values: z.infer<typeof quantitySchema>) {
    onHandleCart(Number(values.quantity));
    toast.success( cartItem? "Updated Cart Successfully" : 'Product is added to cart successfully.' );
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
                  onClick={handleDecrease}
                  disabled={currentQuantity <= 1}
                >
                  <Icons.minus className="size-3" aria-hidden="true" />
                </Button>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={9999}
                    {...field}
                    className="h-8 w-full rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </FormControl>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="rounded-l-none size-8"
                  onClick={handleIncrease}
                  disabled={currentQuantity >= 9999}
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
            {cartItem ? 'Update Cart' : 'Add To Cart'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
