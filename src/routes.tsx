import { lazy, Suspense } from 'react';
import { createBrowserRouter, redirect } from 'react-router';
import RootLayout from '@/pages/RootLayout';
import Home from '@/pages/Home';
import Error from '@/pages/Error';
import About from '@/pages/About';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { homeLoader, loginLoader } from '@/router/loader';
import { loginAction, logoutAction } from './router/action';

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
    loader: homeLoader,
    children: [
      {
        index: true,
        element: <Home />,
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
          },
          {
            path: ':postId',
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <BlogDetails />
              </Suspense>
            ),
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
    element: <Register/>
  },
  {
    path: '/logout',
    action: logoutAction,
    loader: ()=> redirect("/")
  }
]);
