var swiper = new Swiper('.swiper-container', {
    
    slidesPerView: 1,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 50,

    pagination: {
      el: '.swiper-pagination',
    },
});




if(document.body.clientWidth < 540){

  var swiper = new Swiper('.swiper-container_2', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 100,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

}
 
else if(document.body.clientWidth > 540){

  document.querySelector('.swiper-container_2').classList.remove('swiper-container_2');

  let card = document.querySelectorAll('.about_wrapper-card');

  card.forEach(function(item){
    item.classList.remove('swiper-slide');
  })
}


  

