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

export type Image = {
  id: number;
  path: string;
}

export type Product = {
  id: number;
  name: string;
  description: string;
  images: Image[];
  categoryId: number;
  price: number;
  discount: number;
  rating: number;
  inventory: number;
  status: string;
};

export type Tag = {
  name: string;
}

export type Post = {
  id: number;
  author: {
    fullName: string;
  }
  title: string;
  content: string;
  image: string;
  body: string;
  updatedAt: string;
  tags: Tag[];
};

export type Category = {
  id: number;
  name: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  imageUrl: string;
};

export type Cart = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  // image: {
  //   id: string;
  //   name: string;
  //   url: string;
  // },
  category: string;
  subcategory: string;
}