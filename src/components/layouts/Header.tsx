import MainNavigation from '@/components/layouts/MainNavigation';
import { siteConfig } from '@/config/site';
import MobileNavigation from './MobileNavigation';

function Header() {
  return (
    <header className="w-full border-b">
      <div className="container flex items-center h-16 mx-auto ">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
      </div>
    </header>
  );
}

export default Header;
