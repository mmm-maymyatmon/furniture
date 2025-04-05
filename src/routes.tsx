import { createBrowserRouter } from 'react-router';
import RootLayout from '@/pages/RootLayout';
import Home from '@/pages/Home';
import Error from '@/pages/Error';
import About from '@/pages/About';
import Blog from '@/pages/blogs/Blog';
import BlogDetails from '@/pages/blogs/BlogDetails';
import BlogRootLayout from '@/pages/blogs/BlogRootLayout';
import ProductRootLayout from './pages/products/ProductRootLayout';
import Product from './pages/products/Product';
import ProductDetails from './pages/products/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
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
        element: <BlogRootLayout />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ':postId',
            element: <BlogDetails />,
          },
        ],
      },
      {
        path: 'products',
        element: <ProductRootLayout />,
        children: [
          {
            index: true,
            element: <Product />,
          },
          {
            path: ':productId',
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);
