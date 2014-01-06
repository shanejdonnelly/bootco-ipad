$(document).ready(function(){
    //make height of boot title text equal to image height
    var $container = $('.boot-title');
    $container.imagesLoaded().always( sizeBootTitle);

    /*
    *
    * EVENTS
    *
    */
    $(window).on('resize', sizeBootTitle);
    $('#nav-icon').on('click', toggleNav);

    function sizeBootTitle(){
        var $titles = $('.boot-title');
        $titles.each(function(){
            var img_height = $(this).find('.span23').height();
            $(this).find('.span13').height(img_height); 
        });
    }

    function toggleNav(){
        var 
        $nav = $('#nav-drop-down'), 
        nav_open = $nav.is(':visible'); 

        nav_open ? closeNav() : openNav();

        function closeNav(){
            $nav.animate({'top':-50}, 500);//TODO add callback to hide
        }
        function openNav(){
            $nav.show().animate({'top':0}, 500);        
        }
    }
    
    var swiper_width = $('.swiper-container').first().width();

    $('.swiper-slide').width(swiper_width * 0.5);
    
    /*
    *
    * BOOT SLIDERS
    *
    */

    //TODO make more DRY
    var chukkaSwiper = $('#chukka-swipe .swiper-container').swiper({
        slidesPerView: 2, mode:'horizontal', loop: true, calculateHeight: true 
    });
    var nineEyeSwiper = $('#nine-eye-swipe .swiper-container').swiper({
        slidesPerView: 2, mode:'horizontal', loop: true, calculateHeight: true 
    });
    var pullOnSwiper = $('#pull-on-swipe .swiper-container').swiper({
        slidesPerView: 2, mode:'horizontal', loop: true, calculateHeight: true 
    });


    $('#nine-eye-swipe .arrow-left').on('click', nineEyeSwiper.swipePrev);
    $('#nine-eye-swipe .arrow-right').on('click', nineEyeSwiper.swipeNext);
    $('#chukka-swipe .arrow-left').on('click', chukkaSwiper.swipePrev);
    $('#chukka-swipe .arrow-right').on('click', chukkaSwiper.swipeNext);
    $('#pull-on-swipe .arrow-left').on('click', pullOnSwiper.swipePrev);
    $('#pull-on-swipe .arrow-right').on('click', pullOnSwiper.swipeNext);

    //END SLIDERS
    
});
