(function($) {
    "use strict"; // Start of use strict

    // Animated header with Waypoints and Animate CSS
    $(window).on('load', function() {
        $('.waypoint-head').waypoint(function(direct) {
            $('.waypoint-head').addClass('animated slideInDown');
        }, {
            offset: 0
        });
        // Hero h1 heading animation
        $('.waypoint-1a').waypoint(function(direct) {
            $('.waypoint-1a').addClass('animated fadeInLeftBig');
        }, {
            offset: 9999
        });

        $('.waypoint-1b').waypoint(function(direct) {
            $('.waypoint-1b').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

        // Hero scroll button animation
        $('.waypoint-2').waypoint(function(direct) {
            $('.waypoint-2').addClass('animated fadeInUp');
        }, {
            offset: '100%'
        });

        //My projects
        $('.waypoint-3').waypoint(function(direct) {
            $('.waypoint-3').addClass('animated fadeIn');
        }, {
            offset: '80%'
        });
    });

    // Bio section expand animation
    $('details').on('click', 'summary', function() {
        $('.waypoint-4').waypoint(function(direct) {
            $('.waypoint-4').addClass('animated fadeInRightBig');
        });
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            }
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-pic', {
        duration: 800,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-icons', {
        duration: 1200,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

})(jQuery); // End of use strict
