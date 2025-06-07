import { useSuspenseQuery } from '@tanstack/react-query';
import { motion } from "motion/react"

import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import mainImg from '@/data/images/couch.png';
import CarouselCard from '@/components/products/CarouselCard';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/types';
import BlogCard from '@/components/blogs/BlogCard';
import { postQuery, productQuery } from '@/api/query';

// import { Skeleton } from '@/components/ui/skeleton';

function Home() {


  const { data: productsData } = useSuspenseQuery(productQuery("?limit=8"));
  const { data: postsData } = useSuspenseQuery(postQuery("?limit=3"));


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
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link to={href} className="underline">
          {sideText}
        </Link>
      </div>
    </div>
  );

  return (

    <div className="container mx-auto py-10 lg:px-0 px-4">
      
      <div className="flex flex-col gap-10 lg:flex-row justify-between items-center">
      <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 1.5 }}
    >
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
        </motion.div>
        <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 1.5 }}
    >
        <div className="lg:mt-0 mt-10">
          <img src={mainImg} alt="mainvisual" />
          </div>
          </motion.div>
        </div>
      <div className='sm:mt-30 mt-10'>
      {
        productsData && <CarouselCard products={productsData.products} />
      }
      </div>

      <div className='sm:mt-30 mt-10'>
      <Title title="Recent Blog" href="/blogs" sideText="View All Posts" />
      {
        postsData && <BlogCard posts={postsData.posts} />
      }
      </div>

      <div className='sm:mt-30 mt-10'>
      <Title
        title="Featured Products"
        href="/products"
        sideText="View All Products"
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 my-8">
          {postsData && productsData.products.slice(0, 4).map((product: Product, index: number) => (
          <motion.div
          key={product.id}
          initial={{ opacity: 0, x: index < 2 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: index < 2 ? 0 : 0.3 }}
        >
              <ProductCard product={product} key={product.id} />
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Home;
