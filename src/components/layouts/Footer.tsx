import { Link } from 'react-router';
import { Icons } from '@/components/Icons';
import { siteConfig } from '@/config/site';
import NewsLetterForm from '../NewLetter';

function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto px-4 pb-8 pt-6 lg:py-6">
        <section className="flex flex-col gap-10 lg:flex-row">
          <section className="flex justify-center lg:justify-start">
            <Link to="/" className="flex items-center space-x-2 w-[180px]">
              <Icons.logo className="size-6" aria-hidden="true" />
              <span className="font-bold text-lg">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>

          <section className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 w-full">
            {siteConfig.footerNav.map((foot) => (
              <div key={foot.title}>
                <h4 className="text-base font-semibold">{foot.title}</h4>
                <ul className="space-y-2 mt-2">
                  {foot.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.title}
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="w-full lg:max-w-sm">
            <h4 className="font-medium text-lg mb-2">Subscribe to our newsletter</h4>
            <NewsLetterForm />
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;