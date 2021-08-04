$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
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