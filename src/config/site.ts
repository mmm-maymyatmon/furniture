const links = {
  x: 'http://twitter.com/sample',
  github: 'https://github.com/sample/furniture',
  githubAccount: 'https://github.com/sample',
  discord: 'https://discord.com/users/sample',
};

export const siteConfig = {
  name: 'Furniture Shop',
  description: 'A Furniture Shop built with React Router.',
  links,
  mainNav: [
    {
      title: 'Products',
      card: [
        {
          title: 'Wooden',
          href: '/products/wooden',
          description: 'Comfortable with Wooden furniture.',
        },
        {
          title: 'Modern',
          href: '/products/modern',
          description: 'Sleek and stylish modern designs.',
        },
        {
          title: 'Classic',
          href: '/products/classic',
          description: 'Elegant and timeless classic furniture.',
        },
        {
          title: 'Luxury',
          href: '/products/luxury',
          description: 'Premium furniture for a luxurious lifestyle.',
        },
        {
          title: 'Office',
          href: '/products/office',
          description: 'Professional office furniture for productivity.',
        },
      ],
      menu: [
        {
          title: 'Services',
          href: 'services',
        },
        {
          title: 'Blog',
          href: 'blogs',
        },
        {
          title: 'About US',
          href: 'about',
        },
      ],
    },
  ],
  footerNav: [
    {
      title: 'Furniture Shop',
      items: [
        { title: 'Seating', href: '/types/seating', external: true },
        { title: 'Lying', href: '/types/lying', external: true },
        {
          title: 'Entertainment',
          href: '/types/entertainment',
          external: true,
        },
        { title: 'Tables', href: '/types/tables', external: true },
        { title: 'Storage', href: '/types/storage', external: true },
      ],
    },
    {
      title: 'Help',
      items: [
        { title: 'About', href: '/about', external: false },
        { title: 'Contact', href: '/contact', external: false },
        { title: 'Terms', href: '/terms', external: false },
        { title: 'Privacy', href: '/privacy', external: false },
      ],
    },
    {
      title: 'Social',
      items: [
        { title: 'X', href: 'https://x.com/', external: true },
        { title: 'GitHub', href: 'https://github.com/', external: true },
        { title: 'Discord', href: 'https://discord.com/', external: true },
      ],
    },
    {
      title: 'Partner',
      items: [
        { title: 'Shoppy', href: '/partners/shoppy', external: false },
        { title: 'Poppy', href: '/partners/poppy', external: false },
        { title: 'Talkie', href: '/partners/talkie', external: false },
        { title: 'Coffee', href: '/partners/coffee', external: false },
      ],
    },
  ],
};
