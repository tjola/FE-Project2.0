document.addEventListener("DOMContentLoaded", function () {
  const barsIcon = document.querySelector(".fa-bars");
  barsIcon.addEventListener("click", function () {
    const megamenuList = document.querySelector(".megamenu-list");
    barsIcon.classList.toggle("active");
    megamenuList.classList.toggle("active");
    this.parentNode.appendChild(megamenuList);
  });

});
document.addEventListener("DOMContentLoaded", function () {
  const megamenu = document.querySelector(".megamenu");
  const barsIcon = document.querySelector(".fa-bars");
  const mobileHeader = document.querySelector(".page-titles-list");
  const overlayMobile = document.querySelector(".overlay");

  barsIcon.addEventListener("click", function () {
    megamenu.classList.toggle("active");
    mobileHeader.classList.toggle("active");
    overlayMobile.classList.toggle("active");
    setTimeout(() => {
      if (barsIcon.classList.contains("active")) {
        barsIcon.classList.remove("fa-bars");
        barsIcon.classList.add("fa-xmark");
      
      } else {
        barsIcon.classList.remove("fa-xmark");
        barsIcon.classList.add("fa-bars");
        
      }
    }, 300); 
  });
  // Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Add event listeners to buttons
document.querySelector('.swiper-button-next').addEventListener('click', function() {
  swiper.slideNext();
});

document.querySelector('.swiper-button-prev').addEventListener('click', function() {
  swiper.slidePrev();
});

});
// var swiper = new Swiper('.swiper', {
//   // Set the swiper options and settings
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 10,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
  
//   // Add the navigation buttons
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
  
//   // Add the pagination bullets
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
  
//   // Enable the lazy loading for the images
//   lazy: {
//     loadPrevNext: true,
//   },
  
//   // Enable the keyboard navigation
//   keyboard: {
//     enabled: true,
//   },
  
//   // Enable the mousewheel navigation
//   mousewheel: {
//     invert: true,
//   },
// });


