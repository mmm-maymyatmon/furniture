import MainNavigation from '@/components/layouts/MainNavigation';
import { siteConfig } from '@/config/site';
import MobileNavigation from './MobileNavigation';
import { ModeToggle } from '@/components/ModeToggle';
import AuthDropdown from '@/components/layouts/AuthDropdown';
import { User } from '@/data/user';
import ProgressBar from '@/components/ProgressBar';
import CartSheet from './CartSheet';

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
      <div className="container flex justify-between items-center h-16 mx-auto lg:px-0 px-4 ">
        <ProgressBar/>
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="flex items-center justify-between">
          <div className='mr-2'>
          <CartSheet/>
          </div>
          <div className='mr-2'>
          <ModeToggle />
          </div>
          <AuthDropdown user={User} />
        </div>
      </div>
    </header>
  );
}

export default Header;
