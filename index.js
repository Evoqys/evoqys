
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll < 25) {
            $("#mynav").css("background" , "transparent");
        }
        else {
            $("#mynav").css("background" , "#E50000");
        }
    })
});
var all = "bg-about-us bg-mobile bg-services bg-web bg-devops bg-tech bg-contact";

var topHeight = 80;
if(viewportWidth < 575.98){
    topHeight = 60;
}
function calculateScrollPos() {
    scrollPosHome[0] = parseInt($(".about-us").offset().top - topHeight);
    scrollPosHome[1] = parseInt($(".services").offset().top - topHeight);
    scrollPosHome[2] = parseInt($(".let-numbers-talk").offset().top - topHeight);
    scrollPosHome[3] = parseInt($(".business-challenge").offset().top - topHeight);
    scrollPosHome[4] = parseInt($(".case-study").offset().top - topHeight);
    scrollPosHome[5] = parseInt($(".what-clients-say").offset().top - topHeight);
    scrollPosHome[6] = parseInt($(".quick-contact").offset().top - topHeight);
}
$(window).scroll(function () {
    if($(window).scrollTop() < scrollPosHome[0]){
        $(".navbar").removeClass(all).addClass("d-none");
    }
    else if($(window).scrollTop() > scrollPosHome[0] && $(window).scrollTop() < scrollPosHome[1]){
        $(".navbar").removeClass(all).addClass("alizarin");
    }
    else if($(window).scrollTop() > scrollPosHome[1] && $(window).scrollTop() < scrollPosHome[2]){
        $(".navbar").removeClass(all).addClass("midnightblue");
    }
    else if($(window).scrollTop() > scrollPosHome[2] && $(window).scrollTop() < scrollPosHome[3]){
        $(".navbar").removeClass(all).addClass("peteriver");
    }
    else if($(window).scrollTop() > scrollPosHome[3] && $(window).scrollTop() < scrollPosHome[4]){
        $(".navbar").removeClass(all).addClass("midnightblue");
    }
    else if($(window).scrollTop() > scrollPosHome[4] && $(window).scrollTop() < scrollPosHome[5]){
        $(".navbar").removeClass(all).addClass("alizarin");
    }
    else if($(window).scrollTop() > scrollPosHome[5] && $(window).scrollTop() < scrollPosHome[6]){
        $(".navbar").removeClass(all).addClass("peteriver");
    }
    else if($(window).scrollTop() > scrollPosHome[6]){
        $(".navbar").removeClass(all).addClass("midnightblue");
    }
});


/**
 * Created by Eleven on 31-12-2018.
 */
var successColorClass = "bg-success";
var scrollPosHome = [0,0,0,0,0,0,0];



var all = "alizarin belizehole carrot clouds greensea jetblack midnightblue orange peteriver pomegranate pumpkin snowwhite sootblack sunflower turquoise wetasphalt";

var topHeight = 80;
if(viewportWidth < 575.98){
    topHeight = 60;
}
function calculateScrollPos() {
    scrollPosHome[0] = parseInt($(".our-clients").offset().top - topHeight);
    scrollPosHome[1] = parseInt($(".services").offset().top - topHeight);
    scrollPosHome[2] = parseInt($(".let-numbers-talk").offset().top - topHeight);
    scrollPosHome[3] = parseInt($(".business-challenge").offset().top - topHeight);
    scrollPosHome[4] = parseInt($(".case-study").offset().top - topHeight);
    scrollPosHome[5] = parseInt($(".what-clients-say").offset().top - topHeight);
    scrollPosHome[6] = parseInt($(".quick-contact").offset().top - topHeight);
}
$(window).scroll(function () {
    if($(window).scrollTop() < scrollPosHome[0]){
        $(".navbar").removeClass(all).addClass("wetasphalt");
    }
    else if($(window).scrollTop() > scrollPosHome[0] && $(window).scrollTop() < scrollPosHome[1]){
        $(".navbar").removeClass(all).addClass("alizarin");
    }
    else if($(window).scrollTop() > scrollPosHome[1] && $(window).scrollTop() < scrollPosHome[2]){
        $(".navbar").removeClass(all).addClass("midnightblue");
    }
    else if($(window).scrollTop() > scrollPosHome[2] && $(window).scrollTop() < scrollPosHome[3]){
        $(".navbar").removeClass(all).addClass("peteriver");
    }
    else if($(window).scrollTop() > scrollPosHome[3] && $(window).scrollTop() < scrollPosHome[4]){
        $(".navbar").removeClass(all).addClass("midnightblue");
    }
    else if($(window).scrollTop() > scrollPosHome[4] && $(window).scrollTop() < scrollPosHome[5]){
        $(".navbar").removeClass(all).addClass("alizarin");
    }
    else if($(window).scrollTop() > scrollPosHome[5] && $(window).scrollTop() < scrollPosHome[6]){
        $(".navbar").removeClass(all).addClass("peteriver");
    }
    else if($(window).scrollTop() > scrollPosHome[6]){
        $(".navbar").removeClass(all).addClass("midnightblue");
    }
});

$(document).ready(function () {
    calculateScrollPos();
});

$(window).on("load", function() {
    calculateScrollPos();
});


$(window).resize(function () {
    if(viewportWidth < 575.98){
        topHeight = 60;
    }
    calculateScrollPos();
});

