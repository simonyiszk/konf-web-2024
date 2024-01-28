import { NavbarItems } from '@/components/navbar/navbar-items';

export function DesktopNavbar() {
  return (
    <nav className='max-w-screen-2xl w-full mx-auto hidden md:flex p-10 md:p-15 pb-0 justify-end items-center flex-wrap gap-10 flex-col md:flex-row'>
      <div className='flex items-center gap-10'>
        <NavbarItems />
      </div>
    </nav>
  );
}
