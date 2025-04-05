import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import mainImg from '@/data/images/couch.png';
import { CarouselCard } from '@/components/products/CarouselCard';
import { Posts } from '@/data/posts';
import { products } from '@/data/products';
import BlogCard from '../components/blogs/BlogCard';
import ProductCard from '@/components/products/ProductCard';

const samplePosts = Posts.slice(0, 3);
const sampleProducts = products.slice(0, 4);
function Home() {
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
      <CarouselCard />
      <Title title="Recent Blog" href="/blogs" sideText="View All Posts" />
      <BlogCard posts={samplePosts} />
      <Title
        title="Featured Products"
        href="/products"
        sideText="View All Products"
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 my-8">
        {sampleProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
