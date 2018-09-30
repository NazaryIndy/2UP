// верхнее меню

var navMain = document.querySelector('.burger-menu__site-list');
var navToggle = document.querySelector('.burger-menu__toggle');

  if (navToggle) {
      navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('burger-menu--closed')) {
      navMain.classList.remove('burger-menu--closed');
    } else {
      navMain.classList.add('burger-menu--closed');
    }
  });
}




