import { Link } from 'react-router';
import type { MainNavItem } from '@/types';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEffect, useState } from 'react';
import { Icons } from '../icons';

interface MainNavigationProps {
  items?: MainNavItem[];
}

function MobileNavigation({ items }: MainNavigationProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const query = '(min-width: 1024px)';

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setIsDesktop(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener('change', onChange);
    setIsDesktop(result.matches);
    return () => result.removeEventListener('change', onChange);
  }, [query]);

  if (isDesktop) {
    return null;
  }
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8 text-xl">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-6 py-8 shadow-lg">
          <SheetClose asChild>
            <Link to="/" className="flex items-center space-x-3">
              <Icons.logo className="size-10 bg-emeraldGreen text-white p-2 rounded-md" aria-hidden="true" />
              <span className="text-lg font-semibold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>
          <ScrollArea className="h-[calc(100vh-8rem)] pb-6">
            <Accordion type="multiple" className="w-full">
              {items?.map((navItem, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b"
                >
                  <AccordionTrigger className="text-base font-medium hover:text-primary">
                    {navItem.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3 pl-4">
                      {navItem.card?.map((item) => (
                        <SheetClose asChild key={item.title}>
                          <Link
                            to={String(item.href)}
                            className="text-sm hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="flex flex-col space-y-3">
              {items?.map((navItem) =>
                navItem.menu?.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      to={String(item.href)}
                      className="text-base font-medium hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))
              )}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavigation;
