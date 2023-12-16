import { DesktopNavbar } from '@/components/navbar/desktop-navbar';
import { NavbarMobile } from '@/components/navbar/navbar-mobile';

export function Navbar() {
  return (
    <>
      <NavbarMobile />
      <DesktopNavbar />
    </>
  );
}
