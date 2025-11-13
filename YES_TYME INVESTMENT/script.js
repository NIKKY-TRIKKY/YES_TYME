AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".myClientSwiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 0, // continuous motion
    disableOnInteraction: false,
  },
  speed: 1000, // smooth continuous speed
  freeMode: true,
  freeModeMomentum: false,
  grabCursor: true,

  breakpoints: {
    320: { slidesPerView: 5, spaceBetween: 120 },
    640: { slidesPerView: 5, spaceBetween: 30 },
    1024: { slidesPerView: 6, spaceBetween: 40 },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ------------------- mobile nav toggle -------------------

(function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("navmenu");

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    // animate hamburger to X
    navToggle.classList.toggle("active");
    if (navToggle.classList.contains("active")) {
      navToggle.querySelectorAll(".nav-toggle-bar")[0].style.transform =
        "translateY(10px) rotate(45deg)";
      navToggle.querySelectorAll(".nav-toggle-bar")[1].style.opacity = "0";
      navToggle.querySelectorAll(".nav-toggle-bar")[2].style.transform =
        "translateY(-5.5px ) rotate(-45deg)";
    } else {
      navToggle.querySelectorAll(".nav-toggle-bar")[0].style.transform = "";
      navToggle.querySelectorAll(".nav-toggle-bar")[1].style.opacity = "";
      navToggle.querySelectorAll(".nav-toggle-bar")[2].style.transform = "";
    }
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener("click", function (e) {
    if (!navMenu.classList.contains("open")) return;
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.querySelectorAll(".nav-toggle-bar").forEach((el) => {
        el.style.transform = "";
        el.style.opacity = "";
      });
    }
  });
})();
