function randomText() {
  var text = [
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C#",
    "C++",
    "Phyton",
    "PHP",
    "JQuery",
    "MVC",
    "MVVM",
    "DDD",
    "OOP",
    "RestAPI",
    "ASP.NET",
    "WPF",
    "WinForms",
    "Git",
    "Github",
  ];
  letter = text[Math.floor(Math.random() * text.length)];
  return letter;
}
function rain() {
  // Wybierz wszystkie elementy z klasą 'cloud' wewnątrz elementu z klasą 'sky'
  let clouds = document.querySelectorAll(".sky .cloud");

  // Iteruj przez wszystkie znalezione elementy
  clouds.forEach((cloud) => {
    let e = document.createElement("div");
    let left = Math.floor(Math.random() * 250);
    let size = Math.random() * 1.5;
    let duration = Math.random() * 1;

    e.classList.add("text");
    e.innerText = randomText();
    e.style.left = left + "px";
    e.style.fontSize = 0.8 + size + "em";
    e.style.animationDuration = 1 + duration + "s";

    cloud.appendChild(e);

    setTimeout(() => {
      cloud.removeChild(e);
    }, 2000);
  });
}

function checkWindowSize() {
  const sky = document.querySelector(".sky");
  const clouds = sky.querySelectorAll(".cloud");
  console.log(window.innerWidth);
  if (window.innerWidth < 1000) {
    // Jeśli szerokość okna jest mniejsza niż 500px i są dwa elementy .cloud, usuń ostatni
    if (clouds.length > 1) {
      sky.removeChild(clouds[clouds.length - 1]);
    }
    sky.style.margin = "0px 50px";
  } else {
    // Jeśli szerokość okna jest większa lub równa 500px, upewnij się, że są dwa elementy .cloud
    if (clouds.length < 2) {
      const cloud = document.createElement("div");
      cloud.classList.add("cloud");
      sky.appendChild(cloud);
    }
    sky.style.margin = "0px 100px";
  }
}

// Nasłuchiwanie zmian rozmiaru okna
//window.addEventListener("resize", checkWindowSize);
//checkWindowSize();
setInterval(function () {
  rain();
}, 200);
