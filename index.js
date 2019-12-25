$(document).ready(function () {
    let isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    if (isMobile) {
        $('#servicesCarousel').carousel({
            interval: 3000
        });
    } else {
        $('#servicesCarousel').carousel({
            interval: false
        });
    }
    const scroll = $(window).scrollTop();
    if (scroll > 25 && $(document).width() > 991) {
        $("#mynav").css('background', "linear-gradient(#1af0de 0%, #017ab1 100%)");
        $('#logo').attr('src', './assets/logowhite.png');
        $('#logo').css('height', '60px');
    }
    else {
        $("#mynav").css("background", "transparent");
        $('#logo').attr('src', './assets/logoblack.png');
        $('#logo').css('height', '70px');
    }
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll > 25 && $(document).width() > 991) {
            $("#mynav").css("background", "linear-gradient(#1af0de 0%, #017ab1 100%)");
            $('#logo').attr('src', './assets/logowhite.png');
            $('#logo').css('height', '60px');
        }
        else {
            $("#mynav").css("background", "transparent");
            $('#logo').attr('src', './assets/logoblack.png');
            $('#logo').css('height', '70px');
        }
    });
    activateSmoothScroll();
    activateTechnologyScroller();
});

function activateTechnologyScroller() {
    const scroller = $('#scroller div.innerScrollArea');
    const scrollerContent = scroller.children('ul');
    scrollerContent.children().clone().appendTo(scrollerContent);
    let curX = 0;
    scrollerContent.children().each(function () {
        const $this = $(this);
        $this.css('left', curX);
        curX += $this.outerWidth(true);
    });
    const fullW = curX / 2;
    const viewportW = scroller.width();

    // Scrolling speed management
    const controller = {curSpeed: 0, fullSpeed: 2};
    const $controller = $(controller);
    const tweenToNewSpeed = function (newSpeed, duration) {
        if (duration === undefined)
            duration = 600;
        $controller.stop(true).animate({curSpeed: newSpeed}, duration);
    };

    // Pause on hover
    scroller.hover(function () {
        tweenToNewSpeed(0);
    }, function () {
        tweenToNewSpeed(controller.fullSpeed);
    });

    // Scrolling management; start the automatical scrolling
    const doScroll = function () {
        const curX = scroller.scrollLeft();
        let newX = curX + controller.curSpeed;
        if (newX > fullW * 2 - viewportW)
            newX -= fullW;
        scroller.scrollLeft(newX);
    };
    setInterval(doScroll, 20);
    tweenToNewSpeed(controller.fullSpeed);
}

function activateSmoothScroll() {
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            const hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 0, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)

            });
        } // End if
    });
}

// Side Menu
let tempScroll;
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
$(".list-group-item")
    .on("click", function () {
        const scrollToId = $('.list-group-item').get(1).id;
        console.log(scrollToId);
        $('html, body').animate({
            scrollTop: $(scrollToId).offset().top
        }, 0);
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

// Client CAROUSEL
$('#clientCarousel').carousel({
    interval: false
});
$('.multi-item-carousel .carousel-item').each(function () {
    let next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});