document.addEventListener('DOMContentLoaded', function() {
  const megamenu = document.querySelector('.megamenu');
  const barsIcon = document.querySelector('.m-menu__toggle');
  
  barsIcon.addEventListener('click', function() {
    megamenu.classList.toggle('active');
    const megamenuList = document.querySelector('.megamenu-list');
    const mMenuList = document.querySelector('.m-menu-list');
    mMenuList.appendChild(megamenuList);
  });
});

