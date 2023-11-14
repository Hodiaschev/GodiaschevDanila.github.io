$(document).ready(function(){
    $('.slider').slick({
         arrows:true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        autoplay:false,
        autoplaySpeed:1500,
        waitForAnimate:false,
        responsive:
        [
            {
                breakpoint: 700,
                settings:
                {
                    slidesToShow:1,
                }
            }
        ]
    });
    });