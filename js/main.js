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
        nav_open = $nav.is(':visible'),
        nav_height = $nav.height(); 

        nav_open ? closeNav() : openNav();

        function closeNav(){
            $nav.animate({'bottom':0}, 250, function(){$(this).hide(); });//TODO add callback to hide
        }
        function openNav(){
            $nav.show().animate({'bottom':nav_height * -1}, 250);        
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
        slidesPerView: 2, mode:'horizontal', loop: true, calculateHeight: true, watchActiveIndex: true 
    });
    var nineEyeSwiper = $('#nine-eye-swipe .swiper-container').swiper({
        slidesPerView: 2, mode:'horizontal', loop: true, calculateHeight: true 
    });
    var pullOnSwiper = $('#pull-on-swipe .swiper-container').swiper({
        slidesPerView: 2, mode:'horizontal', loop: true, calculateHeight: true 
    });


    $('#nine-eye-swipe .arrow-left').on('click',  function(){ nineEyeSwiper.swipeTo(nineEyeSwiper.activeLoopIndex-1); } );
    $('#nine-eye-swipe .arrow-right').on('click', function(){ nineEyeSwiper.swipeTo(nineEyeSwiper.activeLoopIndex+1); } );
    $('#chukka-swipe .arrow-left').on('click',  function(){ chukkaSwiper.swipeTo(chukkaSwiper.activeLoopIndex-1); } );
    $('#chukka-swipe .arrow-right').on('click',  function(){ chukkaSwiper.swipeTo(chukkaSwiper.activeLoopIndex+1); } );
    $('#pull-on-swipe .arrow-left').on('click',  function(){ pullOnSwiper.swipeTo(pullOnSwiper.activeLoopIndex-1); } );
    $('#pull-on-swipe .arrow-right').on('click',  function(){ pullOnSwiper.swipeTo(pullOnSwiper.activeLoopIndex+1); } );

    //END SLIDERS
    
});
