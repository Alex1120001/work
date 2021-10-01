/*-------hamburger------*/

var api = $('#but-menu');
api.click(function () {
    if ($('.hamburger').hasClass('is-active')) {
        $('.menu-wrap').css('display', 'none');
        $('.hamburger').removeClass('is-active')
    }

    else {
        $('.menu-wrap').css('display', 'block');
        $('.hamburger').addClass('is-active');
    }
});


/*---------counter up ---------------*/

$('.amount-number').counterUp({
    delay: 10,
    time: 900
});


/*-----------slider------------*/


$(document).ready(function () {
    $('.slider-container').slick({
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
        dots: false,
        arrows: true,
        slidesToShow: 3,

        unslick: true,
        responsive: [
            {
                breakpoint: 1044,
                settings: {
                    unslick: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                    centerMode: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    unslick: false,

                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                    centerMode: true,

                    slidesToShow: 2
                }
            }
            ,
            {
                breakpoint: 645,
                settings: {
                    unslick: false,

                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                    centerMode: true,

                    slidesToShow: 1
                }
            }

        ]
    });
});


/*--------------form --------------*/

$(".close-link-form").click(function (event) {
    $(".form-popup").fadeOut("slow");
});

$(".popupForm, .content-list-item, .header-button, .menu-button").click(function () {
    $(".form-popup").fadeIn("slow");
});
$(".form-popup").click(function () {
    $(".form-popup").css('display', 'none');
});



/*--------------scroll --------------*/

$("a.menu-link, a.logo-link").click(function () {
   
    $('.hamburger').removeClass('is-active')
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 60 + "px"
    }, {
        duration: 500,
        easing: "swing"
    });
    return false;
});


/*------------------popup verification --------------*/

$(".popup-close").click(function (event) {
    $(".popup-ver").fadeOut("slow");
});