/*
  [JS Index]
  
  ---
  
  Template Name: Madex - Creative Photography Portfolio Template
  Author:  ex-nihilo
  Version: 1.2
*/


/*
  1. preloader
  2. show Timeout
    2.1. show fadeIn
    2.2. show borders
    2.3. show elements
  3. navigation
    3.1. page scroll
    3.2. highlight navigation
    3.3. close mobile menu
	3.4. highlight navigation
    3.5. collapse navigation
  4. animate elements
  5. animate home title, animate scroll indicator
  6. hide elements
  7. facts counter
  8. slick slider
    8.1. slick fullscreen slideshow
    8.2. slick featured news
  9. YouTube player
  10. enllax
  11. owl carousel
    11.1. testimonials carousel
  12. featured news MORE
    12.1. featured news MORE reset
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. show Timeout
        // 2.1. show fadeIn
        setTimeout(function() {
            $(".fadeIn-element").delay(1600).css({
                display: "none"
            }).fadeIn(1200);
        }, 0);
        // 2.2. show borders
        setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 800);
        setTimeout(function() {
            $(".border-bottom, .border-bottom-wave, #wave").removeClass("bottom-position");
        }, 800);
        setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 800);
        setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 800);
        // 2.3. show elements
        setTimeout(function() {
            $(".main-navigation").removeClass("top-position");
        }, 1200);
        setTimeout(function() {
            $(".bottom-credits, .social-icons-wrapper-share").removeClass("bottom-position");
        }, 1200);
    });
	
    // 3. navigation
    // 3.1. page scroll
    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 70
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
    // 3.2. highlight navigation
    $("body").scrollspy({
        target: ".navbar",
        offset: 75
    });
    // 3.3. close mobile menu
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
    // 3.4. highlight navigation
    $(".link-underline-menu").on("click", function() {
        $(".link-underline-menu").removeClass("active");
        $(this).addClass("active");
    });
	
    $(window).on("scroll", function() {
        // 3.5. collapse navigation
        if ($(".navbar").offset().top > 50) {
            $(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
        }
		
        // 4. animate elements
        if ($(this).scrollTop() > 400) {
            $(".border-top").addClass("top-position-primary");
            $(".border-bottom, .border-bottom-wave").addClass("bottom-position-primary");
            $(".border-bottom-wave").addClass("border-bottom-wave-secondary");
            $(".border-left").addClass("left-position-primary");
            $(".border-right").addClass("right-position-primary");
            $(".main-navigation-bg").addClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").addClass("navbar-collapse-position-primary");
            $(".logo").addClass("logo-home-call");
            $(".main-navigation").addClass("main-navigation-home-call");
            $(".bottom-credits").addClass("bottom-credits-home-call");
            $(".social-icons-wrapper-share").addClass("social-icons-wrapper-share-home-call");
            $(".to-top-arrow").addClass("show");
            $("#wave").addClass("wave-position-secondary");
        } else {
            $(".border-top").removeClass("top-position-primary");
            $(".border-bottom, .border-bottom-wave").removeClass("bottom-position-primary");
            $(".border-bottom-wave").removeClass("border-bottom-wave-secondary");
            $(".border-left").removeClass("left-position-primary");
            $(".border-right").removeClass("right-position-primary");
            $(".main-navigation-bg").removeClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").removeClass("navbar-collapse-position-primary");
            $(".logo").removeClass("logo-home-call");
            $(".main-navigation").removeClass("main-navigation-home-call");
            $(".bottom-credits").removeClass("bottom-credits-home-call");
            $(".social-icons-wrapper-share").removeClass("social-icons-wrapper-share-home-call");
            $(".to-top-arrow").removeClass("show");
            $("#wave").removeClass("wave-position-secondary");
        }
		
        // 5. animate home title, animate scroll indicator
        if ($(this).scrollTop() > 10) {
            $("h1.home-page-title").addClass("home-page-title-hide").removeClass("home-page-title-show");
            $(".scroll-indicator-wrapper").addClass("scroll-indicator-wrapper-position-secondary");
        } else {
            $("h1.home-page-title").removeClass("home-page-title-hide").addClass("home-page-title-show");
            $(".scroll-indicator-wrapper").removeClass("scroll-indicator-wrapper-position-secondary");
        }
		
        // 6. hide elements
        if ($(window).width() < 640) {
            var scrollTop = $(window).scrollTop();
            var height = $(window).height();
            $(".bottom-credits").css({
                "opacity": ((height - scrollTop) / height)
            });
        }
    });
	
    // 7. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 8. slick slider
    // 8.1. slick fullscreen slideshow
    $(".slick-fullscreen-slideshow").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    // 8.2. slick featured news
    $(".slick-left").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".slick-right",
        autoplay: false,
        autoplaySpeed: 3500,
        cssEase: "ease",
        speed: 500
    });
    $(".slick-right").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".slick-left",
        autoplay: false,
        autoplaySpeed: 3500,
        cssEase: "ease",
        speed: 500
    });
    $(".slick-bottom").slick({
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'ease',
        speed: 500,
        useCss: true,
        focusOnSelect: true,
        dots: true,
        responsive: [{
            breakpoint: 1500,
            settings: {
                centerMode: true,
                centerPadding: "0px",
                slidesToShow: 3
            }
        }]
    });
    $(".slick-left").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        var classname = "bar" + nextSlide;
        document.getElementById("bar").className = classname;
        $(".slick-bottom").slick("slickGoTo", nextSlide);
    });
    $(".slick-bottom").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        $(".slick-left, .slick-right").slick("slickGoTo", nextSlide);
    });
	
    // 9. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 10. enllax
    $(window).enllax();
	
    // 11. owl carousel
    // 11.1. testimonials carousel
    $(".testimonials-slideshow").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    });
	
	// 12. featured news MORE
    $(".button-the").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".news-closer, .page-scroll, .slick-bottom").on("click", function() {
        $(".panel-left, .panel-right").removeClass("open");
    });
	
	
});


// 12.1. featured news MORE reset
$(".button-the, .news-closer").on("click", function() {
    target = $(".news-reset");
    $("html, body").animate({
		scrollTop: target.offset().top - 70
		
    }, 500);
});