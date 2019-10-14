
$(document).ready(function(){
    let isMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
    }
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 25 && $(document).width() > 991) {
            $("#mynav").css("background" , "linear-gradient(#1af0de 0%, #017ab1 100%)");
            $('#logo').attr('src', './assets/logowhite.png');
        }
        else {
            $("#mynav").css("background" , "transparent");
            $('#logo').attr('src', './assets/logoblue.png');
        }
    });

});

// Side Menu
var tempScroll;
$(".side-menu").addClass("d-none");
$(".side-menu-overlay")
    .fadeOut()
    .on("click", function () {
        $(".side-menu")
            .removeClass("slide-in")
            .addClass("slide-out");
        $(".side-menu-overlay").fadeOut();
        $("body").removeClass("position-fixed");
        $(window).scrollTop(tempScroll);
    });
$(".close-side-menu")
    .on("click", function () {
        $(".side-menu-overlay").click();
    });
$(".menu-collapse")
    .on("click", function () {
        tempScroll = 0;
        $(".side-menu")
            .removeClass("slide-out d-none")
            .addClass("slide-in");
        $(".side-menu-overlay")
            .fadeIn(function () {
                $("body").addClass("position-fixed");
            });
    });

// Services Animation

$('#webdev').on('click', () => {
    $('#webdev').addClass('selected');
    $('#mobile').removeClass('selected');
    $('#devops').removeClass('selected');
    $('#fullstack').removeClass('selected');
    $('#devops-icon').attr('src', './assets/assets/services/devopsblack.png');
    $('#webdev-icon').attr('src', './assets/assets/services/webwhite.png');
    $('#mobile-icon').attr('src', './assets/assets/services/mobileblack.png');
    $('#fullstack-icon').attr('src', './assets/assets/services/fullstackblack.png');
});
$('#mobile').on('click', () => {
    $('#mobile').addClass('selected');
    $('#webdev').removeClass('selected');
    $('#devops').removeClass('selected');
    $('#fullstack').removeClass('selected');
    $('#devops-icon').attr('src', './assets/assets/services/devopsblack.png');
    $('#webdev-icon').attr('src', './assets/assets/services/webblack.png');
    $('#mobile-icon').attr('src', './assets/assets/services/mobilewhite.png');
    $('#fullstack-icon').attr('src', './assets/assets/services/fullstackblack.png');
});
$('#devops').on('click', () => {
    $('#devops').addClass('selected');
    $('#mobile').removeClass('selected');
    $('#webdev').removeClass('selected');
    $('#fullstack').removeClass('selected');
    $('#devops-icon').attr('src', './assets/assets/services/devopswhite.png');
    $('#webdev-icon').attr('src', './assets/assets/services/webblack.png');
    $('#mobile-icon').attr('src', './assets/assets/services/mobileblack.png');
    $('#fullstack-icon').attr('src', './assets/assets/services/fullstackblack.png');
});
$('#fullstack').on('click', () => {
    $('#fullstack').addClass('selected');
    $('#mobile').removeClass('selected');
    $('#devops').removeClass('selected');
    $('#webdev').removeClass('selected');
    $('#devops-icon').attr('src', './assets/assets/services/devopsblack.png');
    $('#webdev-icon').attr('src', './assets/assets/services/webblack.png');
    $('#mobile-icon').attr('src', './assets/assets/services/mobileblack.png');
    $('#fullstack-icon').attr('src', './assets/assets/services/fullstackwhite.png');
});