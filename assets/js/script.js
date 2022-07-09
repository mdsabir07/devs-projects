(function($){
    "use strict";
    // Hero slider
    $(".msitheme-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
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
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: false,
        autoplaySpeed: 2000
    });

})(jQuery);