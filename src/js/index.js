const images = [...document.getElementById("pic").children];
const circles = [...document.getElementById("circles").children];
const getCurrentElement = () =>
  images.findIndex((img) => img.style.display == "block");

const left = document.getElementById("left");
left.addEventListener("click", () => {
  if (getCurrentElement() > 0) renderPicture(getCurrentElement() - 1);
});

const right = document.getElementById("right");
right.addEventListener("click", () => {
  if (getCurrentElement() < images.length - 1)
    renderPicture(getCurrentElement() + 1);
});

const initPage = () => {
  renderPicture(0);
};

const renderPicture = (element) => {
  images.forEach((img) => (img.style.display = "none"));
  images[element].style.display = "block";

  circles.forEach((circle) => {
    if (circle.classList.contains("fas")) {
      circle.classList.remove("fas");
      circle.classList.add("far");
    }
  });
  circles[element].classList.add("fas");
  
};

initPage();

console.log(getCurrentElement());
