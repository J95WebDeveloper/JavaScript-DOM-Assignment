const drop = document.querySelector(".drop-li");
const dropUL = document.querySelector(".drop-ul");

dropUL.style.display = "none";

drop.addEventListener("mouseover", () => {
  dropUL.style.display = "block";
  dropUL.style.transition = "all 2s";
});

drop.addEventListener("mouseout", () => {
  dropUL.style.display = "none";
  dropUL.style.transition = "all 2s";
});
