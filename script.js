var $win =  $(window);
var $body = $('body');
var $parent = $('#k-parent');
var $child = $('.child');
var deg;
var $btn = $('#btn-c');
var $slide1 = $('#slide1')
var $slide2 = $('#slide2')
var $slide3 = $('#slide3')
var $slide4 = $('#slide4')
var $slide5 = $('#slide5')
var $burger = $('#burger')
var $navUl = $('nav ul')

//ナビゲーション
$(function(){
  $burger.on('click', function() {
    $(this).toggleClass('active');
    $navUl.toggleClass('nav-in');
    return false;
  });
  $('nav a').on('click',function(){
    $navUl.removeClass('nav-in');
    $burger.removeClass('active');
  });
});

//スムーズスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -= 60;
    $("html,body").animate({scrollTop: target},500);
    return false;
  });
  $('#top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); 
    return false;
  });

});

//観覧車
$win.on('scroll',function(){
  deg = $win.scrollTop()/4;
  $parent.css('transform','rotate('+deg+'deg)');
  $child.css('transform','rotate('+(-deg)+'deg)');
});

//収穫ボタン
$(function(){
  $btn.hide();
  var fruit = $('#fruit').offset().top;
  var fHight =$('#fruit').height();
  var height = $(window).height();
  $win.on('scroll',function(){
    if ($win.scrollTop() > fruit - height + (height / 3) && $win.scrollTop() < fruit + fHight) {
      $btn.fadeIn();
    } else {
      $btn.fadeOut();
    }
  });
});

// 降ってくるやつ
$btn.on('click',function(){
  $(this).addClass('slide-out');
  $slide1.addClass('slide-in');
  $slide1.removeClass('slide-out');
  setTimeout(function(){
    $slide2.addClass('slide-in');
    $slide2.removeClass('slide-out');
  }, 200);
  setTimeout(function(){
    $slide3.addClass('slide-in');
    $slide3.removeClass('slide-out');
  }, 400);
  setTimeout(function(){
    $slide4.addClass('slide-in');
    $slide4.removeClass('slide-out');
  }, 600);
  setTimeout(function(){
    $slide5.addClass('slide-in');
    $slide5.removeClass('slide-out');
  }, 800);
});

$slide5.on('click',function(){
  $btn.removeClass('slide-out');
  $btn.css("display", "block");
  $slide1.removeClass('slide-in');
  $slide1.addClass('slide-out');
  setTimeout(function(){
    $slide2.removeClass('slide-in');
    $slide2.addClass('slide-out');
  }, 200);
  setTimeout(function(){
    $slide3.removeClass('slide-in');
    $slide3.addClass('slide-out');
  }, 400);
  setTimeout(function(){
    $slide4.removeClass('slide-in');
    $slide4.addClass('slide-out');
  }, 600);
  setTimeout(function(){
    $slide5.removeClass('slide-in');
    $slide5.addClass('slide-out');
  }, 800);
});



//slick
$(function() {
  $('.slider').slick({
      dots: true, //下の丸ぽっち（インジケーター）を表示 
      autoplay: true, //自動再生 
      autoplaySpeed: 5000 //自動再生の速度 
      //ここにオプションを書いていく 
  });
});
