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

        else if (scroll> 50 && scroll < 666) {
            $("#mynav").css("background" , "blue");
        }
        else {
            $("#mynav").css("background" , "red");
        }
    })
})