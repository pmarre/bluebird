const hiddenClass = document.querySelectorAll('.js--intro');
const introContainer = document.querySelector('.intro__container');
const navOverlay = document.querySelector('.nav__overlay');
const navMenuBtn = document.querySelector('.nav__icon');
const closeBtn = document.querySelector('.nav--close_btn');
const navList = document.querySelector('.nav--mobile_list');

function removeIntroHidden() {
  for (let i = 0; i < hiddenClass.length; i++) {
    hiddenClass[i].classList.remove('intro--hidden');
  }
  introContainer.style.display = 'none';
}

function showSection() {
  document.querySelector('.work').classList.add('animate');
}

window.addEventListener('load', function() {
  setTimeout(removeIntroHidden, 7000);
  setTimeout(showSection, 2000);
});

function showNavigation() {
  navOverlay.classList.remove('hide--nav');
  navOverlay.classList.add('show--nav');
  navList.classList.add('nav--mobile_list--show');
  closeBtn.classList.add('nav--close_btn--show');
}

function hideNavigation() {
  navOverlay.classList.remove('show--nav');
  navList.classList.remove('nav--mobile_list--show');
  closeBtn.classList.remove('nav--close_btn--show');
  navOverlay.classList.add('hide--nav');
}

navMenuBtn.addEventListener('click', showNavigation);
closeBtn.addEventListener('click', hideNavigation);
