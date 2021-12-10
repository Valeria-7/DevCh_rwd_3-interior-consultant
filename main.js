const burgerMenu = document.querySelector('.burger-icon');
const exitMenu = document.querySelector('.exit-icon');
const menu = document.querySelector('.header-menu');
const menuLink = document.querySelectorAll('.menu-link');

burgerMenu.addEventListener('click', () => {
  menu.classList.add('is-open');
  burgerMenu.classList.toggle('hidden');
  exitMenu.classList.toggle('hidden');
});

exitMenu.addEventListener('click', () => {
  menu.classList.remove('is-open');
  burgerMenu.classList.toggle('hidden');
  exitMenu.classList.toggle('hidden');
});
/*
menuLink.forEach.addEventListener('click', () => {
  menu.classList.remove('is-open');
  burgerMenu.classList.toggle('hidden');
  exitMenu.classList.toggle('hidden');
})*/



console.log(menu);