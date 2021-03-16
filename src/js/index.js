const initPage = () => {
  renderPicture(4);
};

const renderPicture = (element) => {
  const images = [...document.getElementById("pic").children];
  //   images[0].style.display = "block";
  images.forEach((img) => (img.style.display = "none"));
  images[element].style.display = "block";

  const circles = [...document.getElementById("circles").children];
  circles.forEach((circle) => {
    if (circle.classList.contains("fas")) {
      circle.classList.delete("fas");
      circle.classList.add("far");
    }
  });
  circles[element].classList.add("fas");
};

initPage();
