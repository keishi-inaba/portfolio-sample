//オープンボタン

$('#openbtn').click(function() {
  $(this).toggleClass('active');
  $('#g-navi').toggleClass('panel');
});

$('#g-navi a').click(function() {
 $('#openbtn').removeClass('active');
 $('#g-navi').removeClass('panel');
});



// ページトップ

function PageTop() {
  var scroll = $(window).scrollTop();
  if(scroll >= 100) {
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  } else {
    if($('#page-top').hasClass('UpMove')) {
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove')
    }
  }
}

$('#page-top').click(function() {
  $('body, html').animate({
    scrollTop: 0
  }, 500);
  return false;
})

//ニュースティッカー

var slider;
var sliderFlag = false;
var breakpoint = 768;

function sliderSet() {
  var windowWidth = window.innerWidth;
  if(windowWidth >= breakpoint && !sliderFlag) {
    slider = $('.slider').bxSlider({
      touchEnabled: false,
      mode: 'vertical',
      controls: false,
      auto: 'true',
      pager: false
    });
    sliderFlag = true;
  } else if(windowWidth < breakpoint && sliderFlag) {
    slider.destroySlider();
    sliderFlag = false;
  }
}

//文字がじわっと出現

function BlurAnime() {
  $('.blurTrigger').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();
    if(scroll >= elemPos - windowH) {
      $(this).addClass('blur');
    } else {
      $(this).removeClass('blur');
    }
  });
}

//流れるテキスト

function slideAnime() {
  $('.leftAnime').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();

    if(scroll >= elemPos - windowH) {
      $(this).addClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').addClass('slideAnimeRightLeft');
    } else {
      $(this).removeClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').removeClass('slideAnimeRightLeft');
    }
  });

  $('.RightAnime').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();

    if(scroll >= elemPos - windowH) {
      $(this).addClass('slideAnimeRightLeft');
      $(this).children('.rightAnimeInner').addClass('slideAnimeLeftRight');
    } else {
      $(this).removeClass('slideAnimeRightLeft');
      $(this).children('.rightAnimeInner').removeClass('slideAnimeLeftRight');
    }
  });
}

//フェードアップ

function fadeAnime() {
  $('.fadeInTrigger').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();

    if(scroll >= elemPos - windowH) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });

}

function fadeUpA() {
  $('.fadeUpTrigger').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();
  
    if(scroll >= elemPos - windowH) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}


//ページをロード、スクロールした時
 
  $(window).scroll(function() {
  PageTop();
  sliderSet();
  BlurAnime();
  slideAnime();
  fadeUpA();
});

$(window).on('load', function() {
  PageTop();
  BlurAnime();
  slideAnime();
  fadeUpA();
});

$(window).on('load resize', function() {
  sliderSet();
});

