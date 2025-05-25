import { Icons } from "@/components/Icons"
import { Link } from "react-router"
import { RegisterForm } from "@/components/auth/RegisterForm"

function Register() {
  return (
    <div className="relative">
      <Link to="/" className="fixed top-6 left-8 flex items-center text-lg font-bold tracking-tight">
        <Icons.logo className="size-6 mr-2" aria-hidden="true" />
        <span>Furniture Shop</span>
      </Link>

      <main className="min-h-screen">
        <div className="flex justify-center items-center py-8 px-4 sm:px-8 lg:px-16">
          <RegisterForm />
        </div>
      </main>
    </div>
  )
}

export default Register
