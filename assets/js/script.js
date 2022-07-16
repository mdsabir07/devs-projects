(function($){
    "use strict";
    // Hero slider
    $(".msitheme-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000
    });

    // Tab image slider
    $(".tab-image-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 2000
    });
    // Everest page hero slider
    $(".everest-hero-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
    });

    // Filtering
    $('.list').click(function() {
        const value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.itemBx').show('1000');
        } else {
            $('.itemBx').not('.'+value).hide('1000');
            $('.itemBx').filter('.'+value).show('1000');
        }
    })

    $('.list').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

    // Filter slider
    $(".msitheme-filter").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    // Scroll to top
    (function($, window, document) {
        $.fn.goTop = function(options) {
            var defaults = {
                scrollTop: 100,
                scrollSpeed: 1000,
                fadeInSpeed: 1000,
                fadeOutSpeed: 500
            };

            var options = $.extend(defaults, options);
            var $this = $(this);
            $(window).on('scroll', function() {
                if($(window).scrollTop() > options.scrollTop) {
                    $this.fadeIn(options.fadeInSpeed);
                } else {
                    $this.fadeOut(options.fadeOutSpeed);
                }
            })
            $this.on('click', function() {
                $('html,body').animate({
                    'scrollTop':0
                }, options.speed)
            })
        }
    })(jQuery, window, document)

    $('#go-top').goTop({
        scrollTop: 100,
        scrollSpeed: 1000,
        fadeInSpeed: 1000,
        fadeOutSpeed: 500
    })

    // Button script
    const btn = document.querySelector('.msitheme-btn');
    btn.onmousemove = function(e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    }

    // lightbox gallery
    $(document).ready(function() {
        $('.lightbox-galleries').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Ford cars</small>';
                }
            }
        });
    });
 
})(jQuery);