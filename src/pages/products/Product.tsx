import ProductCard from '@/components/products/ProductCard';
import ProductFilter from '../../components/products/ProductFilter';
import { useInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { categoryTypeQuery, productInfiniteQuery } from '@/api/query';
import { Button } from '@/components/ui/button';

function Product() {
  const { data: categoryType } = useSuspenseQuery(categoryTypeQuery());
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
  } = useInfiniteQuery(productInfiniteQuery());

  const allProducts = data?.pages.flatMap((page) => page.products) ?? []; 

  return status === 'pending' ? (
    <p>Loading....</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row py-10 lg:px-0 px-4">
        <section className="w-1/5 mb-10">
          <ProductFilter filterList={categoryType} />
        </section>
        <section className="w-4/5">
          <h1 className="text-2xl font-bold">All Products</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-8">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
              </div>
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
          {/* <PaginationButton /> */}
        </section>
      </div>
      ;
    </div>
  );
}

export default Product;
