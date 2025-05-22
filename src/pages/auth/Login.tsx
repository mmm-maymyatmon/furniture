import { Icons } from "@/components/Icons";
import { Link } from "react-router";
import Banner from "@/assets/banner.jpg";
import LoginForm from "@/components/auth/LoginForm";

function Login() {
  return (
    <div className="relative min-h-screen bg-background">
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center text-xl font-semibold text-primary hover:opacity-90 transition-all"
      >
        <Icons.logo className="w-6 h-6 mr-2" aria-hidden="true" />
        <span>Artisan Haven</span>
      </Link>

      <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 sm:px-12 py-12 bg-white shadow-md">
          <div className="w-full max-w-md space-y-6">
            <LoginForm />
          </div>
        </div>

        <div className="hidden lg:block relative">
          <img
            src={Banner}
            alt="Artisan Haven"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-lg max-w-sm">
              Discover quality furniture and exclusive deals by logging in.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
