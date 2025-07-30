
const texts = document.querySelectorAll(".text-slider .text");

const tl = gsap.timeline({ repeat: -1 });

texts.forEach((el, i) => {
    tl.to(el, {
        opacity: 1,
        duration: 0.5,
        onStart: () => {
            el.style.zIndex = 1;
        },
    });
    tl.to(el, {
        opacity: 0,
        duration: 0.5,
        delay: 3,
        onComplete: () => {
            el.style.zIndex = 0;
        },
    });
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    speed: 7000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    grabCursor: false,
});

gsap.to(".stars-wrapper .star-icon", {
  rotation: 360,
  duration: 2,         // slow spin (increase for slower)
  repeat: -1,          // infinite loop
  ease: "linear",      // no easing curve              // optional delay before it starts
});
