document.addEventListener("DOMContentLoaded", function () {
  const barsIcon = document.querySelector(".fa-bars");
  barsIcon.addEventListener("click", function () {
    const megamenuList = document.querySelector(".megamenu-list");
    barsIcon.classList.toggle("active");
    megamenuList.classList.toggle("active");
    this.parentNode.appendChild(megamenuList);

    const chevronIcons = document.querySelectorAll(
      ".megamenu-list i.fa-chevron-down"
    );
    chevronIcons.forEach(function (icon) {
      if (megamenuList.classList.contains("active")) {
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-right");
      } else {
        icon.classList.remove("fa-chevron-right");
        icon.classList.add("fa-chevron-down");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const megamenu = document.querySelector(".megamenu");
  const barsIcon = document.querySelector(".fa-bars");
  const mobileHeader = document.querySelector(".page-titles-list");
  const overlayMobile = document.querySelector(".overlay");
  const tattoLink = document.querySelector(".menu-item-3");

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
      }
    }, 300);
  });

  const links = document.querySelectorAll("ul.megamenu-list li");
  const activeChevron = document.querySelectorAll("i.fa-chevron-right::before");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      link.classList.toggle("active");
      if (link.classList.contains("active")) {
        console.log(activeChevron)
        // activeChevron.classList.remove("fa-chevron-right");
        // activeChevron.classList.add("fa-chevron-left");
        // activeChevron.classList.add("active");
        console.log(activeChevron);
      } else if (!link.classList.contains("active")) {
        link.classList.remove("active");
        // activeChevron.classList.remove("active");
        // activeChevron.classList.remove("fa-chevron-left");
        // activeChevron.classList.add("fa-chevron-right");
      }
    });
  });
  const liElements = document.querySelectorAll('a > i.fa-chevron-right');
 liElements.forEach(li => {
   const iElement = li.querySelector('i');
   iElement.className = 'fa-solid fa-chevron-left fa-2xs';
});
});
