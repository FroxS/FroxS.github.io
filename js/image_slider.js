document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");
  const fullscreenViewer = document.getElementById("fullscreen-viewer");
  const fullscreenImage = document.getElementById("fullscreen-image");
  const closeFullscreen = fullscreenViewer.querySelector(".close");
  const fullscreenLeftArrow = fullscreenViewer.querySelector(".arrow.left");
  const fullscreenRightArrow = fullscreenViewer.querySelector(".arrow.right");

  sliders.forEach((slider) => {
    const slidesContainer = slider.querySelector(".slides");
    const slides = slidesContainer.querySelectorAll("img");
    const dotsContainer = slider.querySelector(".dots");
    const leftArrow = slider.querySelector(".arrow.left");
    const rightArrow = slider.querySelector(".arrow.right");

    let slideIndex = 0;
    let slideInterval;
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Create dots
    slides.forEach((_, i) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function showSlides(n) {
      slideIndex = n;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }

      slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;

      dots.forEach((dot) => {
        dot.classList.remove("active");
      });
      dots[slideIndex].classList.add("active");
    }

    function nextSlide() {
      showSlides(slideIndex + 1);
    }

    function previousSlide() {
      showSlides(slideIndex - 1);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3000);
    }

    leftArrow.addEventListener("click", () => {
      previousSlide();
      resetInterval();
    });

    rightArrow.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.index);
        showSlides(index);
        resetInterval();
      });
    });

    slideInterval = setInterval(nextSlide, 3000);
    showSlides(slideIndex);

    slides.forEach((img) => {
      img.addEventListener("dblclick", () => {
        fullscreenImage.src = img.src;
        fullscreenViewer.style.display = "flex";
        fullscreenImage.dataset.index = [...slides].indexOf(img);
      });
    });

    fullscreenLeftArrow.addEventListener("click", () => {
      const currentIndex = parseInt(fullscreenImage.dataset.index);
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      fullscreenImage.src = slides[newIndex].src;
      fullscreenImage.dataset.index = newIndex;
    });

    fullscreenRightArrow.addEventListener("click", () => {
      const currentIndex = parseInt(fullscreenImage.dataset.index);
      const newIndex = (currentIndex + 1) % slides.length;
      fullscreenImage.src = slides[newIndex].src;
      fullscreenImage.dataset.index = newIndex;
    });

    closeFullscreen.addEventListener("click", () => {
      fullscreenViewer.style.display = "none";
    });

    fullscreenViewer.addEventListener("click", (e) => {
      if (e.target === fullscreenViewer) {
        fullscreenViewer.style.display = "none";
      }
    });
  });
});
