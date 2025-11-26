
// Main Swiper
window.swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  autoplay: { delay: 4000 },
  speed: 1000,
  effect: "fade",
});

// Mobile Swiper
window.swiperMobile = new Swiper(".mySwiper-mobile", {
  loop: true,
  slidesPerView: 1,
  autoplay: { delay: 4000 },
  speed: 1000,
  effect: "fade",
});

// Commercial Swiper
window.commercialSwiper = new Swiper(".commercial-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 2 }
  }
});

// Residential Swiper
window.residentialSwiper = new Swiper(".residential-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
// loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 2 }
  }
});

// Clients Swiper
window.clientsSwiper = new Swiper(".clientsSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 1 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 5 },
  },
});
