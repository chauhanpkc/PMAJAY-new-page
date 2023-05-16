//For page black and white
$(document).ready(function($){
  $('.black-white').on('click',function(){
    if($("html").attr('data-click-state') == 1) {
        $("html").attr('data-click-state', 0);
        $("html").css('filter', 'grayscale(0)')
      }
    else {
      $("html").attr('data-click-state', 1);
      $("html").css('filter', 'grayscale(1)')
    }
  });
});

//For footer link crousel
var owl = $('.owl-carousel');
owl.owlCarousel({
  loop:true,
  margin:10,
  autoWidth:true,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      300:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});
// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     nav:true,
//     responsive:{
//       0:{
//           items:1
//       },
//       300:{
//           items:2
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// });
