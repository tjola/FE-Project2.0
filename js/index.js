document.addEventListener("DOMContentLoaded", function() {
  const barsIcon = document.querySelector(".fa-bars");
  barsIcon.addEventListener("click", function() {
    const megamenuList = document.querySelector(".megamenu-list");
    this.parentNode.appendChild(megamenuList);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  
const megamenu = document.querySelector('.megamenu');
const barsIcon = document.querySelector('.fa-bars');

barsIcon.addEventListener('click', function() {
  megamenu.classList.toggle('active');
});

});
