$(function () {
 $('.gnb .title a').click(function(e){
    e.preventDefault();
    $(this).addClass('on').siblings().removeClass('on')
    target = $(this).attr('href');
    $(target).addClass('on').siblings().removeClass('on')
  
 })

})


let swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   
   pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".btn_next",
      prevEl: ".btn_prev",
    },
  });


