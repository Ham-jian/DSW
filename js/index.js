
$(document).ready(function(){
  new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: false,
    //licensede Key: '',
    navigation: true,
    anchors:['Num0', 'Num1', 'Num2', 'Num3', 'Num4', 'Num5', 'Num6'],
    afterLoad: function(old_elem, new_elem, direction){
  
    }
  });
  
  /* Swiper 01 */
  const swiper01 = new Swiper('.sec1_swiper_01 .swiper-container', {
    pagination: {
      el: '.sec1_swiper_01 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.sec1_swiper_01 .swiper-button-prev',
      nextEl: '.sec1_swiper_01 .swiper-button-next',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true
  });
  
  /* Swiper 01 */
  const swiper02 = new Swiper('.sec1_swiper_02 .swiper-container', {
    pagination: {
      el: '.sec1_swiper_02 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.sec1_swiper_02 .swiper-button-prev',
      nextEl: '.sec1_swiper_02 .swiper-button-next',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true
  });


  /* 모바일 햄버거 메뉴 */
  slide = true;

  $(".allmenu").click(function(){
    if(slide){
      $(this).addClass("active");
      $(".gnb").animate({top:"0"});
      slide = false;
    }else {
      $(this).removeClass("active");
      $(".gnb").animate({top:"-100vh"});
      slide = true;
    };
  });

  // move = true;
  // $(".gnb li").click(function(){
  //   if(move){
  //     $(".allmenu").removeClass("active");
  //     $(".gnb").animate({top:"-100vh"});
  //     move = false;
  //   }else {
  //     $(".allmenu").addClass("active");
  //     $(".gnb").animate({top:"0"});
  //     move = true;
  //   };
  // });

  $(".acodion_tab").click(function(){
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
  });

  /* acodion = true;
  $(".acodion_tab").click(function(){
    if(acodion){
      $(this).siblings().removeClass("selected")
      $(".acodion_tab_text").siblings().hide();
      acodion = false;
    }else {
      $(this).addClass("selected");
      $(".acodion_tab_text").siblings().show();
      acodion = true;
    };
  }); */


});