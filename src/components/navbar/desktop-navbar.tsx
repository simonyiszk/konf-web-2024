import { NavbarItems } from '@/components/navbar/navbar-items';
import { UniLogos } from '@/components/uni-logos';

export function DesktopNavbar() {
  return (
    <nav className='max-w-screen-2xl w-full mx-auto hidden md:flex p-10 md:p-15 pb-0 justify-between items-center flex-wrap gap-10 flex-col md:flex-row'>
      <UniLogos />
      <div className='flex items-center gap-10'>
        <NavbarItems />
      </div>
    </nav>
  );
}
