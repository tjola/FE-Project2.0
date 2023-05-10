var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 2,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  removeClippedSubviews: false,
});
