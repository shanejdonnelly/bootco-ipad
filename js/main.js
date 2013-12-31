$(document).ready(function(){
    //make height of boot title text equal to image height
    var $container = $('.boot-title');
    $container.imagesLoaded().always( sizeBootTitle);

    $(window).on('resize', sizeBootTitle);

    function sizeBootTitle(){
        var $titles = $('.boot-title');
        $titles.each(function(){
            var img_height = $(this).find('.span23').height();
            $(this).find('.span13').height(img_height); 
        });
    }
    
    var swiper_width = $('.swiper-container').first().width();

    $('.swiper-slide').width(swiper_width * 0.5);
    
    var mySwiper = $('.swiper-container').swiper({
        //Your options here:
        slidesPerView: 2,
        mode:'horizontal',
        loop: true,
        calculateHeight: true
    
    });
});
