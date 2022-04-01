// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });

//   Mobile Menu

const hamMenu = document.querySelector('.hamMenu');
const closeMenu = document.querySelector('.closeMenu');
const mobileMenu = document.querySelector('.MobileMenuContainer');


hamMenu.addEventListener('click', () => {
  document.querySelector('.mobileMenuContainer').style.display = "flex";
  document.querySelector('.mobileMenuContainer').style.background = "black";
  document.querySelector('.mobileMenuContainer').style.width = "14rem";
})

closeMenu.addEventListener('click', ()=> {
    document.querySelector('.mobileMenuContainer').style.display = "none";

})

