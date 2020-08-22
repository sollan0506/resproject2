$(function(){

  // Covervid JS Call
  $('.covervid-video').coverVid(1920, 1080);


  // jarallax JS Call
  $('.jarallax').jarallax({
      speed: 0.2
  }); 

  // Bxslider Call
  $('.bxslider').bxSlider({
    minSlides: 2,             //화면을 줄였을 떄 최소 슬라이드 개수
    maxSlides: 7,             //화면을 키웠을 때 최대 슬라이드 개수
    auto: true,                //슬라이드 자동 재생
    pager: false,              //페이저 없음
    controls: false,           //컨트롤 화살표 없음
    slideWidth: 160,         // 각 슬라이드의 너비
    slideMargin: 1,           //각 슬라이드 사이의 마진값
    moveSlides: 1            //슬라이드 이동시 넘어가게 할 슬라이드 장수
  });

  // WOW JS Call
  new WOW().init();

  // incrementalNumber Call
  incrementalNumber();


  // 빈링크 설정
  var blanklink = $('.gnb li:nth-child(6) a, .gnb li:nth-child(7) a, .gnb-hidden li:nth-child(6) a, .gnb-hidden li:nth-child(7) a, .menu-language-hidden ul a, .close-btn');
  blanklink.click(function(){
    event.preventDefault();
  });


  //hidden gnb toggle
  var q_menu_btn = $(".q-menu-btn");                                // 햄버거 버튼
  var gnb_hidden = $(".gnb-hidden");                                  // 숨겨져 있는 gnb
  var hidden_menu_item = $(".gnb-hidden ul li a");                 // 숨겨져있는 gnb의 링크
  var hidden_cover = $(".hidden-cover");                              // 숨겨져있는 gnb의 검정반투명 배경
  var close_btn = $(".close-btn");                                        // 숨겨져 있는 gnb의 닫기 버튼

  q_menu_btn.click(function(){
    gnb_hidden.animate({'right': 0}, 400);                              // right -100% --> right 0 (나타나게 함)
    hidden_cover.css('left', 0);                                             // left 100%; --> left 0 (나타나게 함)
    $('body').css('overflow-y', 'hidden');                                 // 세로 스크롤 안되게 막음
    event.preventDefault();
  });
  close_btn.click(function(){
    gnb_hidden.animate({'right': '-' + 100 + '%'}, 400);            // right 0 --> right -100% (숨김)
    hidden_cover.css('left', '-' + 100 + '%');                           // left 0 --> left -100% (숨김)
    $('body').css('overflow-y', 'scroll');                                   // 세로 스크롤 되게 함
    $('body').css('overflow-x', 'hidden');                                 // 가로 스크롤이 생겨서 추가함
  });
  hidden_menu_item.click(function(){        
    var el = $(this).attr('href');                                             // 링크 대상 가져오기
    if(el != '#login' && el != '#language' && el != '#') {           // 로그인, 언어 클릭시는 작동 안되게함
      gnb_hidden.animate({'right': '-' + 100 + '%'}, 400);            // right 0 --> right -100% (숨김)
      hidden_cover.css('left', '-' + 100 + '%');                           // left 0 --> left -100% (숨김)
      $('body').css('overflow-y', 'scroll');                                  // 세로 스크롤 되게 함
      $('body').css('overflow-x', 'hidden');                                // 가로 스크롤이 생겨서 추가함
    }
  });
  hidden_cover.click(function(){
    gnb_hidden.animate({'right': '-' + 100 + '%'}, 400);              // right 0 --> right -100% (숨김)
    hidden_cover.css('left', '-' + 100 + '%');                             // left 0 --> left -100% (숨김)
    $('body').css('overflow-y', 'scroll');                                    // 세로 스크롤 되게 함
    $('body').css('overflow-x', 'hidden');                                  // 가로 스크롤이 생겨서 추가함
  });



   // 상단 네비게이션 설정
   $(window).scroll(function(){

    var navi = $('#navi');
    var logo = $('.logo');
    var scrollPos = $(window).scrollTop();                              // 스크롤바 수직 위치

    if(scrollPos > 300){
      navi.addClass('fixed');
      logo.attr('src', '../images/logo/logo_red.png');
    }else{
      $('#navi').removeClass('fixed');
      logo.attr('src', '../images/logo/logo_white.png');
    }

  });



  // 네비게이션 스크롤이동 설정
  var menuItem = $('.gnb li a, .gnb-hidden li a, #navi h1 a');

  menuItem.click(function(){
    var el = $(this).attr('href');  //ex) #about
    var elWrap = $(el);           //ex) $('#about')

    if(el != '#login' && el != '#language' && el != '#') {       //로그인, 언어 아니면
      scrollMove(elWrap, 60);
    }
    
    event.preventDefault();      //기본 동작(링크 이동)을 중단한다.
  });

  // 부드러운 이동 함수 만들기
  function scrollMove(elWrap, navHeight){
    var offset = elWrap.offset().top;   //위로부터 얼만큼 떨어져 있는지
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