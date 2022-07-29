$(window).resize(function () {
    // function
    leistungen_slider();
    news_slider_owl();
    service_slider_owl()
});
$(document).ready(function () {
    //function
    leistungen_slider();
    news_slider_owl();
    service_slider_owl()
    // WOW js
    new WOW().init();
    // toggle class
    $('.menu-toggle-btn').click(function () {
        $('.header-wrapper').toggleClass('mobile-open');
        $('html').toggleClass('cm-overflow');
    });
    //Sub Menu Js
    $('.has-submenu').click(function () {
        if ($(window).width() <= 991) {
            $(".dropdown-submenu").slideToggle();
            $(this).toggleClass('cm-active');
        }
    });
    //Bewertungen owl Slider
    $('.bewertungen-owl').owlCarousel({
        loop: false,
        margin: 40,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                margin: 0,
                navText: ["\n" +
                    "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.945\" height=\"9.102\" viewBox=\"0 0 11.945 9.102\">\n" +
                    "  <g id=\"Group_12832\" data-name=\"Group 12832\" transform=\"translate(11.445 0.707) rotate(90)\">\n" +
                    "    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M7.688,0,3.844,3.844,0,0\" transform=\"translate(0 7.101)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                    "    <line id=\"Line_22\" data-name=\"Line 22\" y1=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                    "  </g>\n" +
                    "</svg>\n", "\n" +
                    "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.944\" height=\"9.102\" viewBox=\"0 0 11.944 9.102\">\n" +
                    "  <g id=\"Group_12831\" data-name=\"Group 12831\" transform=\"translate(11.444 0.707) rotate(90)\">\n" +
                    "    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M0,3.844,3.844,0,7.688,3.844\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                    "    <line id=\"Line_21\" data-name=\"Line 21\" y2=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                    "  </g>\n" +
                    "</svg>\n"
                ],
            },
            767: {
                items: 1,
            },
        }
    });
    // Accordion Js
    $('.ct_accordion_lable').click(function () {
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
        $(this).toggleClass('ct_visiable');
        $(this).parents('.faq-col').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
        $(this).siblings().find('.ct_accordion_info').slideUp();
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_info').slideUp();
        $(this).parents('.faq-col').siblings().find('.ct_accordion_info').slideUp();
        $(this).parents('.ct_accordion_wrap').find('.ct_accordion_info').slideToggle();
    });
    // Contact Form Js
    $('.fixed-phone-icon').click(function () {
        $(this).toggleClass('this_call_active');
        $('.contact-form-block').toggleClass('this_call_active');
    });
    $('.contact-form-close-btn').click(function () {
        $('.fixed-phone-icon').removeClass('this_call_active');
        $('.contact-form-block').removeClass('this_call_active');
    });
    // footer-fixed menu
    $(".footer-fixed-trigger").click(function () {
        $(".footer-fixed-trigger").toggleClass("active");
        $(".footer-fixed-icon").toggleClass("show");
    });
    // More contain show
    $('.moreless-button').click(function () {
        $(this).parents('.main_more_text').find('.moretext').slideToggle();
        $(this).parents('.main_more_text').toggleClass('change_design');
        $(this).parents('.main_more_text').find('.slide_toggle_btn').fadeToggle('fast');
        setTimeout(function () {
            $('.owl-carousel').trigger('refresh.owl.carousel');
        }, 470);
        $(this).parents('.owl-item').siblings().find('.moreless-button span').text("Mehr dazu");
        $(this).parents('.owl-item').siblings().find('.moreless-button i').removeClass('angle_rotact');
        $(this).parents('.owl-item').siblings().find('.moretext').slideUp('slow');
        $(this).parents('.main_more_text').siblings().find('.moretext').slideUp('slow');
        if ($(this).find('span').text() == "Weniger") {
            $(this).find('span').text("Mehr dazu")
            $(this).find('.down-arrow').removeClass('angle_rotact');
        } else {
            $(this).find('span').text("Weniger");
            $(this).find('.down-arrow').addClass('angle_rotact');
        }
    });
});
// paket_slider
function leistungen_slider() {
    var checkWidth = $(window).width();
    var owlPost = $(".leistungen-owl");
    if (checkWidth >= 992) {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        owlPost.removeClass('owl-carousel owl-theme');
    } else if (checkWidth <= 991) {
        owlPost.addClass('owl-carousel owl-theme');
        owlPost.owlCarousel({
            loop: false,
            margin: 20,
            dots: true,
            nav: true,
            autoHeight: true,
            navText: ["\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.945\" height=\"9.102\" viewBox=\"0 0 11.945 9.102\">\n" +
                "  <g id=\"Group_12832\" data-name=\"Group 12832\" transform=\"translate(11.445 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M7.688,0,3.844,3.844,0,0\" transform=\"translate(0 7.101)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_22\" data-name=\"Line 22\" y1=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n", "\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.944\" height=\"9.102\" viewBox=\"0 0 11.944 9.102\">\n" +
                "  <g id=\"Group_12831\" data-name=\"Group 12831\" transform=\"translate(11.444 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M0,3.844,3.844,0,7.688,3.844\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_21\" data-name=\"Line 21\" y2=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n"
            ],
            items: 1,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 3
                },
            }
        });
    }
}
$('.kurs_plan_slider .owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: true,
            navText: ["\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.945\" height=\"9.102\" viewBox=\"0 0 11.945 9.102\">\n" +
                "  <g id=\"Group_12832\" data-name=\"Group 12832\" transform=\"translate(11.445 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M7.688,0,3.844,3.844,0,0\" transform=\"translate(0 7.101)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_22\" data-name=\"Line 22\" y1=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n", "\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.944\" height=\"9.102\" viewBox=\"0 0 11.944 9.102\">\n" +
                "  <g id=\"Group_12831\" data-name=\"Group 12831\" transform=\"translate(11.444 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M0,3.844,3.844,0,7.688,3.844\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_21\" data-name=\"Line 21\" y2=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n"
            ],
        },
        576: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
