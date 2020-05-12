let menuToggle = document.querySelector('#menu-toggle');
let mobileNav = document.querySelector('#header_mobile-nav');
let burgerMenu= document.querySelector('.header_burger-menu');

menuToggle.addEventListener('click', toggle);

function toggle(e){
    mobileNav.classList.toggle('header_mobile-nav-active');
    burgerMenu.classList.toggle('header_burger-menu-active');
}

