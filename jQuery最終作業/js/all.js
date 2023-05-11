$(document).ready(function () {
    $('.menu-dropdown').click(function (e) { 
        e.preventDefault();
        $('.menu-dropdown-open').slideToggle();

        $(this).parent().siblings().find('.menu-dropdown-open').hide();
    });

    //swiper效果//

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 3000,
        autoplay:{
            delay: 2000,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

      //lightbox效果//

    lightbox.option({
      'resizeDuration': 800,
      'wrapAround': true
    })

    
    //點擊toTop回到頁頂//
    function showBtnCondition() {
      if ($(this).scrollTop() > 250) {
          $('.toTop').fadeIn();
          }else{
              $('.toTop').fadeOut();
          }
      }
  $(window).scroll(showBtnCondition);
  $('.toTop').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 1000); 
  });
});