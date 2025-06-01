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
  otpLoader,
  postLoader,
} from '@/router/loader';
import {
  confirmAction,
  loginAction,
  logoutAction,
  otpAction,
  registerAction,
} from './router/action';
import AuthRootLayout from './pages/auth/AuthRootLayout';
import OtpPage from './pages/auth/Otp';
import SignUpPage from './pages/auth/SignUp';
import ConfirmPasswordPage from './pages/auth/ConfirmPassword';

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
          },
          {
            path: ':productId',
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <ProductDetails />
              </Suspense>
            ),
            
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,
    action: loginAction,
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
]);