// -----------------------------------  Studio Page Bottom Slider --------------------------------//
$('.unser_team_slider .owl-carousel').owlCarousel({
    margin: 40,
    stagePadding: 250,
    nav: true,
    dots: false,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 5,
            dots: true,
            stagePadding: 50,
            navText: ["\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.945\" height=\"9.102\" viewBox=\"0 0 11.945 9.102\">\n" +
                "  <g id=\"Group_12832\" data-name=\"Group 12832\" transform=\"translate(11.445 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M7.688,0,3.844,3.844,0,0\" transform=\"translate(0 7.101)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_22\" data-name=\"Line 22\" y1=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n", "\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.944\" height=\"9.102\" viewBox=\"0 0 11.944 9.102\">\n" +
                "  <g id=\"Group_12831\" data-name=\"Group 12831\" transform=\"translate(11.444 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M0,3.844,3.844,0,7.688,3.844\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_21\" data-name=\"Line 21\" y2=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n"
            ],
        },
        450: {
            items: 2,
            margin: 20,
            dots: true,
            stagePadding: 50,
            navText: ["\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.945\" height=\"9.102\" viewBox=\"0 0 11.945 9.102\">\n" +
                "  <g id=\"Group_12832\" data-name=\"Group 12832\" transform=\"translate(11.445 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M7.688,0,3.844,3.844,0,0\" transform=\"translate(0 7.101)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_22\" data-name=\"Line 22\" y1=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n", "\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.944\" height=\"9.102\" viewBox=\"0 0 11.944 9.102\">\n" +
                "  <g id=\"Group_12831\" data-name=\"Group 12831\" transform=\"translate(11.444 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M0,3.844,3.844,0,7.688,3.844\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_21\" data-name=\"Line 21\" y2=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n"
            ],
        },
        576: {
            items: 3,
            margin: 20,
            stagePadding: 70,
        },
        768: {
            items: 3,
            margin: 20,
            stagePadding: 130,
        },
        992: {
            items: 3,
            margin: 30,
            stagePadding: 210,
        },
        1200: {
            items: 4,
            margin: 30,
            stagePadding: 160,
        },
        1360: {
            items: 4,
            stagePadding: 180,
        },
        1440: {
            items: 4,
            stagePadding: 190,
        },
        1531: {
            items: 4,
            stagePadding: 200,
        },
        1600: {
            items: 4,
            stagePadding: 250,
        }
    }
})

