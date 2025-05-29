import { QueryClient } from '@tanstack/react-query';
import api from './index';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, //5 mins   
            // retry: 2,
        }
    }
});

const fetchProducts = async(q?: string) => {
    const response = await api.get(`user/products${q ?? ""}`);
    return response.data;
}

// useQuery({ queryKey, queryFn})
// useMutation

export const productQuery = (q?: string) => ({
    queryKey: ["products", q],
    queryFn: ()=> fetchProducts(q),
})

const fetchPosts = async(q?: string) => {
    const response = await api.get(`user/posts/infinite${q ?? ""}`);
    return response.data;
}


export const postQuery = (q?: string) => ({
    queryKey: ["posts", q],
    queryFn: ()=> fetchPosts(q),
})