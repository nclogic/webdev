document.addEventListener('DOMContentLoaded', function() {
  const sideMenu = document.getElementById('menu-box');
  const menuTab = document.querySelector('.menu-title-tab');
  let isMenuOpen = false;

  // Function to toggle the menu
  const toggleMenu = () => {
    if (isMenuOpen) {
      sideMenu.style.height = '0px';
      sideMenu.style.overflow = 'hidden';
      sideMenu.style.zIndex = '-1';

    } else {
      sideMenu.style.height = 'auto';
      sideMenu.style.zIndex = '1';
    }
    isMenuOpen = !isMenuOpen;
  };

  // Mouseenter event for desktop
  menuTab.addEventListener('mouseenter', () => {
    if (!isMenuOpen) {
      toggleMenu();
    }
  });
  sideMenu.addEventListener('mouseenter', () => {
    if (!isMenuOpen) {
      toggleMenu();
    }
  });

  // Mouseleave event for desktop
  sideMenu.addEventListener('mouseleave', () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
});
