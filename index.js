
// smooth-scrol
$(function(){
    $('a[href^="#"]').click(function(){
      var speed =1300;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

// if(href == "#" || href == ""){
//     var target = $('html');
//  }else{
//     var target = $(href);
// }

// return false; ブラウザ側で行う処理を中断


// slider
$(function() {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        focusOnSelect: true,
    });
});


// fade-in
$(function(){
    var effect_move = 50;
    var effect_time = 800;

    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    $(function(){
        $(window).on('scroll load',function (){
            $('.scroll-fade').each(function(){
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + 200){
                    $(this).css('opacity','1');
                    $(this).css('transform','translateY(0)');
                }
            });
        });
    });
});


// toggle
$(function(){
    $('.q_box').click(function(){
            $(this).next('.a_box').slideToggle();
            $(this).toggleClass('active')
    });
});




// nav
$(function() {
    var $header = $('header');
    $('#nav-toggle').click(function(){
        $header.toggleClass('open');
    });
});