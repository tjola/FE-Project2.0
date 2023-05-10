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
  const chevrons = document.querySelector(".fa-chevron-down");
  const mobileHeader = document.querySelector(".page-titles-list");
  const overlayMobile = document.querySelector(".overlay");
  const linkSelected = document.querySelector(".menu-item-3 .nested");
  const tattoLink = document.querySelector(".menu-item-3");
  const nestedMenu = document.querySelector(".sub-menu.level-2");
  linkSelected.addEventListener("click", function () {
    nestedMenu.classList.toggle("active");
    tattoLink.classList.toggle("active");
    if (tattoLink.classList.contains("active")) {
      chevrons.classList.remove("fa-chevron-down");
      chevrons.classList.add("fa-chevron-right");
    } else {
      console.log(99);
    }
  });

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
        tattoLink.classList.remove("active");
        nestedMenu.classList.remove("active");
      }
    }, 300);
  });
});
