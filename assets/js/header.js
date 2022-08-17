
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
    const header = document.getElementsByTagName('header');
    if(window.scrollY >= 80 || window.pageYOffset >= 80) {
        header[0].classList.add("box-shadow");
    }else {
        header[0].classList.remove("box-shadow");
    }
}  ;










// const header = document.getElementById('nav')
// const mobileMenu = document.getElementById("toggle")
// var headerHeight = header.clientHeight;
// // console.log('toggle');
// mobileMenu.onclick = function () {
//     // alert('thong bao')
//     const isClosed = header.clientHeight === headerHeight;
//     console.log(isClosed);
//     if (isClosed) {
//         header.style.height = 'auto';
//     }
//     else{
//         header.style.height = null;
//     }
// }