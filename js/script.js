////////////////////////////////////////
/////////////NAVIGATION//////////////
///////////////////////////////////////
// window.addEventListener("scroll", function () {
//     if (window.scrollY >= 250) {
//         nav.classList.add("")
//     }
// })


const button = document.querySelectorAll(".btn");
const modalDiv = document.querySelector("#myModal");
button.forEach(function (btn) {
    const modal = function () {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            document.querySelector("#myModal").classList.remove("noShow");
            document.querySelector("#myModal").classList.add("modal");
        })
    }
    modal()
});
modalDiv.addEventListener("click", function () {
    modalDiv.classList.remove("modal");
    modalDiv.classList.add("noShow");
})

const x = document.getElementById("nav-list");
document.querySelector("#toggle, #toggle-box").addEventListener("click", function () {

    if (x.className === "header__nav--list") {
        x.className = "nav-toggle"
        document.querySelector("#nav").classList.add("active");
        document.querySelector("#toggle").classList.remove("toggle-icon");
        document.querySelector("#toggle").classList.add("close-icon");

    } else {
        x.className = "header__nav--list"
        document.querySelector("#nav").classList.remove("active");
        document.querySelector("#toggle").classList.add("toggle-icon");
        document.querySelector("#toggle").classList.remove("close-icon");
    }
})

document.querySelector("#nav").addEventListener("click", function () {
    x.className = "header__nav--list"
    document.querySelector("#nav").classList.remove("active")
    document.querySelector("#toggle").classList.add("toggle-icon")
    document.querySelector("#toggle").classList.remove("close-icon")
})


/*========== active pages ==========*/
const activePage = window.location.href.split("/").pop()
switch (activePage) {
    case "index.html" :
        document.querySelector("#index").classList.add("header__nav--link__active");
        break
    case "webinar.html" :
        document.querySelector("#webinar").classList.add("header__nav--link__active");
        break
    case "contact.html" :
        document.querySelector("#contact").classList.add("header__nav--link__active");
        break
    // case "index.html" : document.querySelector("#index").classList.add("header__nav--link__active")
}

/*========== MEET THE TEAM CAROUSEL ==========*/
// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel();
// });
//
//
// $('.owl-carousel').owlCarousel({
//     // loop:true,
//     margin:10,
//     // autoplay: true,
//     responsiveClass:true,
//     autoplay: true, //set to false to turn off autoplay and only use nav
//         autoplayHoverPause: true, //set to false to prevent pausing on hover
//         loop: true, //set to false to stop carousel after all slides shown
//         autoplayTimeout: 8000, //time between transitions
//         smartSpeed: 1200, //transition speed
//         navSpeed: 1000, //transition speed when using dots/buttons
//         responsive : { //set number of items shown per screen width
//             0 : {
//                 items: 1 //0px width and up display 1 item
//             },
//             768 : {
//                 items: 2 //576px width and up display 2 items
//             },
//             992 : {
//                 items: 3 //768px width and up display 3 items
//             }
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
// }
// })

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
// // // import Swiper JS
// require("swiper/swiper-bundle.min")
// import Swiper from 'swiper';
//
// // core version + navigation, pagination modules:
// import SwiperCore, {Navigation, Pagination} from 'swiper/core';
//
// // // configure Swiper to use modules
// SwiperCore.use([Navigation, Pagination]);
//
// // // import Swiper bundle with all modules installed
// // import Swiper from 'swiper/bundle';
//
//
// const swiper = new Swiper('.swiper-container', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//         // rotate: 50,
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 2,
//         slideShadows: true,
//     },
//     //for show whole of page
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
// });