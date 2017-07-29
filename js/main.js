function flip() {
    $('.card').toggleClass('flipped');
};




// Z-menu

$(document).ready(function(){
    $('.menu__hamburger-href').on('click', function(){
        $('.z-menu').toggle();
    });
});


//Spinner

    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(700).fadeOut('slow');

//Blog-menu

