const burgerMenu = document.querySelector('.burger-icon');
const menu = document.querySelector('.header-menu');
const menuLinks = document.querySelectorAll('.menu-link');
let open = false;

const openMenu = () => {
  menu.classList.add('is-open');
  burgerMenu.classList.add('open');
};

const closeMenu = () => {
  menu.classList.remove('is-open');
  burgerMenu.classList.remove('open');
};

burgerMenu.addEventListener('click', () => {
  if (open) {
    closeMenu();
    open = false
  } else {
    openMenu();
    open = true;
  }
});

for(let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', closeMenu)
}