$('.bottom_slider .owl-carousel').owlCarousel({
    loop: false,
    margin: 38,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 20,
            stagePadding: 40,
            dots: true,
            navText: ["\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.945\" height=\"9.102\" viewBox=\"0 0 11.945 9.102\">\n" +
                "  <g id=\"Group_12832\" data-name=\"Group 12832\" transform=\"translate(11.445 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M7.688,0,3.844,3.844,0,0\" transform=\"translate(0 7.101)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_22\" data-name=\"Line 22\" y1=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n", "\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.944\" height=\"9.102\" viewBox=\"0 0 11.944 9.102\">\n" +
                "  <g id=\"Group_12831\" data-name=\"Group 12831\" transform=\"translate(11.444 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M0,3.844,3.844,0,7.688,3.844\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_21\" data-name=\"Line 21\" y2=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n"
            ],
        },
        576: {
            items: 2,
            margin: 20,
            stagePadding: 40,
        },
        768: {
            items: 2,
            margin: 20,
            stagePadding: 40,
        },
        992: {
            items: 3,
            margin: 30,
            stagePadding: 60,
        },
        1000: {
            items: 3,
            stagePadding: 70,
        }
    }
})

// ----------------------------------- News Page Slider --------------------------------//
function news_slider_owl() {
    var checkWidth = $(window).width(); 
    var owlPost = $(".news_slider_owl");
    if (checkWidth >= 992) {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy(); 
        }
        owlPost.removeClass('owl-carousel owl-theme'); 
    } else if (checkWidth <= 991) {
        owlPost.addClass('owl-carousel owl-theme');
        owlPost.owlCarousel({
            loop: false,
            margin: 0,
            dots: true,
            nav: true,
            autoHeight: true,
            navText: ["\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.945\" height=\"9.102\" viewBox=\"0 0 11.945 9.102\">\n" +
                "  <g id=\"Group_12832\" data-name=\"Group 12832\" transform=\"translate(11.445 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M7.688,0,3.844,3.844,0,0\" transform=\"translate(0 7.101)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_22\" data-name=\"Line 22\" y1=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n", "\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.944\" height=\"9.102\" viewBox=\"0 0 11.944 9.102\">\n" +
                "  <g id=\"Group_12831\" data-name=\"Group 12831\" transform=\"translate(11.444 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M0,3.844,3.844,0,7.688,3.844\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_21\" data-name=\"Line 21\" y2=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n"
            ],
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: true
                },
                576: {
                    items: 1,
                    dots: true
                },
                768: {
                    items: 2,
                    dots: false,
                    margin: 30
                },
            }
        });
    }
}
// ----------------------------------- Service Page Slider --------------------------------//
function service_slider_owl() {
    var checkWidth = $(window).width(); 
    var owlPost = $(".service_slider_owl"); 
    if (checkWidth >= 768) {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy(); 
        }
        owlPost.removeClass('owl-carousel owl-theme'); 
    } else if (checkWidth <= 767) {
        owlPost.addClass('owl-carousel owl-theme');
        owlPost.owlCarousel({
            loop: false,
            margin: 0,
            dots: true,
            nav: true,
            autoHeight: true,
            navText: ["\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.945\" height=\"9.102\" viewBox=\"0 0 11.945 9.102\">\n" +
                "  <g id=\"Group_12832\" data-name=\"Group 12832\" transform=\"translate(11.445 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_13\" data-name=\"Path 13\" d=\"M7.688,0,3.844,3.844,0,0\" transform=\"translate(0 7.101)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_22\" data-name=\"Line 22\" y1=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n", "\n" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11.944\" height=\"9.102\" viewBox=\"0 0 11.944 9.102\">\n" +
                "  <g id=\"Group_12831\" data-name=\"Group 12831\" transform=\"translate(11.444 0.707) rotate(90)\">\n" +
                "    <path id=\"Path_12\" data-name=\"Path 12\" d=\"M0,3.844,3.844,0,7.688,3.844\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "    <line id=\"Line_21\" data-name=\"Line 21\" y2=\"10.944\" transform=\"translate(3.844)\" fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\"/>\n" +
                "  </g>\n" +
                "</svg>\n"
            ],
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: true
                },
                576: {
                    items: 1,
                    dots: true
                },
                768: {
                    items: 1,
                    dots: false,
                    margin: 30
                },
            }
        });
    }
}

