$(function(){

  // Covervid JS Call
  $('.covervid-video').coverVid(1920, 1080);


  // jarallax JS Call
  $('.jarallax').jarallax({
      speed: 0.2
  }); 

  // Bxslider Call
  $('.bxslider').bxSlider({
    minSlides: 2,
    maxSlides: 7,
    auto: true,
    pager: false,
    controls: false,
    slideWidth: 160,
    slideMargin: 1,
    moveSlides: 1
  });

  // WOW JS Call
  new WOW().init();

  // incrementalNumber Call
  incrementalNumber();


  // 빈링크 설정
  var blanklink = $('.gnb li:nth-child(6) a, .gnb li:nth-child(7) a, .gnb-hidden li:nth-child(6) a, .gnb-hidden li:nth-child(7) a, .menu-language-hidden ul a');
  blanklink.click(function(){
    event.preventDefault();
  });


  //hidden gnb toggle
  var q_menu_btn = $(".q-menu-btn");
  var close_btn = $(".close-btn");
  var gnb_hidden = $(".gnb-hidden");
  var hidden_menu_item = $(".gnb-hidden ul li a");
  var hidden_cover = $(".hidden-cover");

  q_menu_btn.click(function(){
    gnb_hidden.animate({'right': 0}, 400);
    hidden_cover.css('left', 0);
    $('body').css('overflow-y', 'hidden');
    event.preventDefault();
  });
  close_btn.click(function(){
    gnb_hidden.animate({'right': '-' + 100 + '%'}, 400);
    hidden_cover.css('left', '-' + 100 + '%');
    $('body').css('overflow-y', 'scroll');
    $('body').css('overflow-x', 'hidden');
  });
  hidden_menu_item.click(function(){
    var el = $(this).attr('href');
    if(el != '#login' && el != '#language' && el != '#') {
      gnb_hidden.animate({'right': '-' + 100 + '%'}, 400);
      hidden_cover.css('left', '-' + 100 + '%');
      $('body').css('overflow-y', 'scroll');
      $('body').css('overflow-x', 'hidden');
    }
  });
  hidden_cover.click(function(){
    gnb_hidden.animate({'right': '-' + 100 + '%'}, 400);
    hidden_cover.css('left', '-' + 100 + '%');
    $('body').css('overflow', 'scroll');
    $('body').css('overflow-x', 'hidden');
  });



   // 상단 네비게이션 설정
   $(window).scroll(function(){

    var navi = $('#navi');
    var logo = $('.logo');
    var scrollPos = $(window).scrollTop();

    if(scrollPos > 300){
      navi.addClass('fixed');
      logo.attr('src', '../images/logo/logo_red.png');
      // TweenMax.fromTo(navi, 0.2, {top: -50}, {top: 0});
    }else{
      $('#navi').removeClass('fixed');
      logo.attr('src', '../images/logo/logo_white.png');
    }

  });



  // 상단 네비게이션 스크롤이동 설정
  var menuItem = $('.gnb li a, .gnb-hidden li a, #navi h1 a');

  menuItem.click(function(){
    var el = $(this).attr('href');  //ex) #about
    var elWrap = $(el);           //ex) $('#about')

    if(el != '#login' && el != '#language' && el != '#') {
      scrollMove(elWrap, 60);
    }
  });

  // 부드러운 이동 함수 만들기
  function scrollMove(elWrap, navHeight){
    var offset = elWrap.offset().top; //위로부터 얼만큼 떨어져 있는지
    var totalScroll = offset - navHeight;

    $('html, body').animate({scrollTop: totalScroll}, 800);
  }


  // gnb 2단메뉴
  var menu_lang = $('.menu-language');

  menu_lang.hover(
    function(){
      $(this).children('ul').stop().slideDown();
    },
    function(){
      $(this).children('ul').stop().slideUp();
    }
  );

  // hidden gnb 2단메뉴
  var hidden_lang = $('.menu-language-hidden');

  hidden_lang.click(
    function(){
      $(this).children('ul').slideToggle();
      
      if(hidden_lang.find('i').attr('class') == 'fa fa-angle-down'){
        hidden_lang.find('i').attr('class', 'fa fa-angle-up');
      }else{
        hidden_lang.find('i').attr('class', 'fa fa-angle-down');
      }
    }
  );


  // top 버튼 사라지기 & 나타나기
  $(window).scroll(function(){
    var top_btn = $('.top-btn');
    var scrollPos = $(window).scrollTop();

    if(scrollPos < 500){
      top_btn.fadeOut();
    } else {
      top_btn.fadeIn();
    }
  });


});