$(".autoplay").slick({
  dots: true,
  arrows: true,
  draggable: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover:true,
  responsive: [   
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,        
        touchMove: true,
        touchThreshold: 10, 
        
        waitForAnimate: true,
        centerMode: true,
        speed: 1000,
        easing: 'leaner',
        pauseOnHover: true,
        pauseOnFocus: false,  
        pauseOnDotsHover: true,
        
        vertical: true,
        verticalSwiping: true,
        //verticalScrolling: true,
        initialSlide: 1,

        //variableWidth: true,
        //variableHeight: true,

        arrows: false,
        dots: false,
      }
    },
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

 
