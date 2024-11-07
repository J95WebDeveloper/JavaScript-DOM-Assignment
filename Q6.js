const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");

const image = document.querySelectorAll("img");
let slide = 1;

right.addEventListener("click", () => {
  if (slide < image.length) {
    slider.style.transform = `translateX(-${slide * 900}px)`;
    slide++;
  } else {
    slider.style.transform = `translateX(0px)`;
    slide = 1;
  }
});

left.addEventListener("click", () => {
  if (slide > 1) {
    slider.style.transform = `translateX(-${(slide - 2) * 900}px)`;
    slide--;
  } else {
    slider.style.transform = `translateX(-${(image.length - 1) * 900}px)`;
    slide = image.length;
  }
});
