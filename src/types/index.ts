export interface NavItem {
  title: string;
  href?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  card?: NavItemWithChildren[];
  menu?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithChildren;

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: number;
  price: number;
  discount: number;
  rating: number;
  inventory: number;
  status: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  body: string;
  image: string;
  author: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  status: string;
  tags: string[];
};
