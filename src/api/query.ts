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

const fetchInfinitePosts = async ({ pageParam = null }) => {
    const query = pageParam ? `?limit=6&cursor=${pageParam}` : "?limit=6";
    const response = await api.get(`user/posts/infinite${query}`);
    return response.data;
}

export const postInfiniteQuery = () => ({
    queryKey: ["posts", "infinite"],
    queryFn: fetchInfinitePosts,
    initialPageParam: null, //Start with no cursor
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor ?? undefined,
    // getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor ?? undefined,
    //maxPages: 6
})