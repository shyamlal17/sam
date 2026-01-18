const images = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

let currentIndex = 0;

/* Open image */
function openImage(img) {
  popup.style.display = "flex";
  popupImg.src = img.src;
  currentIndex = [...images].indexOf(img);
}

/* Close image */
function closeImage() {
  popup.style.display = "none";
}

/* Show image by index */
function showImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  currentIndex = index;
  popupImg.src = images[currentIndex].src;
}

/* Keyboard control */
document.addEventListener("keydown", (e) => {
  if (popup.style.display === "flex") {
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "Escape") closeImage();
  }
});

/* Swipe support (Mobile) */
let startX = 0;

popup.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

popup.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;
  
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      showImage(currentIndex + 1); // swipe left
    } else {
      showImage(currentIndex - 1); // swipe right
    }
  }
});