$(function(){
 $('.layer1').plaxmove({ratioH:0.09,ratioV:0.05})
 $('.layer2').plaxmove({ratioH:0.03,ratioV:0.05})
 $('.layer3').plaxmove({ratioH:0.01,ratioV:0.03})
 $('.layer4').plaxmove({ratioH:0.03,ratioV:0.04})
 $('.layer5').plaxmove({ratioH:0.04,ratioV:0.03})
 $('.layer6').plaxmove({ratioH:0,ratioV:0.05})
 $('.layer7').plaxmove({ratioH:0.05,ratioV:0.04})
 $('.layer8').plaxmove({ratioH:0.04,ratioV:0.05})
 $('.layer9').plaxmove({ratioH:0.03,ratioV:0.06})
});


//Flipper

function flip() {
    $('.card').toggleClass('flipped');
};


//Spinner 
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(700).fadeOut('slow');

// Flip it 

$(document).ready(function(){
    $(".login__link").on('click', function(){
        document.querySelector(".login__link").classList.toggle("flip")
    });
});