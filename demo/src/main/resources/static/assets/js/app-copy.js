var THEMEIM = THEMEIM || {};

(function($) {

  /*!----------------------------------------------
      # This beautiful code written with heart
      # by Mominul Islam <me@mominul.me>
      # In Dhaka, BD at the ThemeIm workstation.
      ---------------------------------------------*/

  // USE STRICT
  "use strict";

  THEMEIM.initialize = {

    init: function() {
      THEMEIM.initialize.general();
      THEMEIM.initialize.mobileMenu();
      THEMEIM.initialize.sectionBackground();
      THEMEIM.initialize.sectionSwitch();
      THEMEIM.initialize.countUp();
      THEMEIM.initialize.countDown();
    },

    /*========================================================*/
    /*=           Collection of snippet and tweaks           =*/
    /*========================================================*/

    general: function() {
      $(window).load(function() {
        $("#preloader").delay(350).fadeOut("slow");
      });

      $('.swiper-container').each(function() {
        new SwiperRunner($(this));
      });

      // new WOW().init();

      $('.video-play-btn, .popup-btn-two, .pop-up, .popup-btn-three').magnificPopup({
        type: 'iframe'
      });

      /* Video Open */
      $('.youtube-wrapper').on('click', function(event) {
        event.preventDefault();
        var fr = $(this).find('iframe');
        var fadr = $(this).find('iframe').attr('src');
        var fuadr = fadr + '?autoplay=1';

        $(this).addClass('reveal');
        fr.attr('src', fuadr);
        console.log(fadr);
      });

      /* Video Thumb Nav Carousel */
      var obj = new SwiperRunner('.gallery-top');
      // The setNav method will make link to main carousel.
      obj.setNav('.gallery-thumbs');

      /* Fire Effect */
      $('.fire-nav-prev , .fire-nav-next').fire({
        speed: 20,
        maxPow: 5,
        gravity: 0,
        flameWidth: 3,
        flameHeight: 0,
        fadingFlameSpeed: 8,
        globalTransparency: 5,
        fireTransparency: 80,
        mouseEffect: true
      });

      $('#fire-bg').fire({
        speed: 20,
        maxPow: 5,
        gravity: 0,
        flameWidth: 1,
        flameHeight: 0,
        fadingFlameSpeed: 8,
        globalTransparency: 5,
        fireTransparency: 80,
        mouseEffect: false,
        width: 490,
        height: 50
      });

      $('.footer-fire').fire({
        speed: 30,
        maxPow: 6,
        gravity: 0,
        flameWidth: 2,
        flameHeight: 1,
        fadingFlameSpeed: 8,
        globalTransparency: 5,
        fireTransparency: 80,
        mouseEffect: false,
        // width: 1900,
        height: 400
      });

      $('.vs-fire, .return-to-top').fire({
        speed: 20,
        maxPow: 6,
        gravity: 0,
        flameWidth: 1,
        flameHeight: 0,
        fadingFlameSpeed: 8,
        globalTransparency: 5,
        fireTransparency: 80,
        mouseEffect: false,
        width: 50,
        height: 50
      });

      $('.sea-fire').fire({
        speed: 20,
        maxPow: 6,
        gravity: 0,
        flameWidth: 1,
        flameHeight: 0,
        fadingFlameSpeed: 8,
        globalTransparency: 5,
        fireTransparency: 100,
        mouseEffect: false,
        width: 402,
        height: 40
      });


      /* Magnefic Popup */
      $('.popup-image').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
          enabled: true,
          duration: 300,
          easing: 'ease-in-out',

          opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });


      var $panelgroup = $('.panel-group');
      $panelgroup.find('.panel-default:has(".show")').addClass('panel-active');
      $panelgroup.on('shown.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').addClass(' panel-active');
      }).on('hidden.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').removeClass(' panel-active');
      });

      /* Product Filter */
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [20, 300],
        slide: function(event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
      });

      $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

      $('.search-btn').on('click', function() {
        $('.top-search-form').toggleClass('active');
      });

      /*  Header Text */
      $(function() {
        $('.header-text').animatedHeadline({
          animationType: 'slide'
        });
      })

      /* Menu tab */
      $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

      $('.tab ul.tabs li a').hover(function(g) {
        var tab = $(this).closest('.tab'),
          index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        g.preventDefault();
      });

      /*  Active Menu */
      $('.tim-nav li > a').each(function() {
        if ($(this).attr('href') == location.href.split("/").slice(-1)) {
          $(this).addClass('current_page');
        }
      });

      /* 404 Page Ripples Effect */

      /* Banner Static */
      if (typeof $.fn.ripples == 'function') {
        try {
          $('#error-page').ripples({
            resolution: 500,
            perturbance: 0.04
          });
        } catch (e) {
          $('.error').show().text(e);
        }
      }
    },

    /*==================================*/
    /*=           Mobile Menu          =*/
    /*==================================*/

    mobileMenu: function() {

      var Accordion = function(el, multiple) {
        this.el = el || {};

        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
            el: this.el,
            multiple: this.multiple
          },
          this.dropdown);
      };

      Accordion.prototype.dropdown = function(e) {
        e.preventDefault();
        var $el = e.data.el,
          $this = $(this),

          $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
          //show only one menu at the same time
          $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
      }

      var accordion = new Accordion($('.accordion-menu'), false);

      $('.toggle-inner').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        $('body').toggleClass('active');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay, .close-menu').on('click', function() {
          $('body').removeClass('active');
          $('.mask-overlay').remove();
        });
      });
    },

    /*==========================================*/
    /*=           Section Background           =*/
    /*==========================================*/

    sectionBackground: function() {

      // Section Background Image
      $('[data-bg-image]').each(function() {
        var img = $(this).data('bg-image');
        $(this).css({
          backgroundImage: 'url(' + img + ')',
        });
      });

      //Parallax Background
      $('[data-parallax="image"]').each(function() {

        var actualHeight = $(this).position().top;
        var speed = $(this).data('parallax-speed');
        var reSize = actualHeight - $(window).scrollTop();
        var makeParallax = -(reSize / 2);
        var posValue = makeParallax + "px";

        $(this).css({
          backgroundPosition: '50% ' + posValue,
        });
      });
    },

    /*=========================================*/
    /*=           Section Background          =*/
    /*=========================================*/

    sectionSwitch: function() {
      $('[data-type="section-switch"], #menu-home li a, #banner-particales a, #banner-creative a, #banner-ripple a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length > 0) {

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    },

    /*==============================*/
    /*=           Countup          =*/
    /*==============================*/
    countUp: function() {
      var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      };

      var counteEl = $('[data-counter]');

      if (counteEl) {
        counteEl.each(function() {
          var val = $(this).data('counter');

          var countup = new CountUp(this, 0, val, 0, 2.5, options);
          $(this).appear(function() {
            countup.start();
          }, {
            accX: 0,
            accY: 0
          })
        });
      }
    },

    /*=================================*/
    /*=           Count Down          =*/
    /*=================================*/

    countDown: function() {
      $('.countdown').each(function(index, value) {
        var count_year = $(this).attr("data-count-year");
        var count_month = $(this).attr("data-count-month");
        var count_day = $(this).attr("data-count-day");
        var count_date = count_year + '/' + count_month + '/' + count_day;
        $(this).countdown(count_date, function(event) {
          $(this).html(
            event.strftime('<span class="CountdownContent">%D<span class="CountdownLabel"></span></span><span class="CountdownSeparator"></span><span class="CountdownContent">%H <span class="CountdownLabel"></span></span><span class="CountdownSeparator"></span><span class="CountdownContent">%M <span class="CountdownLabel"></span></span><span class="CountdownSeparator"></span><span class="CountdownContent">%S <span class="CountdownLabel"></span></span>')
          );
        });
      });
    },

  };

  THEMEIM.documentOnReady = {
    init: function() {
      THEMEIM.initialize.init();

    },
  };

  THEMEIM.documentOnLoad = {
    init: function() {
      $("#loader-wrapper").fadeOut("slow");
    },
  };

  THEMEIM.documentOnResize = {
    init: function() {

    },
  };

  THEMEIM.documentOnScroll = {
    init: function() {
      THEMEIM.initialize.sectionBackground();

      if ($(window).scrollTop() > 300) {
        $('.switch-top').addClass('back-top');
      } else {
        $('.switch-top').removeClass('back-top');
      }

      /* Header Sticky */
      /* Sticky Menu */
      if ($(this).scrollTop() > 150) {
        $('#header').addClass("fixed")
      } else {
        $('#header').removeClass("fixed")
      }

      /* Mobile Nav */
      if ($(window).scrollTop() > 54) {
        $('#mobile-nav-wrap,.mobile-menu-inner').addClass('mnav-fixed');
      } else {
        $('#mobile-nav-wrap, mobile-menu-inner').removeClass('mnav-fixed');
      }
    },
  };

  // Initialize Functions
  $(document).ready(THEMEIM.documentOnReady.init);
  $(window).on('load', THEMEIM.documentOnLoad.init);
  $(window).on('resize', THEMEIM.documentOnResize.init);
  $(window).on('scroll', THEMEIM.documentOnScroll.init);

})(jQuery);