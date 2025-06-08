import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

const header = document.querySelector('.header');
window.addEventListener('scroll', () =>
  window.scrollY > header.offsetHeight
    ? header.classList.add('scrolled')
    : header.classList.remove('scrolled')
);

const swiper = new Swiper('.feedback .swiper', {
  modules: [Navigation],
  slidesPerView: 2,
  navigation: {
    nextEl: '.feedback .swiper-button--next',
    prevEl: '.feedback .swiper-button--prev',
  },
});
