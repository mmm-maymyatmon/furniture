import { v4 as uuidv4 } from 'uuid';
import p01 from '@/data/images/p01.jpg';
import p02 from '@/data/images/p02.jpg';
import p03 from '@/data/images/p03.jpg';
import p04 from '@/data/images/p04.jpg';
import p05 from '@/data/images/p05.jpg';
import p06 from '@/data/images/p06.jpg';
import p07 from '@/data/images/p07.jpg';
import p08 from '@/data/images/p08.jpg';
import p09 from '@/data/images/p09.jpg';
import p10 from '@/data/images/p10.jpg';
import p11 from '@/data/images/p11.jpg';

export const Posts = [
  {
    id: uuidv4(),
    title: 'The Art of Minimalist Interior Design',
    content: 'Minimalist interior design is all about creating a clean and clutter-free space that emphasizes functionality.',
    body: `<p>Minimalism is not just a design style; it’s a way of living.</p>
           <p>It focuses on simplicity, reducing distractions, and making spaces more open and comfortable.</p>
           <p>A minimalist interior often features neutral colors, functional furniture, and an emphasis on natural light.</p>
           <p>In this guide, we’ll explore how to achieve a minimalist home that feels both stylish and practical.</p>`,
    image: p01,
    author: 'John Doe',
    categoryId: 1,
    createdAt: '2024-09-28T08:00:00Z',
    updatedAt: '2024-09-28T08:00:00Z',
    status: 'published',
    tags: ['Minimalism', 'Interior Design', 'Home Decor'],
  },
  {
    id: uuidv4(),
    title: 'How to Choose the Perfect Sofa for Your Living Room',
    content: 'Choosing the right sofa can be challenging. Here are some tips to help you find the perfect one.',
    body: `<p>A sofa is often the centerpiece of a living room.</p>
           <p>When selecting one, you should consider factors such as size, comfort, fabric type, and durability.</p>
           <p>Whether you prefer a classic leather couch or a modern sectional, this guide will help you make an informed decision.</p>`,
    image: p02,
    author: 'Jane Smith',
    categoryId: 2,
    createdAt: '2024-09-27T10:30:00Z',
    updatedAt: '2024-09-27T10:30:00Z',
    status: 'published',
    tags: ['Furniture', 'Living Room', 'Home Improvement'],
  },
  {
    id: uuidv4(),
    title: 'Top 5 Wooden Furniture Trends in 2024',
    content: "Wooden furniture remains a timeless choice. Let's explore the top five trends in 2024.",
    body: `<p>Wooden furniture never goes out of style, but trends change.</p>
           <p>In 2024, we see a shift towards sustainable wood, reclaimed furniture, and innovative wood finishes.</p>
           <p>Whether you’re a fan of rustic oak or sleek walnut, these trends will inspire your next home upgrade.</p>`,
    image: p03,
    author: 'Emily Johnson',
    categoryId: 3,
    createdAt: '2024-09-26T12:15:00Z',
    updatedAt: '2024-09-26T12:15:00Z',
    status: 'published',
    tags: ['Wood Furniture', 'Trends', 'Sustainability'],
  },
  {
    id: uuidv4(),
    title: 'How to Decorate Your Living Room for Fall',
    content: 'Decorating your living room for fall is a fun and festive way to add some warmth to your space.',
    body: `<p>With the leaves changing colors and the weather getting colder, it's time to decorate your living room for fall.</p>
           <p>Here are some tips for creating a cozy and inviting atmosphere:</p>
           <ul>
             <li>Use warm colors like orange, yellow, and brown.</li>
             <li>Include fall-themed accessories like pumpkins, leaves, and candles.</li>
             <li>Add a cozy rug or carpet for extra warmth.</li>
           </ul>
           <p>By following these tips, you can create a fall-inspired living room that's both stylish and cozy.</p>`,
    image: p04,
    author: 'Michael Brown',
    categoryId: 4,
    createdAt: '2024-09-25T14:45:00Z',
    updatedAt: '2024-09-25T14:45:00Z',
    status: 'published',
    tags: ['Fall Decor', 'Living Room', 'Interior Design'],  
  },
  {
    id: uuidv4(),
    title: 'The Benefits of Indoor Plants',
    content: 'Indoor plants can bring a sense of tranquility and nature to your living space.', 
    body: `<p>Plants provide a sense of tranquility and nature in your home.</p>
           <p>They can help reduce stress, improve air quality, and provide a sense of relaxation.</p>
           <p>Here are some benefits of indoor plants:</p>
           <ul>
             <li>They can add greenery and nature to your space.</li>
             <li>They can help reduce stress and improve mental health.</li>
             <li>They can provide a sense of tranquility and relaxation.</li>
           </ul>
           <p>By adding indoor plants to your home, you can create a tranquil and nature-inspired space.</p>`,
    image: p05,
    author: 'Olivia Davis',
    categoryId: 5,
    createdAt: '2024-09-24T16:20:00Z',
    updatedAt: '2024-09-24T16:20:00Z',
    status: 'published',
    tags: ['Indoor Plants', 'Nature', 'Home Decor'],
  },
  {
    id: uuidv4(),
    title: 'The Benefits of Indoor Plants',
    content: 'Indoor plants can bring a sense of tranquility and nature to your living space.', 
    body: `<p>Plants provide a sense of tranquility and nature in your home.</p>
           <p>They can help reduce stress, improve air quality, and provide a sense of relaxation.</p>
           <p>Here are some benefits of indoor plants:</p>
           <ul>
             <li>They can add greenery and nature to your space.</li>
             <li>They can help reduce stress and improve mental health.</li>
             <li>They can provide a sense of tranquility and relaxation.</li>
           </ul>
           <p>By adding indoor plants to your home, you can create a tranquil and nature-inspired space.</p>`,
    image: p06,
    author: 'Olivia Davis',
    categoryId: 6,
    createdAt: '2024-09-24T16:20:00Z',
    updatedAt: '2024-09-24T16:20:00Z',
    status: 'published',
    tags: ['Indoor Plants', 'Nature', 'Home Decor'],
  },
  {
    id: uuidv4(),
    title: 'The Benefits of Indoor Plants',
    content: 'Indoor plants can bring a sense of tranquility and nature to your living space.', 
    body: `<p>Plants provide a sense of tranquility and nature in your home.</p>
           <p>They can help reduce stress, improve air quality, and provide a sense of relaxation.</p>
           <p>Here are some benefits of indoor plants:</p>
           <ul>
             <li>They can add greenery and nature to your space.</li>
             <li>They can help reduce stress and improve mental health.</li>
             <li>They can provide a sense of tranquility and relaxation.</li>
           </ul>
           <p>By adding indoor plants to your home, you can create a tranquil and nature-inspired space.</p>`,
    image: p07,
    author: 'Olivia Davis',
    categoryId: 7,
    createdAt: '2024-09-24T16:20:00Z',
    updatedAt: '2024-09-24T16:20:00Z',
    status: 'published',
    tags: ['Indoor Plants', 'Nature', 'Home Decor'],
  },
  {
    id: uuidv4(),
    title: 'The Benefits of Indoor Plants',
    content: 'Indoor plants can bring a sense of tranquility and nature to your living space.', 
    body: `<p>Plants provide a sense of tranquility and nature in your home.</p>
           <p>They can help reduce stress, improve air quality, and provide a sense of relaxation.</p>
           <p>Here are some benefits of indoor plants:</p>
           <ul>
             <li>They can add greenery and nature to your space.</li>
             <li>They can help reduce stress and improve mental health.</li>
             <li>They can provide a sense of tranquility and relaxation.</li>
           </ul>
           <p>By adding indoor plants to your home, you can create a tranquil and nature-inspired space.</p>`,
    image: p08,
    author: 'Olivia Davis',
    categoryId: 8,
    createdAt: '2024-09-24T16:20:00Z',
    updatedAt: '2024-09-24T16:20:00Z',
    status: 'published',
  },
  {
    id: uuidv4(),
    title: 'The Benefits of Indoor Plants',
    content: 'Indoor plants can bring a sense of tranquility and nature to your living space.', 
    body: `<p>Plants provide a sense of tranquility and nature in your home.</p>
           <p>They can help reduce stress, improve air quality, and provide a sense of relaxation.</p>
           <p>Here are some benefits of indoor plants:</p>
           <ul>
             <li>They can add greenery and nature to your space.</li>
             <li>They can help reduce stress and improve mental health.</li>
             <li>They can provide a sense of tranquility and relaxation.</li>
           </ul>
           <p>By adding indoor plants to your home, you can create a tranquil and nature-inspired space.</p>`,
    image: p09,
    author: 'Olivia Davis',
    categoryId: 9,
    createdAt: '2024-09-24T16:20:00Z',
    updatedAt: '2024-09-24T16:20:00Z',
    status: 'published',
  },
  {
    id: uuidv4(),
    title: 'The Benefits of Indoor Plants',
    content: 'Indoor plants can bring a sense of tranquility and nature to your living space.', 
    body: `<p>Plants provide a sense of tranquility and nature in your home.</p>
           <p>They can help reduce stress, improve air quality, and provide a sense of relaxation.</p>
           <p>Here are some benefits of indoor plants:</p>
           <ul>
             <li>They can add greenery and nature to your space.</li>
             <li>They can help reduce stress and improve mental health.</li>
             <li>They can provide a sense of tranquility and relaxation.</li>
           </ul>
           <p>By adding indoor plants to your home, you can create a tranquil and nature-inspired space.</p>`,
    image: p10,
    author: 'Olivia Davis',
    categoryId: 10,
    createdAt: '2024-09-24T16:20:00Z',
    updatedAt: '2024-09-24T16:20:00Z',
    status: 'published',
  },
  {
    id: uuidv4(),
    title: 'The Benefits of Indoor Plants',
    content: 'Indoor plants can bring a sense of tranquility and nature to your living space.', 
    body: `<p>Plants provide a sense of tranquility and nature in your home.</p>
           <p>They can help reduce stress, improve air quality, and provide a sense of relaxation.</p>
           <p>Here are some benefits of indoor plants:</p>
           <ul>
             <li>They can add greenery and nature to your space.</li>
             <li>They can help reduce stress and improve mental health.</li>
             <li>They can provide a sense of tranquility and relaxation.</li>
           </ul>
           <p>By adding indoor plants to your home, you can create a tranquil and nature-inspired space.</p>`,
    image: p11,
    author: 'Olivia Davis',
    categoryId: 11,
    createdAt: '2024-09-24T16:20:00Z',
    updatedAt: '2024-09-24T16:20:00Z',
    status: 'published',
  }
];
