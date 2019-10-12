
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
        }
        else {
            $("#mynav").css("background" , "transparent");
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