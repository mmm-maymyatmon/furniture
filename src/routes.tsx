import { lazy, Suspense } from 'react';
import { createBrowserRouter, redirect } from 'react-router';
import RootLayout from '@/pages/RootLayout';
import Home from '@/pages/Home';
import Error from '@/pages/Error';
import About from '@/pages/About';
import Login from './pages/auth/Login';
import {
  blogInfiniteLoader,
  confirmLoader,
  // homeLoader,
  loginLoader,
  newPasswordLoader,
  otpLoader,
  postLoader,
  productInfiniteLoader,
  productLoader,
  verifyLoader,
} from '@/router/loader';
import {
  confirmAction,
  favoriteAction,
  loginAction,
  logoutAction,
  newPasswordAction,
  otpAction,
  registerAction,
  resetAction,
  verifyAction,
} from './router/action';
import AuthRootLayout from './pages/auth/AuthRootLayout';
import OtpPage from './pages/auth/Otp';
import SignUpPage from './pages/auth/SignUp';
import ConfirmPasswordPage from './pages/auth/ConfirmPassword';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import VerifyOtpPage from './pages/auth/VerifyOtpPage';
import NewPasswordPage from './pages/auth/NewPasswordPage';
import Services from './pages/Services';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

const Blog = lazy(() => import('@/pages/blogs/Blog'));
const BlogDetails = lazy(() => import('@/pages/blogs/BlogDetails'));
const BlogRootLayout = lazy(() => import('@/pages/blogs/BlogRootLayout'));

const ProductRootLayout = lazy(
  () => import('@/pages/products/ProductRootLayout')
);
const Product = lazy(() => import('@/pages/products/Product'));
const ProductDetails = lazy(() => import('@/pages/products/ProductDetails'));

const SuspenseFallback = () => <div className="text-center">Loading...</div>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Home />,
        // loader: homeLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,

      },
      {
        path: 'blogs',
        element: (
          <Suspense fallback={<SuspenseFallback />}>
            <BlogRootLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <Blog />
              </Suspense>
            ),
            loader: blogInfiniteLoader,
          },
          {
            path: ':postId',
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <BlogDetails />
              </Suspense>
            ),
            loader: postLoader,
          },
        ],
      },
      {
        path: 'products',
        element: <ProductRootLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <Product />
              </Suspense>
            ),
            loader: productInfiniteLoader,
          },
          {
            path: ':productId',
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <ProductDetails />
              </Suspense>
            ),
            loader: productLoader,
            action: favoriteAction,
          },
        ],
      }
      
    ],
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,
    action: loginAction,
  },
  {
    path: '/success',
    element: <Success />,
    
  },
  {
    path: '/cancel',
    element: <Cancel />,
  },
  {
    path: '/register',
    element: <AuthRootLayout />,
    children: [
      {
        index: true,
        element: <SignUpPage />,
        loader: loginLoader,
        action: registerAction,
      },
      {
        path: 'otp',
        element: <OtpPage />,
        loader: otpLoader,
        action: otpAction,
      },
      {
        path: 'confirm-password',
        element: <ConfirmPasswordPage />,
        loader: confirmLoader,
        action: confirmAction,
      },
    ],
  },
  {
    path: '/logout',
    action: logoutAction,
    loader: () => redirect('/'),
  },
  {
    path: "/reset",
    element: <AuthRootLayout />,
    children: [
      {
        index: true,
        element: <ResetPasswordPage />,
        action: resetAction,
      }, 
      {
        path: "verify",
        element: <VerifyOtpPage />,
        loader: verifyLoader,
        action: verifyAction
      
      },
      {
        path: "new-password",
        element: <NewPasswordPage />,
        loader: newPasswordLoader,
        action: newPasswordAction
      
      }
    ]
  }
]);
