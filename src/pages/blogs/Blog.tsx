import { useInfiniteQuery } from '@tanstack/react-query';
import { postInfiniteQuery } from '@/api/query';
import BlogPostList from '@/components/blogs/BlogPostList';
import { Button } from '@/components/ui/button';

function Blog() {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    // fetchPreviousPage,
    hasNextPage,
    // hasPreviousPage,
  } = useInfiniteQuery(postInfiniteQuery());

  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];
  return status === 'pending' ? (
    <p>Loading....</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className="container mx-auto py-10 lg:px-0 px-4">
      <h1 className="text-2xl font-bold">Latest Blog Posts</h1>
      <BlogPostList posts={allPosts} />
      <div className="my-4 justify-center text-center">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          variant={!hasNextPage ? 'ghost' : 'secondary'}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </Button>
          </div>
          <div>{ isFetching && !isFetchingNextPage ? "Background Updating..." : null }</div>
    </div>
  );
}

export default Blog;
