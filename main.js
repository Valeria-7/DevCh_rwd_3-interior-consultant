const burgerMenu = document.querySelector('.burger-icon');
const menu = document.querySelector('.header-menu');
const menuLinks = document.querySelectorAll('.menu-link');
let open = false;

const openMenu = () => {
  menu.classList.add('is-open');
  burgerMenu.classList.add('open');
  open = true;
};

const closeMenu = () => {
  menu.classList.remove('is-open');
  burgerMenu.classList.remove('open');
  open = false;
};

burgerMenu.addEventListener('click', () => {
  if (open) {
    closeMenu();
  } else {
    openMenu();
  }
});

for(let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', closeMenu);
}