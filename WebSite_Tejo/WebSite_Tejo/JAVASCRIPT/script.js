// Menú RESPONSIVE

var navLinks = document.getElementById("navLinks");   

function showMenu() {

    navLinks.style.right = "0";

}

function hideMenu() {

    navLinks.style.right = "-200px";

}

//Botón UP

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {

        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));

    }
}

///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 100) {

        buttonUp.style.transform = "scale(1)";
    
    } else if(scroll < 100){

        buttonUp.style.transform = "scale(0)";
    
    }

}
