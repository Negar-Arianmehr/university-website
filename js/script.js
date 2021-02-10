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
    loop:true,
    margin:10,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
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