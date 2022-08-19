
const navs = document.querySelector("#toggle");
navs.onclick = function () {
    navList= document.querySelector(".js-mobile-menu")
    if(navList.classList.contains("active")) {
        navList.classList.remove("active")
        document.querySelector(".overlay").style.display = "none";
    } else {
        navList.classList.add("active")
        document.querySelector(".overlay").style.display = "block";
    }
};
window.onclick = function(event) {
    if (event.target == document.querySelector(".overlay")) {
        navList.classList.remove("active")
        document.querySelector(".overlay").style.display = "none";
    }
  }

  window.onscroll = function() {
    const header = document.getElementsByClassName('myHeader');
    if(window.scrollY >= 80 || window.pageYOffset >= 80) {
        header[0].classList.add("box-shadow");
    }else {
        header[0].classList.remove("box-shadow");
    }
}  ;
