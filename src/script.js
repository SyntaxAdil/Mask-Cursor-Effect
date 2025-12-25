const maskedLayer = document.querySelector(".masked-layer");
const maskedContent = document.querySelector(".masked-content");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let isHovering = false;
maskedLayer.style.clipPath = `circle(0px at ${mouseX}px ${mouseY}px)`;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (!isHovering) {
    maskedLayer.style.clipPath = `circle(10px at ${mouseX}px ${mouseY}px)`;
  } else {
    maskedLayer.style.clipPath = `circle(200px at ${mouseX}px ${mouseY}px)`;
  }
});
maskedContent.addEventListener("mouseenter", (e) => {
  isHovering = true;
});
maskedContent.addEventListener("mouseleave", (e) => {
  isHovering = false;
});
