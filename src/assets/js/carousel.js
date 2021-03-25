function loadCarousel() {
  $(".owl-carousel").owlCarousel({
    animateOut: 'fadeOut',
    center: true,
    items: 5,
    stagePadding: 10,
    loop: true,
    margin: 20,
    responsive: {
      0:{
        items: 1
      },
      400:{
        items: 1
      },
      500:{
        items: 3
      },
      900:{
        items: 5
      }
    }
  });

  // Go to the next item
  $('.moveNextCarousel').click(function() {
    $(".owl-carousel").trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.movePrevCarousel').click(function() {
    $(".owl-carousel").trigger('prev.owl.carousel');
  })
}

/*$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    animateOut: 'fadeOut',
    center: true,
    items: 5,
    stagePadding: 10,
    loop: true,
    margin: 20
  });

  // Go to the next item
  $('.moveNextCarousel').click(function() {
    $(".owl-carousel").trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.movePrevCarousel').click(function() {
    $(".owl-carousel").trigger('prev.owl.carousel');
  })
});*/
