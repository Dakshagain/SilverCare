
// swiper slide thing
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
       
        600: {
            slidesPerView: 2
        },

       
        1024: {
            slidesPerView: 3
        }
    }
  });