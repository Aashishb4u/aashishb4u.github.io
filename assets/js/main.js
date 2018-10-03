"use strict";


jQuery(document).ready(function ($) {

    jQuery(window).load(function () {
        jQuery(".loaded").fadeOut();
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    jQuery('.navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

//    jQuery(".main-nav").localScroll();

    $('.body').scrollSpy();

//    $('.button-collapse').sideNav({
//        menuWidth: 250, // Default is 240
//        edge: 'right', // Choose the horizontal origin
//        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
//    }
//    );

    jQuery(".dropdown-button").dropdown({
        inDuration: 300,
        outDuration: 255,
        constrain_width: false,
        hover: true,
        gutter: 0,
        belowOrigin: false,
        alignment: 'right'
    });


// carousel Testimonial slider    
    //   $('.carousel').carousel();

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $('').localScroll();

    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.test_slider').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });


// scroll Up

    jQuery(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    jQuery('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });


    jQuery('.gallery-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

//    jQuery('.gallery-video').magnificPopup({
//        type: 'iframe',
//    });


    /*---------------------------------------------*
     * Menu Section
     ---------------------------------------------*/

    $('.cd-menu-trigger').on('click', function (event) {
    //     console.log(event,'eventevent');
    //     event.preventDefault();
        $('.home-main-content').addClass('move-out');
        $('#main-nav').addClass('is-visible');
        $('.cd-shadow-layer').addClass('is-visible');
    });

    // $('cd-menu-trigger').toggle(function () {
    //     $("#user_button").addClass("active");
    // }, function () {
    //     $("cd-menu-trigger").removeClass("active");
    // });
    //close menu
    $('.cd-close-menu').on('click', function (event) {
        console.log('HERE');
        event.preventDefault();
        $('.home-main-content').removeClass('move-out');
        $('.main_figur').css({"width":"100%"});
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
    });

    //clipped image - blur effect
    set_clip_property();
    $(window).on('resize', function () {
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.cd-header').height(),
                $window_height = $(window).height(),
                $header_top = $window_height - $header_height,
                $window_width = $(window).width();
        $('.cd-blurred-bg').css('clip', 'rect(' + $header_top + 'px, ' + $window_width + 'px, ' + $window_height + 'px, 0px)');
    }
    $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
        $('body,html').animate(
                {'scrollTop': target.offset().top},
                900
                );
    });


// scrolldown icon
$('.scrolldown a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


    var onImageChange = function(){
        console.log('hey')
    };

    var urls = ['homebg.jpg', 'makeup_brush.jpg', 'sandhyadeep_one.jpg'];

    var cout = 1;
    $('#home').css('background-image', 'url("' + urls[0] + '")');
    setInterval(function() {
        $('#home').css('background-image', 'url("assets/images/' + urls[cout] + '")');
        cout == urls.length-1 ? cout = 0 : cout++;
    }, 5000);

    // $(function(){
    //     onImageChange();
    // }, 5000);

    //End
});




jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("header").addClass("small");
        $(".cd-menu-trigger span").addClass("onScrollBurger");
    } else {
        $("header").removeClass("small");
        $(".cd-menu-trigger span").removeClass("onScrollBurger");

    }
});

jQuery(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

