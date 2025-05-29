import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import NewsLetter from '@/components/layouts/NewsLetter';
import { Outlet } from 'react-router';

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-1 mt-15">
        <Outlet />
      </main>
      <NewsLetter/>
      <Footer />
    </div>
  );
}

export default RootLayout;
