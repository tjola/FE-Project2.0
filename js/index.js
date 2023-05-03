document.addEventListener('DOMContentLoaded', function(){
        if (window.innerWidth < 780) {
          let megamenu = document.querySelectorAll(
            ".megamenu .main-navigation .megamenu-list"
          );
          document.getElementById("mobile-menu").appendChild(megamenu);
        }    
})


function myFunction(x) {
    if (window.innerWidth < 780) {
      let megamenu = document.querySelectorAll(
        ".megamenu .main-navigation .megamenu-list"
      );
      document.getElementById("mobile-menu").appendChild(megamenu);
    }
  }
  