import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import mainImg from '@/data/images/couch.png';
import { CarouselCard } from '@/components/products/CarouselCard';

function Home() {
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
    </div>
  );
}

export default Home;
