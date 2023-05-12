var swiper = new Swiper(".mySwiper", {
  loop: true,
  dynamicBullets: true,
  keyboard: {
    enabled: true,
 },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroupAuto: true,
      centerInsufficientSlides: true,
      dynamicBullets: true,
      navigation: {
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    468: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroupAuto: true,
      centerInsufficientSlides: true,

      navigation: {
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    768: {
      loop: true,

      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroupAuto: true,
      centerInsufficientSlides: true,
      dynamicBullets: true,
      navigation: {
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },

    1024: {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroupAuto: true,
      centerInsufficientSlides: true,
      dynamicBullets: true,
      navigation: {
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});
