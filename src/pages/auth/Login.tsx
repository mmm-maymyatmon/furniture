import { Icons } from "@/components/Icons"
import { Link } from "react-router"
import Banner from "@/assets/banner.jpg"
import { LoginForm } from "@/components/auth/LoginForm"

function Login() {
  return (
    <div className="relative">
      <Link to="/" className="fixed top-6 left-8 flex items-center text-lg font-bold tracking-tight">
        <Icons.logo className="size-6 mr-2" aria-hidden="true" />
        <span>Furniture Shop</span>
      </Link>

      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center items-center py-8 px-4 sm:px-8 lg:px-16">
          <LoginForm />
        </div>

        <div className="relative lg:block hidden">
          <img src={Banner} alt="Furniture Shop" className="object-cover w-full h-full" />
        </div>
      </main>
    </div>
  )
}

export default Login
