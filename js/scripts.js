/*=================================
===    CAROUSEL                ====
=================================== */

$(document).ready(function() {
  $('.main-nav-list, .underline').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 75 //Height of Navigation Bar
  });
  
  // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/         
  var top = $('#main-nav').offset().top - parseFloat($('#main-nav').css('margin-top').replace(/auto/, 0));
  
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#main-nav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#main-nav').removeClass('fixed');
    }
  });
  
});

/*=================================
===  DARKEN NAV                ====
=================================== */



var mainbottom = $('#main-nav').offset().top + $('#main-nav').height();

// // on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar').addClass('past-main');
    } else {
        $('.navbar').removeClass('past-main');
    }

});