
$(function () {
  
  $('.gnb .title a').hover(function(e){
      e.preventDefault();
      $(this).addClass('on').siblings().removeClass('on')
      target = $(this).attr('href');
      $(target).addClass('on').siblings().removeClass('on')
      $('.gnb .title a').css("color","rgba(13, 51, 22, 1)");
  },function(e){
    $(target).removeClass('on')
    }
    )
  


})





let swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto', //한번에 보여지는 슬라이드의 개수
  spaceBetween: 30, //슬라이드 간 마진값!
  grabCursor: true, //슬라이드 위에서 커서가 잡는 모양으로 바뀐다
  centeredSlides: true, //첫 슬라이드가 정 가운데에서 시작한다.
  speed: 3000, //슬라이드가 한 번 움직일 때 소요되는 시간.
  parallax: true, //시차 천천히 슬라이드가 움직이게 된다.
 
  initialSlide: 1, //시작할 슬라이드의 번호(0부터 시작한다. 여기서는 centeredSlides에 올 슬라이드번호!)
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".btn.next",
    prevEl: ".btn.prev",
    
  
  },
});


//gnb메뉴 색변경
const title = document.querySelectorAll('header .gnb_icon .gnb .title a')

window.addEventListener('scroll', _.throttle( function(){

  if (window.scrollY < 808 ){
    for(i = 0; i < title.length; i++){
      title[i].style.color = 'white'
    }
 }else if(window.scrollY > 1999 && window.scrollY < 3000){
  for(i = 0; i < title.length; i++){
    title[i].style.color = 'white'
  }
  }else if(window.scrollY > 4259 && window.scrollY < 4892){
    for(i = 0; i < title.length; i++){
      title[i].style.color = 'white'
    }
    }
    else if(window.scrollY > 6890 && window.scrollY < 7599){
      for(i = 0; i < title.length; i++){
        title[i].style.color = 'white'
      }
      }
      else if(window.scrollY > 11012 && window.scrollY < 11631){
        for(i = 0; i < title.length; i++){
          title[i].style.color = 'white'
        }}
        else if(window.scrollY > 12583 && window.scrollY < 13493){
          for(i = 0; i < title.length; i++){
            title[i].style.color = 'white'
          }}
  else{
    for(i = 0; i < title.length; i++){
      title[i].style.color = 'rgba(13,51,22,0.8)'}
  }
},300
  
));
//_.throttle ->일정한 시간 간격으로 이벤트가 작동하게 하는 메소드