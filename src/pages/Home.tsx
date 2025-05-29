import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Link, useLoaderData } from 'react-router';
import mainImg from '@/data/images/couch.png';
import CarouselCard from '@/components/products/CarouselCard';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/types';
import BlogCard from '@/components/blogs/BlogCard';
import { postQuery, productQuery } from '@/api/query';
import { Skeleton } from '@/components/ui/skeleton';

function Home() {
  // const { productsData, postsData } = useLoaderData();

  const {
    data: productsData,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
    error: errorProduct,
    refetch: refetchProduct,
  } = useQuery(productQuery('?limit=8'));

  const {
    data: postsData,
    isLoading: isLoadingPost,
    isError: isErrorPost,
    error: errorPost,
    refetch: refetchPost,
  } = useQuery(postQuery('?limit=3'));

  if (isLoadingProduct && isLoadingPost) {
    return <div className="flex flex-col space-y-3">
    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
  }
  if (isErrorProduct && isErrorPost) {
    return <p>{errorProduct.message} & { errorPost.message }</p>
  }




  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string;
    href: string;
    sideText: string;
  }) => (
    <div>
      <div className="container flex justify-between mt-10 lg:mt-30">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link to={href} className="underline">
          {sideText}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-10 lg:px-0 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl mb-5 font-bold text-emeraldGreen lg:text-5xl lg:text-left text-center">
            Modern Interior <br /> Design Studio
          </h1>
          <p className="mb-5">
            Furniture is an essential component of any living space, providing
            functionality, comfort and aesthetic appeal.
          </p>

          <div className="flex lg:justify-normal justify-center">
            <Button asChild className="mr-4 bg-emeraldGreen rounded-full">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild className="bg-orange-300 rounded-full">
              <Link to="/about">Explore</Link>
            </Button>
          </div>
        </div>
        <div className="lg:mt-0 mt-10">
          <img src={mainImg} alt="mainvisual" />
        </div>
      </div>
      {
        productsData && <CarouselCard products={productsData.products} />
      }

      <Title title="Recent Blog" href="/blogs" sideText="View All Posts" />
      {
        postsData && <BlogCard posts={postsData.posts} />
      }

      <Title
        title="Featured Products"
        href="/products"
        sideText="View All Products"
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 my-8">
        { postsData && productsData.products.slice(0, 4).map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
