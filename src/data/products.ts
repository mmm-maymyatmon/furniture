import p01 from '@/data/images/products/product01.jpg';
import p02 from '@/data/images/products/product02.jpg';
import p03 from '@/data/images/products/product03.jpg';
import p04 from '@/data/images/products/product04.jpg';
import p05 from '@/data/images/products/product05.jpg';
import p06 from '@/data/images/products/product06.jpg';
import p07 from '@/data/images/products/product07.jpg';
import p08 from '@/data/images/products/product08.jpg';
import p09 from '@/data/images/products/product09.jpg';
import p10 from '@/data/images/products/product10.jpg';
import p11 from '@/data/images/products/product11.jpg';

export const filterList = {
  types: [
    {id: 1, label: 'seating'},
    {id: 2, label: 'lying'},
    {id: 3, label: 'entertainment'},
    {id: 4, label: 'tables'},
    {id: 5, label: 'storage'}
  ],
  categories: [
    {id: 1, label: 'Wooden'},
    {id: 2, label: 'Bamboo'},
    {id: 3, label: 'Metal'}
  ]
}

export const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    description: 'A stylish and comfortable modern sofa for your living room.',
    image: p01,
    categoryId: 1,
    price: 499.99,
    discount: 10,
    rating: 4.5,
    inventory: 20,
    status: 'available',
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    description: 'A classic wooden dining table that seats six people.',
    image: p02,
    categoryId: 2,
    price: 349.99,
    discount: 15,
    rating: 4.7,
    inventory: 15,
    status: 'available',
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    description: 'An ergonomic office chair with lumbar support.',
    image: p03,
    categoryId: 3,
    price: 199.99,
    discount: 5,
    rating: 4.3,
    inventory: 30,
    status: 'sold',
  },
  {
    id: 4,
    name: 'Luxury King Bed',
    description: 'A spacious and comfortable king-sized bed.',
    image: p04,
    categoryId: 4,
    price: 899.99,
    discount: 20,
    rating: 4.8,
    inventory: 10,
    status: 'available',
  },
  {
    id: 5,
    name: 'Minimalist Bookshelf',
    description: 'A sleek and modern bookshelf for your study.',
    image: p05,
    categoryId: 5,
    price: 129.99,
    discount: 10,
    rating: 4.4,
    inventory: 25,
    status: 'sold',
  },
  {
    id: 6,
    name: 'LED Nightstand Lamp',
    description: 'A stylish LED lamp for your nightstand.',
    image: p06,
    categoryId: 6,
    price: 49.99,
    discount: 0,
    rating: 4.6,
    inventory: 50,
    status: 'available',
  },
  {
    id: 7,
    name: 'Cozy Recliner Chair',
    description: 'A soft and cozy recliner chair for relaxation.',
    image: p07,
    categoryId: 3,
    price: 299.99,
    discount: 12,
    rating: 4.7,
    inventory: 18,
    status: 'available',
  },
  {
    id: 8,
    name: 'Rustic Coffee Table',
    description: 'A rustic wooden coffee table with storage space.',
    image: p08,
    categoryId: 2,
    price: 179.99,
    discount: 8,
    rating: 4.5,
    inventory: 22,
    status: 'available',
  },
  {
    id: 9,
    name: 'Velvet Accent Chair',
    description: 'A luxurious velvet accent chair for your home decor.',
    image: p09,
    categoryId: 3,
    price: 249.99,
    discount: 10,
    rating: 4.6,
    inventory: 12,
    status: 'available',
  },
  {
    id: 10,
    name: 'Classic Wooden Wardrobe',
    description: 'A spacious and elegant wooden wardrobe.',
    image: p10,
    categoryId: 5,
    price: 599.99,
    discount: 15,
    rating: 4.8,
    inventory: 8,
    status: 'available',
  },
  {
    id: 11,
    name: 'Modern TV Stand',
    description: 'A stylish TV stand with ample storage.',
    image: p11,
    categoryId: 2,
    price: 269.99,
    discount: 10,
    rating: 4.7,
    inventory: 20,
    status: 'available',
  },
];
