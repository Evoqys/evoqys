// const nav = document.getElementById('mynav');
// window.onscroll = () => {
//     if(this.scrollY <= 10)
//     {
//         nav.className = 'nav-transparent';
//     }
//     else {
//         nav.className = 'nav-colored';
//     }
// };
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll < 50) {
            $("#mynav").css("background" , "transparent");
        }

        else if (scroll>= 50 && scroll < 666) {
            $("#mynav").css("background" , "linear-gradient(#ab4be6 0%, #ffad2b 100%)");
        }
        else if (scroll>= 666 && scroll < 1416) {
            $("#mynav").css("background" , "#46A086");
        }
        else if (scroll>= 1416 && scroll < 2166) {
            $("#mynav").css("background" , "#ab4be6");
        }
        else if (scroll>= 2166 && scroll < 2916) {
            $("#mynav").css("background" , "#3798DB");
        }
        else if (scroll>= 2916 && scroll < 3666) {
            $("#mynav").css("background" , "#46A086");
        }
        else if (scroll>= 3666 && scroll < 4416) {
            $("#mynav").css("background" , "#3798DB");
        }
        else if (scroll>= 4416 && scroll < 5166) {
            $("#mynav").css("background" , "#2C3E50");
        }
        else {
            $("#mynav").css("background" , "#E50000");
        }
    })
})