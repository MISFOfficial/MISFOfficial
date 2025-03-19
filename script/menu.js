function toggleMenu() {
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const hideNavigation = document.getElementById('hideNavigation');
  
    // Toggle visibility of menu and close icons
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  
    // Toggle visibility of the navigation menu
    hideNavigation.classList.toggle('hidden');
  }