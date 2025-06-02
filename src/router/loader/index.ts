import  { authApi } from '@/api';
import { postInfiniteQuery, postQuery, productQuery, queryClient, onePostQuery, categoryTypeQuery, productInfiniteQuery } from '@/api/query';
import useAuthStore, { Status } from '@/components/store/authStore';
import { LoaderFunctionArgs, redirect } from 'react-router';

// export const homeLoader = async () => {
//   try {
//     const products = await api.get("user/products?limit=8");
//     console.log("products.data", products.data);
//     const posts = await api.get("user/posts/infinite?limit=3");
//     return { productsData: products.data, postsData: posts.data };
//   } catch (error) {
//     console.log("HomeLoader error:", error);
//     return { productsData: { products: [] }, postsData: { posts: [] } };
//   }
// };

export const homeLoader = async () => {
  await queryClient.ensureQueryData(productQuery("?limit=8"));
  await queryClient.ensureQueryData(postQuery("?limit=6"));
  return null;
}


export const loginLoader = async () => {
  try {
    const response = await authApi.get('auth-check');
    if (response.status !== 200) {
      return null;
    }
    return redirect('/');
  } catch (error) {
    console.log('LoginLoader error', error);
  }
};

export const otpLoader = async () => {
  const authStore = useAuthStore.getState();

  if (authStore.status !== Status.otp) {
    return redirect('/register');
  }

  return null;
};

export const confirmLoader = async () => {
  const authStore = useAuthStore.getState();

  if (authStore.status !== Status.confirm) {
    return redirect('/register');
  }

  return null;
};

export const blogInfiniteLoader = async () => {
  await queryClient.ensureInfiniteQueryData(postInfiniteQuery());
  return null;
}

export const postLoader = async ({ params }: LoaderFunctionArgs ) => {
  if ( !params.postId) {
    throw new Error("No Post ID provided");

  }
  await queryClient.ensureQueryData(postQuery("?limit=6"))
  await queryClient.ensureQueryData(onePostQuery(Number(params.postId)));
  return { postId: params.postId}
}

export const productInfiniteLoader = async () => {
  await queryClient.ensureQueryData(categoryTypeQuery());
  await queryClient.prefetchInfiniteQuery(productInfiniteQuery());
  return null;
}
