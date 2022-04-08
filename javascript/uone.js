/*--------------------------------------------------------------
* Template Name    : UONE - Fully Responsive Personal Template
* Author           : Retrina Group
* Version          : 1.0.0
* Created          : November 2019
* File Description : Main css file of the template
--------------------------------------------------------------*/

// repeated variables
var $window = $(window);
var $root = $('html, body');


$(document).ready(function() {

    "use strict";
    colorScheme();
    singlePortfolioCarousel();
    smoothScroll();
    portfolioPopup();
    testimonialsCarousel();
    mapInit();
    backToTop();
    wow();

});

$window.on("load", (function() {
    $("#overlayer, .loader").delay(1000).fadeOut('slow');
}));
$window.on('scroll', function() {
    headerSticky();
    skills();
});


/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/
/*-------------------------
        Color Scheme
-------------------------*/
function colorScheme() {
    var $darkLogo = $('.dark-logo');
    $('.color-scheme').click(function() {
        $("body").toggleClass('uone-dark');
        $('.color-scheme').removeClass('d-none').addClass('d-inline-block');
        $(this).removeClass('d-inline-block').addClass('d-none');
    });
}

/*-------------------------
        SMOOTH SCROLL
-------------------------*/
function smoothScroll() {

    "use strict";

    $('.header .navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $root.stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutQuart');
        event.preventDefault();
        $(".navbar-collapse").collapse('hide');
    });
}

/*-------------------------
        HEADER STICKY
-------------------------*/
function headerSticky() {

    "use strict";

    if ($window.scrollTop() > 100) {
        $('#header').addClass('header-sticky');
    } else {
        $('#header').removeClass('header-sticky');
    }
}

/*-------------------------
          Skills
-------------------------*/
function skills() {

    "use strict";

    var scroll = $window.scrollTop();
    var skillsDiv = $('#skills');
    if (skillsDiv.length > 0) {
        var winH = $window.height(),
            skillsT = skillsDiv.offset().top;
        if (scroll + winH > skillsT) {
            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 6000);
            });
        }
    }

}

/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {

    "use strict";

    if (('.portfolio-sly-slider').length > 0) {
        $('.portfolio-sly-slider').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }
}

/*-------------------------------------
      Portfolio Slyslider
-------------------------------------*/

function slyslider() {

    "use strict";

    var $frame = $('#cycleitems');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        itemNav: 'centered',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 0,
        clickBar: 1,

        // Cycling
        cycleBy: 'items',
        cycleInterval: 5000,
        pauseOnHover: 1
    });
    $(window).resize(function() {
        $frame.sly('reload');
    });
}

/*-------------------------
     OWL CAROUSEL JS
-------------------------*/
function testimonialsCarousel() {

    "use strict";

    $(".testimonial .owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        autoplay: true,
        loop: true,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
    });
}

/*-------------------------
          GOOGLE Map
  -------------------------*/
function mapInit() {

    "use strict";
    if ($('#my-map').length) {
        var options = {
            center: new google.maps.LatLng(43.053454, -76.144508),
            zoom: 11,
            mapTypeControl: true,
            panControl: false,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
                position: google.maps.ControlPosition.TOP_LEFT
            },
            scaleControl: false,
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#576ee9"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#d5d5d5"
                }, {
                    "lightness": 21
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#f8f8f8"
                }, {
                    "lightness": 25
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#222222"
                }, {
                    "lightness": 30
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 10
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }],
        };
        var map = new google.maps.Map(document.getElementById('my-map'), options);
        var marker1 = new google.maps.Marker({
            position: map.getCenter(),
            title: "Retrina",
            icon: 'assets/img/location-map.png',
            animation: google.maps.Animation.BOUNCE
        });
        marker1.setMap(map);
    }
}

/*-------------------------
     AJAX CONTACT FORM
-------------------------*/
function validateEmail(email) {

    "use strict";

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function sendEmail() {

    "use strict";

    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var comments = $('#comments').val();

    if (!name) {
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Name is  required');
    } else if (!email) {
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is  required');
    } else if (!validateEmail(email)) {
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is not valid');
    } else if (!subject) {
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Subject is  required');
    } else if (!comments) {
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Comments is  required');
    } else {
        $.ajax({
            type: 'POST',
            data: $("#contactForm").serialize(),
            url: "sendEmail.php",
            beforeSend: function() {
                $('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> Loading..');
            },
            success: function(data) {
                $('#submit-btn').html('Submit');
                var myObj = JSON.parse(data);
                if (myObj['status'] == 'Congratulation') {
                    $('#message').toast('show').addClass('bg-success').removeClass('bg-danger bg-warning');
                    $('.toast-body').html('<strong>' + myObj['status'] + ' : </strong> ' + myObj['message']);
                } else if (myObj['status'] == 'Error') {
                    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                    $('.toast-body').html('<strong>' + myObj['status'] + ' : </strong> ' + myObj['message']);
                } else if (myObj['status'] == 'Warning') {
                    $('#message').toast('show').addClass('bg-warning').removeClass('bg-success bg-danger');
                    $('.toast-body').html('<strong>' + myObj['status'] + ' : </strong> ' + myObj['message']);
                }
            },
            error: function(xhr) {
                $('#submit-btn').html('Submit');
                $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                $('.toast-body').html('<strong> Error : </strong> Something went wrong, Please try again.');
            },
        });
    }
}

/*-------------------------
     Back to Top Button
  -------------------------*/
function backToTop() {
    $('.back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
    });
}

/* ------------------
      WOW Init
-------------------*/
function wow() {
    new WOW().init();
}

/*-------------------------------------
   SINGLE PORTFOLIO OWL CAROUSEL JS
-------------------------------------*/
function singlePortfolioCarousel() {

    "use strict";

    $("#related-portfolio .related-portfolio.owl-carousel").owlCarousel({
        nav: true,
        margin: 15,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });

    $("#single-portfolio .owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
    });

}