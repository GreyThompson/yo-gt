/*=================================
===    CAROUSEL                ====
=================================== */
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
        autoPlay: 3000, 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

/*=================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll',function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });   
