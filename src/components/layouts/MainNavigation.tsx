import React from 'react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import type { MainNavItem } from '@/types';
import { Icons } from '@/components/Icons'

import { siteConfig } from '@/config/site';

interface MainNavigationProps {
  items?: MainNavItem[];
}
export default function MainNavigation({ items }: MainNavigationProps) {
  return (
    <div className="hidden lg:flex gap-6">
      <Link to="/" className="items-center space-x-2 flex">
        <Icons.logo className="size-7" aria-hidden="true" />
        <span className="font-bold">{siteConfig.name}</span>
        <span className="sr-only">Home</span>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {items?.[0]?.card && (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        to="/"
                      >
                        <Icons.logo className="size-6" aria-hidden="true" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {siteConfig.name}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {siteConfig.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {items[0].card.map((item) => (
                    <ListItem
                      key={item.title}
                      href={item.href}
                      title={item.title}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}

          {items?.[0]?.menu &&
            items[0].menu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link to={String(item.href)}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={String(href)}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
