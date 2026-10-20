// Swiper Slider Setup
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

// ----------------------------------------------------

// Responsive Navbar
function handleMobileMenu() {
  var menuNav = document.getElementById("mobileNav");

  if (menuNav.classList.contains("hidden")) {
    menuNav.classList.remove("hidden");
    menuNav.classList.add("block");
  } else {
    menuNav.classList.remove("block");
    menuNav.classList.add("hidden");
  }
}
