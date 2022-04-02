$('.best_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.nav_slider'
});
$('.nav_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.best_slider',
    autoplay: true,
    autoplaySpeed: 2000,
    
});
