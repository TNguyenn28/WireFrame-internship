var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".btn-container .swiper-button-next",
      prevEl: ".btn-container .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });