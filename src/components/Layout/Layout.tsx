import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className='font-open' data-testid='layout'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
