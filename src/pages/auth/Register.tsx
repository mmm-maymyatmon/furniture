import { Icons } from "@/components/icons"
import { Link } from "react-router"

function Register() {
  return (
    <div className="relative">
      <Link to="/" className="fixed top-6 left-8 flex items-center text-lg font-bold tracking-tight">
      <Icons.logo className="size-10 bg-emeraldGreen text-white p-2 rounded-md" aria-hidden="true" />
        <span>HomeNest</span>
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
