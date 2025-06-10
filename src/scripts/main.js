import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// header scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () =>
  window.scrollY > header.offsetHeight
    ? header.classList.add('scrolled')
    : header.classList.remove('scrolled')
);

//slider
const swiper = new Swiper('.feedback .swiper', {
  modules: [Navigation],
  slidesPerView: 2,
  navigation: {
    nextEl: '.feedback .swiper-button--next',
    prevEl: '.feedback .swiper-button--prev',
  },
});

// tabs
const showTabs = (tabsNav, tabsContent) => {
  tabsNav?.forEach((navLink, i) => {
    navLink?.addEventListener('click', () => {
      tabsNav.forEach((link) => link.classList.remove('active'));

      navLink.classList.add('active');

      tabsContent.forEach((content, j) => {
        content.classList.remove('active');
        if (j === i) content.classList.add('active');
      });
    });
  });
};
const tabsNav = document.querySelectorAll('.bikes .tabs-nav__link');
const tabsContent = document.querySelectorAll('.bikes .tabs-content');
showTabs(tabsNav, tabsContent);

// burger menu
const burgerBtn = document.querySelector('.burger');
const navMenu = document.querySelector('.menu');
const handleBurgerClick = () => {
  burgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
};
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('burger')) handleBurgerClick();
});
