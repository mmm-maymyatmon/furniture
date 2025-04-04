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
    content:
      'Minimalist interior design is all about creating a clean and clutter-free space that emphasizes functionality.',
    body: 'Minimalism is not just a design style; it’s a way of living. It focuses on simplicity, reducing distractions, and making spaces more open and comfortable. A minimalist interior often features neutral colors, functional furniture, and an emphasis on natural light. In this guide, we’ll explore how to achieve a minimalist home that feels both stylish and practical.',
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
    content:
      'Choosing the right sofa can be challenging. Here are some tips to help you find the perfect one.',
    body: 'A sofa is often the centerpiece of a living room. When selecting one, you should consider factors such as size, comfort, fabric type, and durability. Whether you prefer a classic leather couch or a modern sectional, this guide will help you make an informed decision.',
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
    content:
      "Wooden furniture remains a timeless choice. Let's explore the top five trends in 2024.",
    body: 'Wooden furniture never goes out of style, but trends change. In 2024, we see a shift towards sustainable wood, reclaimed furniture, and innovative wood finishes. Whether you’re a fan of rustic oak or sleek walnut, these trends will inspire your next home upgrade.',
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
    title: 'The Benefits of Ergonomic Office Chairs',
    content:
      'An ergonomic office chair can significantly improve your posture and productivity.',
    body: 'Sitting for long hours can take a toll on your back and neck. That’s why investing in an ergonomic office chair is essential. Features such as lumbar support, adjustable height, and breathable fabric can make a big difference in comfort and health.',
    image: p04,
    author: 'Michael Brown',
    categoryId: 4,
    createdAt: '2024-09-25T15:45:00Z',
    updatedAt: '2024-09-25T15:45:00Z',
    status: 'published',
    tags: ['Office Chairs', 'Workplace', 'Health & Comfort'],
  },
  {
    id: uuidv4(),
    title: 'Rustic vs. Modern: Which Interior Style is Right for You?',
    content:
      'Choosing between rustic and modern interior styles depends on your personal taste and lifestyle.',
    body: 'Do you prefer the warmth of natural wood and vintage elements, or the sleek lines of contemporary furniture? This article breaks down the key differences between rustic and modern styles to help you decide which one suits your home best.',
    image: p05,
    author: 'Sarah Wilson',
    categoryId: 5,
    createdAt: '2024-09-24T18:00:00Z',
    updatedAt: '2024-09-24T18:00:00Z',
    status: 'draft',
    tags: ['Interior Design', 'Rustic', 'Modern Decor'],
  },
  {
    id: uuidv4(),
    title: 'The Rise of Smart Home Devices in 2024',
    content:
      'Smart home technology is becoming an integral part of modern living. Let’s explore how to integrate these devices into your home.',
    body: 'With advancements in technology, smart home devices have become more accessible. Whether it’s controlling your lights, thermostat, or security system, integrating these devices into your home can make it more comfortable and efficient.',
    image: p06,
    author: 'David Lee',
    categoryId: 6,
    createdAt: '2024-09-23T09:00:00Z',
    updatedAt: '2024-09-23T09:00:00Z',
    status: 'published',
    tags: ['Smart Home', 'Technology', 'Automation'],
  },
  {
    id: uuidv4(),
    title: 'The Best Color Palettes for Your Bedroom in 2024',
    content:
      'Selecting the right color palette for your bedroom can create a soothing and peaceful environment.',
    body: 'When designing your bedroom, color plays a crucial role in setting the mood. Soft neutrals, calming blues, and rich earth tones are just a few of the most popular choices for 2024. Let’s explore the best color combinations to create your perfect retreat.',
    image: p07,
    author: 'Lisa Green',
    categoryId: 7,
    createdAt: '2024-09-22T14:30:00Z',
    updatedAt: '2024-09-22T14:30:00Z',
    status: 'published',
    tags: ['Bedroom Design', 'Color Palettes', 'Interior Design'],
  },
  {
    id: uuidv4(),
    title: 'Sustainable Gardening: Tips for an Eco-Friendly Garden',
    content:
      'Learn how to create an environmentally friendly garden with these sustainable gardening practices.',
    body: 'Sustainability is key in gardening in 2024. Using eco-friendly practices like composting, reducing water usage, and choosing native plants can help you create a beautiful garden while protecting the environment.',
    image: p08,
    author: 'Rachel Adams',
    categoryId: 8,
    createdAt: '2024-09-21T16:00:00Z',
    updatedAt: '2024-09-21T16:00:00Z',
    status: 'published',
    tags: ['Gardening', 'Sustainability', 'Eco-Friendly'],
  },
  {
    id: uuidv4(),
    title: 'Creating a Cozy Home Office Space',
    content:
      'Transform your workspace into a cozy, productive environment with these home office design ideas.',
    body: 'A cozy home office can boost productivity and make your workday more enjoyable. From ergonomic furniture to lighting and decoration, we’ll share tips on creating an inviting workspace that enhances your work experience.',
    image: p09,
    author: 'James Turner',
    categoryId: 9,
    createdAt: '2024-09-20T12:15:00Z',
    updatedAt: '2024-09-20T12:15:00Z',
    status: 'published',
    tags: ['Home Office', 'Workspace Design', 'Productivity'],
  },
  {
    id: uuidv4(),
    title: 'The Evolution of Modern Kitchen Designs',
    content:
      'Modern kitchen designs have come a long way. Explore how new trends are shaping the kitchens of the future.',
    body: 'Modern kitchens are more than just functional spaces. With sleek designs, smart appliances, and open layouts, today’s kitchens are designed for both efficiency and style. Let’s take a closer look at some of the most exciting trends in kitchen design.',
    image: p10,
    author: 'Olivia Harris',
    categoryId: 10,
    createdAt: '2024-09-19T10:00:00Z',
    updatedAt: '2024-09-19T10:00:00Z',
    status: 'published',
    tags: ['Kitchen Design', 'Modern Design', 'Home Improvement'],
  },
  {
    id: uuidv4(),
    title: 'How to Incorporate Art into Your Home Decor',
    content:
      'Art can elevate any space. Here are some tips on how to incorporate art pieces into your home.',
    body: 'Art adds personality and character to your home decor. Whether it’s a large canvas in the living room or smaller framed pieces in the hallway, art can transform your space. Learn how to choose and place art to complement your interior design style.',
    image: p11,
    author: 'Sophia White',
    categoryId: 11,
    createdAt: '2024-09-18T14:30:00Z',
    updatedAt: '2024-09-18T14:30:00Z',
    status: 'published',
    tags: ['Art', 'Home Decor', 'Interior Design'],
  },
];
