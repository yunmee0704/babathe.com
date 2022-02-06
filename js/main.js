$(function () {
 $('.gnb .title a').click(function(e){
    e.preventDefault();
    $(this).addClass('on').siblings().removeClass('on')
    target = $(this).attr('href');
    $(target).addClass('on').siblings().removeClass('on')
  
 })

})