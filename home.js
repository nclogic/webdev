document.addEventListener('DOMContentLoaded', function() {
  const sideMenu = document.getElementById('side-menu');
  
  // Function to show the menu
  const showMenu = () => {
    sideMenu.style.left = '0';
  };

  // Function to hide the menu
  const hideMenu = () => {
    sideMenu.style.left = '-250px';
  };

  // Mouseover event for desktop
  sideMenu.addEventListener('mouseover', showMenu);

  // Mouseout event for desktop
  sideMenu.addEventListener('mouseout', hideMenu);

  // Click event for touch devices
  sideMenu.addEventListener('click', () => {
    if (sideMenu.style.left === '0px') {
      hideMenu();
    } else {
      showMenu();
    }
  });
});
