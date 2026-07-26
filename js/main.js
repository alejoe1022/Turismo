(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

const popup = document.getElementById("mensajeEnviado");
const cerrarPopup = document.getElementById("cerrarPopup");

document.querySelectorAll(".contact-btn").forEach(btn=>{

    btn.addEventListener("click",function(e){

        e.preventDefault();

        popup.classList.add("active");

    });

});

cerrarPopup.addEventListener("click",()=>{

    popup.classList.remove("active");

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("active");

    }

});


