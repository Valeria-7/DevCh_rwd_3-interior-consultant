const burgerMenu = document.querySelector('.burger-icon');
const exitMenu = document.querySelector('.exit-icon');
const menu = document.querySelector('.header-menu');
const menuLinks = document.querySelectorAll('.menu-link');

console.log(menuLinks);

const openMenu = () => {
  menu.classList.add('is-open');
  burgerMenu.classList.toggle('hidden');
  exitMenu.classList.toggle('hidden');
};

const closeMenu = () => {
  menu.classList.remove('is-open');
  burgerMenu.classList.toggle('hidden');
  exitMenu.classList.toggle('hidden');
};

burgerMenu.addEventListener('click', openMenu);
exitMenu.addEventListener('click', closeMenu);

for(let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', closeMenu)
}