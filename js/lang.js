const translations = {
  menu_about_me: {
    pl: "O mnie",
    en: "About me",
  },
  menu_work: {
    pl: "Praca",
    en: "Work",
  },
  menu_projects: {
    pl: "Projekty",
    en: "Projects",
  },
  menu_contact: {
    pl: "Kontakt",
    en: "Contact",
  },
  greeting: {
    pl: "Cześć, tu",
    en: "Hi, I'm ",
  },
  text_animation: {
    pl: "Tutaj <span></span>",
    en: "Here <span></span>",
  },
  about_me_description: {
    pl: "Jestem doświadczonym programistą, specjalizującym się w tworzeniu zaawansowanego oprogramowania w technologii WPF, z głównym naciskiem na rozwój backendu. Projektuję i implementuję aplikacje w C# oraz ASP.NET. Skupiam się na dostarczaniu efektywnych, skalowalnych rozwiązań, przy jednoczesnym dbaniu o wysoką jakość kodu i przestrzeganie najlepszych praktyk inżynierii oprogramowania, takich jak MVVM oraz DDD.",
    en: "I am an experienced developer specializing in creating advanced software using WPF technology, with a primary focus on backend development. I design and implement applications in C# and ASP.NET. I focus on delivering efficient, scalable solutions while ensuring high code quality and adherence to best software engineering practices, such as MVVM and DDD.",
  },
  btn_here: {
    pl: "Tutaj",
    en: "Here",
  },
  btn_contact: {
    pl: "Kontakt",
    en: "Contact",
  },
  career_title: {
    pl: "Kariera",
    en: "Career",
  },
  now: {
    pl: "teraz",
    en: "now",
  },
  job1_title: {
    pl: "Programista WH Okna / Sekcja baz danych",
    en: "WH Okna Developer / Database Section",
  },
  job1_description: {
    pl: "Praca nad rozwojem aplikacji do konstrukcji okien, w tym projekt do generowania modeli 3D okien, projekt do integrowania dokumentów z innymi programami, projekt do doboru oraz obrazowania okuć. Przygotowywanie baz danych okuć oraz tworzenie narzędzi do generowania baz.",
    en: "Work on the development of window construction applications, including a project for generating 3D window models, a project for integrating documents with other programs, a project for selecting and visualizing fittings. Preparation of fitting databases and creation of tools for database generation.",
  },
  job2_title: {
    pl: "Programista Junior Magento",
    en: "Junior Magento Developer",
  },
  job2_description: {
    pl: "Zarządzanie oraz rozwój strony oraz sklepu opartego na oprogramowaniu Magento oraz integracja sklepu z platformą Allegro.",
    en: "Management and development of the website and store based on Magento software, as well as integration of the store with the Allegro platform.",
  },
  projects_title: {
    pl: "Projekty",
    en: "Projects",
  },
  project1_title: {
    pl: "Aplikacja magazynowa",
    en: "Warehouse Application",
  },
  project1_description: {
    pl: "System w technologii WPF służący do zarządzania magazynem. Posiada funkcję generującą trasy do skompletowania zlecenia na magazynie. Projekt napisany zgodnie z podejściem DDD oraz MVVM z wykorzystaniem języka C#.",
    en: "A WPF technology system for warehouse management. It has a function that generates routes for order completion in the warehouse. The project was written in accordance with DDD and MVVM approaches using C#.",
  },
  project2_title: {
    pl: "Gra samochodowa",
    en: "Car Game",
  },
  project2_description: {
    pl: "Prosta gra samochodowa napisana z wykorzystaniem silnika Unity. Zaimplementowano fizykę auta oraz stworzono własną mapę.",
    en: "A simple car game written using the Unity engine. Car physics have been implemented, and a custom map was created.",
  },
  project3_title: {
    pl: "Serwis rezerwacji hotelowej",
    en: "Hotel Reservation Service",
  },
  project3_description: {
    pl: "Serwis służący do rezerwacji pokoi w hotelach działający na stronie internetowej jak i na aplikacji desktopowej.",
    en: "A service for booking hotel rooms, working on both the website and desktop application.",
  },
  project4_title: {
    pl: "Wiele innych ...",
    en: "Many others ...",
  },
  project4_description: {
    pl: "Wiele innych mniejszych aplikacji napisanych na różne potrzeby, takie jak API do powiązania danych kryminalnych CrimeGraph z wykorzystaniem bazy danych Neo4j, czy aplikacja informacyjna do zarządzania gwiazdami z wykorzystaniem Node.js. Wiele innych dostępnych na moim profilu na GitHub ...",
    en: "Many other smaller applications written for various needs, such as an API for linking criminal data CrimeGraph using the Neo4j database, or an informational application for managing stars using Node.js. Many others available on my GitHub profile ...",
  },
  contact_title: {
    pl: "Kontakt",
    en: "Contact",
  },
  contact_form_subject: {
    pl: "Temat",
    en: "Subject",
  },
  contact_form_email: {
    pl: "Email",
    en: "Email",
  },
  contact_form_message: {
    pl: "Wiadomość",
    en: "Message",
  },
  contact_form_submit: {
    pl: "Wyślij",
    en: "Send",
  },
  footer_copyright: {
    pl: "@ Jakub Szulc | Wszystkie prawa zastrzeżone",
    en: "@ Jakub Szulc | All rights reserved",
  },
};

function changeLanguage(language) {
  const elements = document.querySelectorAll("[data-text-id]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-text-id");
    element.textContent = translations[key][language];
  });
}

function getCurrentLanguage() {
  const storedLanguage = localStorage.getItem("language");

  return storedLanguage || "pl";
}

document.addEventListener("DOMContentLoaded", function () {
  const currentLanguage = getCurrentLanguage();
  //if (currentLanguage != "pl") updateLanguageIcon(currentLanguage);
});

document.querySelector(".lang").addEventListener("click", function () {
  const currentLanguage = getCurrentLanguage();
  const newLanguage = currentLanguage === "en" ? "pl" : "en";

  localStorage.setItem("language", newLanguage);

  updateLanguageIcon(newLanguage);
});

function updateLanguageIcon(language) {
  const imgElement = document.querySelector("#btn-lang img");

  if (language === "pl") {
    imgElement.src = "img/en.png";
    imgElement.alt = "EN";
    changeLanguage("pl");
  } else if (language === "en") {
    imgElement.src = "img/pl.png";
    imgElement.alt = "PL";
    changeLanguage("en");
  }
}
