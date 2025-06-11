import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';

import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import { Link } from 'react-router';

const Success = () => {
  const [width, height] = useWindowSize();
  const amountTotal = useCartStore((state) => state.getTotalPrice());

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <Confetti width={width} height={height} />
      <div className="bg-card shadow-lg rounded-xl p-8 max-w-xl w-full text-center z-10">
        <h1 className="text-3xl font-bold text-emeraldGreen mb-4">
          🎉 Thank you for your order!
        </h1>
        <p className="text-gray-700 mb-6">
          Your order has been successfully placed and is being processed.
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-left mb-4">
            🧾 Order Summary
          </h2>

          <table className="w-full border-collapse mb-4">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium text-left">Order Number:</td>
                <td className="py-2 text-gray-700 text-right">
                  #{Math.floor(Math.random() * 1000000)}
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium text-left">Date:</td>
                <td className="py-2 text-gray-700 text-right">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </td>
              </tr>
              <tr>
                <td className="py-2 font-medium text-left">Total:</td>
                <td className="py-2 text-gray-700 text-right">
                  {formatPrice(amountTotal.toFixed(2))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-left mb-6">
          <h3 className="text-lg font-semibold mb-2">💳 Payment Method</h3>
          <p className="text-gray-700">Credit Card </p>
        </div>
        <Button asChild className="mr-4 bg-emeraldGreen rounded-full">
          <Link to="/">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
};

export default Success;
