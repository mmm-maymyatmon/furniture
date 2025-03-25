import Header from '@/components/Header';
import { Outlet } from 'react-router';

function RootLayout() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
