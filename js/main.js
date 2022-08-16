$(document).ready(function () {
    $('.nav-icon').click(function() {
        $('.mobile-nav').addClass('hide')
    })
    $('.close-btn').click(function() {
        $('.mobile-nav').removeClass('hide')
    })

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.header').addClass('sticky');
        }
        else {
            $('.header').removeClass('sticky');
        }
    })
});

AOS.init();
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(e) {
var data_id = $(this).attr('href');
$('html, body').animate({
  scrollTop: $(data_id).offset().top
}, '500');
});