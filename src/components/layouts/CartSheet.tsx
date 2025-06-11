import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// import { cartItems } from "@/data/carts";
import { Icons } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartItem from "@/components/carts/CartItem";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { createCheckoutSession } from "@/api/query";

export default function CartSheet() {
  // const itemCount = 4;
  // const amountTotal = 190;
  const itemCount = useCartStore((state) => state.getTotalItems());
  const amountTotal = useCartStore((state) => state.getTotalPrice());
  

  const { carts } = useCartStore();

  const makePayment = async () => { 
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

    if (!stripe) {
      console.error("Stripe failed to load.");
      return;
    }
    const imageUrl = import.meta.env.VITE_IMG_URL;
  
    const checkoutItems = carts.map((cart) => ({
      productId: cart.id,
      quantity: cart.quantity,
      unit_price: Math.round(cart.price * 100),
      name: cart.name,
      image: cart.image && cart.image.startsWith("http")
      ? cart.image
      : imageUrl + cart.image,
      currency: "usd",
    }));
  
    try {
      const session = await createCheckoutSession(checkoutItems);
      console.log("Checkout session:", session);
  
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (result?.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  

  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="Open cart"
        >
          {itemCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
            >
              {itemCount}
            </Badge>
          )}
          <Icons.cart className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:max-w-lg">
        <SheetHeader>
          <SheetTitle>
            {itemCount > 0 ? `Cart - ${itemCount}` : "Empty Cart"}
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-2" />
        {carts.length > 0 ? (
          <>
            <ScrollArea className="mb-4 h-[50vh] pb-8">
              <div className="flex-1">
                {carts.map((cart) => (
                  <CartItem cart={cart} key={cart.id} />
                ))}
              </div>
            </ScrollArea>
            <div className="space-y-4">
              <Separator />
              <div className="space-y-1.5 px-4 text-sm">
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>{formatPrice(amountTotal.toFixed(2))}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button  type="submit" asChild className="w-full">
                  
                    <button onClick={makePayment} aria-label="Check out">
                      Continue to checkout
                    </button>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <Icons.cart className="mb-4 size-16 text-muted-foreground" />
            <div className="text-xl font-medium text-muted-foreground">
              Your cart is empty
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}