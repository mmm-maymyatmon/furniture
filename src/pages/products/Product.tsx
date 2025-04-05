import {products, filterList} from '@/data/products'
import ProductCard from '@/components/products/ProductCard';

import PaginationButton from '@/components/Pagination';
import ProductFilter from '../../components/products/ProductFilter';

function Product() {
  return <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row py-10 lg:px-0 px-4'>
    <section className='w-1/5 mb-10'>
        <ProductFilter filterList={filterList} />
    </section>
    <section className='w-4/5'>
      <h1 className="text-2xl font-bold">All Products</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-8">
        {
          products.map((product)=> (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
      <PaginationButton/>
    </section>
  </div>;
  </div>
}

export default Product;
