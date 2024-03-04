export const navbarOnDarkBg = (navbarSelector: string) => {
  const sponsorSection = document.getElementById('sponsor-container');
  const navbar = document.getElementById(navbarSelector);
  if (!navbar) throw Error('navbar not found');
  if (!sponsorSection) return true;
  const navbarScrollY = window.scrollY - navbar.offsetTop - 24;
  if (navbarScrollY < sponsorSection.offsetTop) {
    return true;
  } else if (
    navbarScrollY >= sponsorSection.offsetTop &&
    navbarScrollY < sponsorSection.offsetTop + sponsorSection.offsetHeight + navbar.offsetTop + 24
  ) {
    return false;
  } else {
    return true;
  }
};
