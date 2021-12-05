$('.slider').slick({
    slidesToShow: 1,
    dots:true,
    autoplay:true
})
$('.slider2').slick({
    slidesToShow: 4,
  responsive:[
      {
        breakpoint: 992,
      settings:{
            arrows: false,
          centerPadding: '40px',
          slidesToShow: 3}
      },
      {
          breakpoint:768,
          settings:{
              arrows: false,
              centerPadding: '40px',
              slidesToShow:2}
          },
      {
          breakpoint: 415,
          settings: {
              arrows: false,
              centerPadding: '20px',
              slidesToShow: 1

          }
  }]
})

