// верхнее меню

var navMain = document.querySelector('.burger-menu__site-list');
var navToggle = document.querySelector('.burger-menu__toggle');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('burger-menu--closed')) {
      navMain.classList.remove('burger-menu--closed');
      // navMain.classList.add('site-list-opened');
    } else {
      navMain.classList.add('burger-menu--closed');
      // navMain.classList.remove('site-list-opened');
    }
  });




