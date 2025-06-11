import { Button } from '@/components/ui/button'
import { Link } from 'react-router' 
import { XCircle } from 'lucide-react'

function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-card shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
              <div className='flex items-center justify-center mb-4'>
              <XCircle className="text-red-500 w-6 h-6 mr-3" /><h1 className="text-3xl font-extrabold text-emeraldGreen">Order Cancelled</h1>
      </div>
        <p className=" mb-6">
          Your order has been successfully cancelled.<br />
          You can return to your cart or continue shopping.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild className="px-6 bg-emeraldGreen py-2 rounded-full transition duration-200">
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cancel
