
$(function () {

  $('.gnb .title a').mouseover(function(){
    $('.menu_bg').addClass('on')
    $('.gnb_icon').addClass('on');
    $(this).siblings('.sub').addClass('on');
   
    if($(this).hasclass = 'last'){
      h =0
    }else{
      h = $(this).siblings('.sub').outerHeight();

    }
    $('.menu_bg').css({height:h});
    
  })

  
  // $('.gnb .title a').hover(function(e){
  //     e.preventDefault();
  //     $(this).addClass('on').siblings().removeClass('on')
  //     target = $(this).attr('href');
  //     $(target).addClass('on').siblings().removeClass('on')
  //     $('.gnb .title a').css("color","rgba(13, 51, 22, 1)");
  // },function(e){
  //   $(target).removeClass('on')
  //   }
  //   )
  $('.gnb .title > li').mouseleave(function(){
    
    $('.sub').removeClass('on');

  })
  
  $('.title').mouseleave(function(){
    $('.menu_bg').removeClass('on');
    // $('.sub').removeClass('on');
    $('.gnb_icon ').removeClass('on')
  })



  let slide01 = new Swiper(".slide01", {
    slidesPerView: 'auto', //한번에 보여지는 슬라이드의 개수
    spaceBetween: 50, //슬라이드 간 마진값!
    grabCursor: true, //슬라이드 위에서 커서가 잡는 모양으로 바뀐다
     //첫 슬라이드가 정 가운데에서 시작한다.
    speed: 3000, //슬라이드가 한 번 움직일 때 소요되는 시간.
    parallax: true, //시차 천천히 슬라이드가 움직이게 된다.
   
    // initialSlide: 1, //시작할 슬라이드의 번호(0부터 시작한다. 여기서는 centeredSlides에 올 슬라이드번호!)
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".btn.next",
      prevEl: ".btn.prev",
      
    
    },
    
  });
  
  let slide02 = new Swiper(".slide02", {
    slidesPerView: 'auto', //한번에 보여지는 슬라이드의 개수
    spaceBetween: 70, //슬라이드 간 마진값!
   
     //첫 슬라이드가 정 가운데에서 시작한다.
    speed: 3000, //슬라이드가 한 번 움직일 때 소요되는 시간.
    
   
    // initialSlide: 1, //시작할 슬라이드의 번호(0부터 시작한다. 여기서는 centeredSlides에 올 슬라이드번호!)
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".btn.next",
      prevEl: ".btn.prev",
      
    
    },
    
  });

  //intro
  // gsap.to  // 동작 후의 값을 바꿀 때.
  // gsap.from  // 동작 전의 값을 바꿀 때.
  // gsap.fromTo  //동작 전, 후의 값을 세팅 가능.


  gsap.from('.sc_visual h2', {
    y: 100,
    opacity:0,
    duration: 1
  })
  gsap.from('.sc_visual p', {
    y: 100,
    opacity:0,
    duration: 1,
    dealy:0.3,
  })


  //white
  // gsap.to('.swiper .bg',{
  //   scrollTrigger:{
  //     trigger:".white .swiper",
  //     start:"top 100%",//첫 엘리먼트기준, 두번쨰 윈도우기준
  //     end:"bottom top",
  //     // markers:true,
  //     scrub:0.5,
  //   },
  //   y:-100
  // })
$('.swiper').each(function(index,item){

  el = $(this).find('.bg')
  gsap.to(el,{
      scrollTrigger:{
        trigger:item,
        start:"top 100%",//첫 엘리먼트기준, 두번쨰 윈도우기준
        end:"bottom top",
        markers:true,
        scrub:0.5,
      },
      y:-100
    })
})
$('.img_motion').each(function(index,item){

  el = $(this).find('img')
  gsap.to(el,{
      scrollTrigger:{
        trigger:item,
        start:"top 100%",//첫 엘리먼트기준, 두번쨰 윈도우기준
        end:"bottom top",
        markers:true,
        scrub:0.5,
      },
      y:-100
    })
})
  // gsap.to('.slide01',{
  //   scrollTrigger:{
  //     trigger:".slide01",
  //     start:"top 100%",//첫 엘리먼트기준, 두번쨰 윈도우기준
  //     end:"bottom top",
  //     markers:true,
  //     scrub:0.5,
  //   },
  //   y:100
  // })
})//지우지마세요



