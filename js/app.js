
$(document).ready(function(){  
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed: 4000,
    arrows:false,
      appendDots:'.slider-dots',
      dotsClass: 'dots',
      pauseOnHover: true
  });

});



$(".meter > span").each(function () {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate(
        {
          width: $(this).data("origWidth")
        },
        1200
      );
  });