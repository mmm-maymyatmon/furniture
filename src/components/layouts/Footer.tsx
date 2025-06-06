import { Link } from 'react-router';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';


function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto px-4 pb-8 pt-6 lg:py-6">
        <section className="flex flex-col gap-10 lg:flex-row">
          <section>
            <Link to="/" className="flex items-center space-x-2 w-[180px] mb-5">
            <Icons.logo className="size-10 bg-emeraldGreen text-white p-2 rounded-md" aria-hidden="true" />
              <span className="font-bold text-lg">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
            <p className="mb-6">
                We provide high-quality, luxury furniture crafted with premium materials and exceptional attention to
                detail for discerning homeowners and designers.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-oklch(0.95 0.03 66.29) text-[#376e6b] p-2 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-oklch(0.95 0.03 66.29) text-[#376e6b] p-2 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-oklch(0.95 0.03 66.29) text-[#376e6b] p-2 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-oklch(0.95 0.03 66.29) text-[#376e6b] p-2 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
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
          
        </section>
        <div className="border-t border-gray-200 pt-8 mt-10">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-600 text-sm">© 2025 HomeNet. All rights reserved.</p>
    <div className="flex gap-6 mt-4 md:mt-0">
      <link href="#" className="text-gray-600 hover:text-[#376e6b] transition-colors text-sm" />
      Terms of Service
      <link href="#" className="text-gray-600 hover:text-[#376e6b] transition-colors text-sm" />
      Privacy Policy
      <link href="#" className="text-gray-600 hover:text-[#376e6b] transition-colors text-sm" />
      Cookie Policy
    </div>
  </div>
</div>

      </div>
    </footer>
    
  );
}

export default Footer;
