const bun = document.querySelectorAll(".nav-btn");
const slide = document.querySelectorAll(".video-slide");

var sliderNav = function (manual) {
    bun.forEach((btn) => {
        btn.classList.remove("active");
    });

    slide.forEach((slide) => {
        slide.classList.remove("active");
    });

    bun[manual].classList.add("active");
    slide[manual].classList.add("active");
}
bun.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});