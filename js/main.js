$(document).ready(function(){
    
 //jquery easing 
(function(){var e={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}});$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11){}return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}});$.each(e,function(e,t){$.easing["easeIn"+e]=t;$.easing["easeOut"+e]=function(e){return 1-t(1-e)};$.easing["easeInOut"+e]=function(e){return e<.5?t(e*2)/2:1-t(e*-2+2)/2}})})()
                                                                                                                                     
    //make height of boot title text equal to image height
    var $container = $('.boot-title');
    $container.imagesLoaded().always( init);

    /*
    *
    * EVENTS
    *
    */
    $(window).on('resize', init);
    $('body').on('click', function(){ 
       if($('nav-drop-down').is(':visible')){ toggleNav(); } 
    });
    $('#nav-icon').on('click', toggleNav);

    function init(){
        sizeBootTitle();
        sizeVideo();
    }

    function sizeBootTitle(){
        var $titles = $('.boot-title');
        $titles.each(function(){
            var img_height = $(this).find('.span23').height();
            $(this).find('.span13').height(img_height); 
        });
    }

    function sizeVideo(){
        var 
        $vid = $('.home video'),
        win_width = $(window).width(), 
        ratio = 462/1024;

        $vid.height(win_width * ratio);
console.log(win_width*ratio);
     }

    /*
    *
    * Drop down nav
    *
    */
    function toggleNav(){
        var 
        $nav = $('#nav-drop-down'), 
        nav_open = $nav.is(':visible'),
        nav_height = $nav.height(); 

        nav_open ? closeNav() : openNav();

        function closeNav(){
            $nav.animate({'bottom':0}, 350, 'easeOutExpo',  function(){$(this).hide(); });
        }
        function openNav(){
            $nav.show().animate({'bottom':nav_height * -1}, 350, 'easeOutQuad' );        
        }
    }
    
    /*
    *
    * BOOT SLIDERS
    *
    */
    
    //size the swiper area for two slides - making sure it is responsive to window size
    var swiper_width = $('.swiper-container').first().width();
    $('.swiper-slide').width(swiper_width * 0.5);


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
