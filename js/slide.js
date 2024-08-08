window.addEventListener("load", function () {
  document.querySelector(".slide-item-right").classList.add("slide-in");
  document.querySelector(".slide-item-left").classList.add("slide-in");
});

// Intersection Observer API
let observerOptions = {
  threshold: 0.5,
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll("li").forEach((li, index) => {
        setTimeout(() => {
          li.classList.add("active");
        }, index * 100);
      });
    }
  });
}, observerOptions);

observer.observe(document.querySelector("#work"));
