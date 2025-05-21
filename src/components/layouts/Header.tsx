import MainNavigation from '@/components/layouts/MainNavigation';
import { siteConfig } from '@/config/site';
import MobileNavigation from './MobileNavigation';
import { ModeToggle } from '@/components/ModeToggle';
import AuthDropdown from '@/components/layouts/AuthDropdown';
import { User } from '@/data/user';

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
      <div className="container flex justify-between items-center h-16 mx-auto lg:px-0 px-4 ">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="flex w-[80px] items-center justify-between">
          <ModeToggle />
          <AuthDropdown user={User} />
        </div>
      </div>
    </header>
  );
}

export default Header;
