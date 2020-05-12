let tlMenu = new TimelineMax({paused:true}), forward = true;
let navItem = document.querySelectorAll('.menu-hidden__nav-item');
let menuButton = document.querySelector('.header__menu');
let menuHidden = document.querySelector('.menu-hidden');
let storyLink = document.querySelector('.menu-hidden__link--link');
let freshLink = document.querySelector('.menu-hidden__link--fresh');
let localLink = document.querySelector('.menu-hidden__link--local');
let contactsLink = document.querySelector('.menu-hidden__link--contacts');

tlMenu.to('#hamburgerTop', .1, {
    y:92,
    rotation: 45, 
})
.to('#hamburgerMid', .1, {
    opacity: 0
})
.to('#hamburgerBot', .1, {
    y:69,
    rotation: -45,
})
.staggerFromTo([
    '.menu-hidden',
    navItem,
], .3,{
    delay: 0.1,
    ease: Back.easeOut.config(1),
    opacity:0,
    y:-150,
},{
    opacity:1,
    y:0,
})


menuButton.addEventListener('click', () => {
    toggleMenu();
});
menuHidden.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu(){
    if(forward){
        tlMenu.play();
        }else{
        tlMenu.reverse();
        }
    forward = forward  ? false : true;
}

