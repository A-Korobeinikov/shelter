const menuBurger = document.querySelector('#menu-burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mainLogo = document.querySelector('.logo');
const menuMobileClose = document.querySelector('.mobile-mask')
const headerMenu = document.querySelector('.header');
const heightWindow = window.innerHeight;
console.log(heightWindow)

function toggleMenuBurger() {
    menuBurger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    mainLogo.classList.toggle('hidden');
    headerMenu.classList.toggle('hidden');
    menuMobileClose.classList.toggle('active')
    disableBodyScroll({savePosition: true})
}

function closeMenuBurger(event) {
    
    if(event.target.classList.contains('menu-link') || event.currentTarget.classList.contains('mobile-mask')) {
        toggleMenuBurger()
        enableBodyScroll()
    }    
}


menuBurger.addEventListener('click', toggleMenuBurger);
mobileMenu.addEventListener('click', closeMenuBurger);
menuMobileClose.addEventListener('click', closeMenuBurger);

/*Функция отключения скролла */
const enableBodyScroll = () => {
    if (document.readyState === 'complete') {
      document.body.style.position = '';
      document.body.style.overflowY = '';
      document.body.style.left = '';
      document.body.style.right = '';
      if (document.body.style.marginTop) {
        const scrollTop = -parseInt(document.body.style.marginTop, 10);
        document.body.style.marginTop = '';
        window.scrollTo(window.pageXOffset, scrollTop);
      }
    } else {
      window.addEventListener('load', enableBodyScroll);
    }
  };
  
const disableBodyScroll = ({ savePosition = false } = {}) => {
    if (document.readyState === 'complete') {
      if (document.body.scrollHeight > window.innerHeight) {
        if (savePosition) document.body.style.marginTop = `-${window.pageYOffset}px`;
        document.body.style.position = 'fixed';
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflowY = 'scroll';
      }
    } else {
      window.addEventListener('load', () => disableBodyScroll({ savePosition }));
    }
  };