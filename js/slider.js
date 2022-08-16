$('.slide-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  adaptiveHeight:true,
  infinite: true,
  arrows:true,
  autoplay:true,
  autoplaySpeed:1500,
  fade: true,
  cssEase: 'linear'
});

$('.products-list-slider').slick({
  // centerMode: true,
  // centerPadding: '60px',
  // slidesToShow: 3,
  // slidesToScroll:1,

  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
 
});

