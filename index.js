
$(document).ready(function(){
    let isMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
    }
    if (isMobile) {
        console.log(isMobile);
        $('#servicesCarousel').carousel({
            interval: 3000
        });
    } else {
        console.log(isMobile);
        $('#servicesCarousel').carousel({
            interval: false
        });
    }
    const scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll > 25 && $(document).width() > 991) {
        $("#mynav").css('background' , "linear-gradient(#1af0de 0%, #017ab1 100%)");
        $('#logo').attr('src', './assets/logowhite.png');
        $('#logo').css('height', '60px');
    }
    else {
        $("#mynav").css("background" , "transparent");
        $('#logo').attr('src', './assets/logoblack.png');
        $('#logo').css('height', '70px');
    }
    $(window).scroll(function(){
        const scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 25 && $(document).width() > 991) {
            $("#mynav").css("background" , "linear-gradient(#1af0de 0%, #017ab1 100%)");
            $('#logo').attr('src', './assets/logowhite.png');
            $('#logo').css('height', '60px');
        }
        else {
            $("#mynav").css("background" , "transparent");
            $('#logo').attr('src', './assets/logoblack.png');
            $('#logo').css('height', '70px');
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
const awsService = $('#service-aws');
const devOpsService = $('#service-devops');
const fulStack = $('#service-fullstack');
const mobileService = $('#service-mobile');
let currentService = awsService;
$('#aws-coontroller').on('click', () => {
    $('#aws-coontroller').addClass('selected');
    $('#mobile').removeClass('selected');
    $('#devops').removeClass('selected');
    $('#fullstack').removeClass('selected');
    $('#devops-icon').attr('src', './assets/services/devopsblack.png');
    $('#aws-coontroller-icon').attr('src', './assets/services/webwhite.png');
    $('#mobile-icon').attr('src', './assets/services/mobileblack.png');
    $('#fullstack-icon').attr('src', './assets/services/fullstackblack.png');
    changeSelectedService(awsService);
});
$('#mobile').on('click', () => {
    $('#mobile').addClass('selected');
    $('#aws-coontroller').removeClass('selected');
    $('#devops').removeClass('selected');
    $('#fullstack').removeClass('selected');
    $('#devops-icon').attr('src', './assets/services/devopsblack.png');
    $('#aws-coontroller-icon').attr('src', './assets/services/webblack.png');
    $('#mobile-icon').attr('src', './assets/services/mobilewhite.png');
    $('#fullstack-icon').attr('src', './assets/services/fullstackblack.png');
    changeSelectedService(mobileService);
});
$('#devops').on('click', () => {
    $('#devops').addClass('selected');
    $('#mobile').removeClass('selected');
    $('#aws-coontroller').removeClass('selected');
    $('#fullstack').removeClass('selected');
    $('#devops-icon').attr('src', './assets/services/devopswhite.png');
    $('#aws-coontroller-icon').attr('src', './assets/services/webblack.png');
    $('#mobile-icon').attr('src', './assets/services/mobileblack.png');
    $('#fullstack-icon').attr('src', './assets/services/fullstackblack.png');
    changeSelectedService(devOpsService);
});
$('#fullstack').on('click', () => {
    $('#fullstack').addClass('selected');
    $('#mobile').removeClass('selected');
    $('#devops').removeClass('selected');
    $('#aws-coontroller').removeClass('selected');
    $('#devops-icon').attr('src', './assets/services/devopsblack.png');
    $('#aws-coontroller-icon').attr('src', './assets/services/webblack.png');
    $('#mobile-icon').attr('src', './assets/services/mobileblack.png');
    $('#fullstack-icon').attr('src', './assets/services/fullstackwhite.png');
    changeSelectedService(fulStack);
});

function changeSelectedService(selected) {
    currentService.fadeOut(250, () => {
        selected.fadeIn(250);
        currentService = selected;
    });
}

// CAROUSEL
$('#recipeCarousel').carousel({
    interval: false
});
$('.multi-item-carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});