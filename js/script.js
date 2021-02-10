////////////////////////////////////////
/////////////NAVIGATION//////////////
///////////////////////////////////////
// window.addEventListener("scroll", function () {
//     if (window.scrollY >= 250) {
//         nav.classList.add("")
//     }
// })
const x = document.getElementById("nav-list")
document.querySelector("#toggle, #toggle-box").addEventListener("click", function () {

    if (x.className === "header__nav--list") {
        x.className = "nav-toggle"
        document.querySelector("#nav").classList.add("active")
         document.querySelector("#toggle").classList.remove("toggle-icon")
        document.querySelector("#toggle").classList.add("close-icon")

    } else {
        x.className = "header__nav--list"
        document.querySelector("#nav").classList.remove("active")
        document.querySelector("#toggle").classList.add("toggle-icon")
        document.querySelector("#toggle").classList.remove("close-icon")
    }
})

document.querySelector("#nav").addEventListener("click", function () {
    x.className = "header__nav--list"
        document.querySelector("#nav").classList.remove("active")
        document.querySelector("#toggle").classList.add("toggle-icon")
        document.querySelector("#toggle").classList.remove("close-icon")
})


/*========== MEET THE TEAM CAROUSEL ==========*/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});


$('.owl-carousel').owlCarousel({
    // loop:true,
    margin:10,
    // autoplay: true,
    responsiveClass:true,
    autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1200, //transition speed
        navSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //576px width and up display 2 items
            },
            992 : {
                items: 3 //768px width and up display 3 items
            }
    // responsive:{
    //     0:{
    //         items:1,
    //         nav:true
    //     },
    //     600:{
    //         items:2,
    //         nav:false
    //     },
    //     1000:{
    //         items:5,
    //         nav:true,
    //         loop:false
    //     }
    }
})

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })