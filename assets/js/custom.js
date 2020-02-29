/*-----------------------------------------------------------
* Template Name    : Tam - Creative Portfolio Template
* Author           : beingeorge
* Version          : 1.0
* Created          : Feb 2020
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }

  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  var date;

  if (_typeof(time) === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }

    date = new Date(time);
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  return format.replace(/{([ymdhisa])+}/g, function (result, key) {
    var value = formatObj[key]; // Note: getDay() returns 0 on Sunday

    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }

    return value.toString().padStart(2, '0');
  });
}
! function ($) {
    "use strict";

    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function () {
        $('#preloader').addClass("loaded");
    });

    /* ---------------------------------------------- /*
    * Section Scroll - Navbar
    /* ---------------------------------------------- */

    // $('.navbar-nav a').on('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top - 0
    //     }, 1500, 'easeInOutExpo');

    //     if($('.navbar').hasClass('active')){
    //         $('.navbar').removeClass('active')
    //         $('.ham').removeClass('active')
    //     }

    //     event.preventDefault();
    // });

    $('.navbar-toggler').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        });
        $("body").toggleClass('aside-open');
        $(".ham").toggleClass('active');
        $('.search-wrapper').removeClass('search-wrapper-look')
        $("body, html").toggleClass('overflow-hidden');
    });
    /* ---------------------------------------------- /*
    * search - onclick
    /* ---------------------------------------------- */
    $('#search-toggler').on('click', function () {
        $('.search-wrapper').toggleClass('search-wrapper-look')
        return false
    })
    $('.click-search-close').on('click', function () {
        $('.search-wrapper').removeClass('search-wrapper-look')
        return false
    })
    /* ---------------------------------------------- /*
    * Scroll Spy - init
    /* ---------------------------------------------- */

    $("#navbarCollapse").scrollspy({
        offset: 20
    });

    /* ---------------------------------------------- /*
    * Magnific Popup - Init
    /* ---------------------------------------------- */
    //$('.kg-image').magnificPopup({type:'image'});

    /* ---------------------------------------------- /*
    * Swipper - Init
    /* ---------------------------------------------- */

    // Testimony init

    var swipertest = new Swiper('.swiper-testimony', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    /* ---------------------------------------------- /*
    * AnimateOnScroll - Init
    /* ---------------------------------------------- */

    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

    /* ---------------------------------------------- /*
    * Initialize shuffle plugin
    /* ---------------------------------------------- */

    var $portfolioContainer = $('.list-items-container');

    $('#filter li').on('click', function (e) {
        e.preventDefault();

        $('#filter li').removeClass('active');
        $(this).addClass('active');

        var group = $(this).attr('data-group');
        var groupName = $(this).attr('data-group');

        $portfolioContainer.shuffle('shuffle', groupName);
    });


    /* ---------------------------------------------- /*
    * Parallax - Init
    /* ---------------------------------------------- */

    $(".js-height-full").height($(window).height());

    $(window).resize(function () {
        $(".js-height-full").height($(window).height());
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('#home').css({ 'background-attachment': 'scroll' });
    } else {
        $('#home').parallax('50%', -0.3);
    }

    if ($('.section-home').length) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('.swiper-slide').css({ 'background-attachment': 'scroll' });
        } else {
            $('.swiper-slide').parallax('50%', -0.3);
        }
    }


}(window.jQuery);

