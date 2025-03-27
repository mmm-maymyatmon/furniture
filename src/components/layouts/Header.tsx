import MainNavigation from '@/components/layouts/MainNavigation';
import { siteConfig } from '@/config/site';
import MobileNavigation from './MobileNavigation';
import { ModeToggle } from '@/components/mode-toggle';

function Header() {
  return (
    <header className="w-full border-b">
      <div className="container flex justify-between items-center h-16 mx-auto lg:px-0 px-4 ">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
          <div className="flex items-center ">
          <ModeToggle/>
          </div>
        
      </div>
    </header>
  );
}

export default Header;
