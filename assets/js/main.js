let bg = document.getElementById("bg");
let moon= document.getElementById("moon");
let mountain = document.getElementById("mountain");
let land = document.getElementById("land");
let text = document.getElementById("text");

window.addEventListener('scroll',function(){

    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    // bg.style.bottom = value * 0.15 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.30 + 'px';
    land.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
})

jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
});