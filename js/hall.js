let navToggle = document.getElementById("close-btn");
let sidenav = document.getElementById("sidenav");

navToggle.addEventListener("click", () => {
  sidenav.classList.remove("activeS");
});

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

let detailsBtn = document.querySelectorAll(".details-button");
let detailsBtn2 = document.querySelectorAll(".details-button2");
let priceBtn = document.querySelectorAll(".price-buttons");
let divs = document.querySelectorAll(".details");
let divs2 = document.querySelectorAll(".details-price");
let divsg = document.querySelectorAll(".details-g");
let menu = document.getElementById("menu-toggle");
let closeBtn = document.querySelectorAll(".card-close");
let closeBtn2 = document.querySelectorAll(".card-close2");
let closeBtnG = document.querySelectorAll(".card-close-g");
let drop = document.getElementById("dropdown");
let dropImg = document.getElementById("dropdown-user-img");
let imgDrop = document.getElementById("img-drop");
let nav = document.getElementById("nav-toggle");
let main = document.getElementById("main");
let sidenavClose = document.getElementById("sidenav-close");
let dropdown = document.getElementsByClassName("dropdown-btn");
let choose = true;
let i;

// document.getElementById("main").addEventListener("click", () => {
//   document.getElementById("toolbar").classList.remove("activeS");
//   main.classList.remove("ops");
// });

for (let i = 0; i < divsg.length; i++) {
  detailsBtn2[i].addEventListener("click", () => {
    divsg[i].classList.toggle("show");
  });

  closeBtnG[i].addEventListener("click", () => {
    divsg[i].classList.remove("show");
  });
}

document.getElementById("program").addEventListener("click", function () {
  document.getElementById("program-sidenav").classList.toggle("sidebar-active");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  main.classList.toggle("ops");
});

document.getElementById("main").addEventListener("click", () => {
  document.getElementById("program-sidenav").classList.remove("sidebar-active");
  document.getElementById("dropdown").classList.remove("active-dropdown");
  document
    .getElementById("dropdown-user-img")
    .classList.remove("active-dropdown");
});

document.getElementById("sidenav-close").addEventListener("click", () => {
  document.getElementById("program-sidenav").classList.remove("sidebar-active");
});

nav.addEventListener("click", () => {
  sidenav.classList.toggle("activeS");
});

menu.addEventListener("click", () => {
  drop.classList.toggle("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  document.getElementById("program-sidenav").classList.remove("sidebar-active");
});

sidenav.addEventListener("click", () => {
  document.getElementById("nav-toggle").classList.toggle("activeS");
});

imgDrop.addEventListener("click", () => {
  drop.classList.remove("active-dropdown");
  dropImg.classList.toggle("active-dropdown");
  document.getElementById("program-sidenav").classList.remove("sidebar-active");
});

for (let i = 0; i < divs.length; i++) {
  detailsBtn[i].addEventListener("click", () => {
    divs[i].classList.toggle("show");
    divs2[i].classList.remove("show");
  });

  closeBtn[i].addEventListener("click", () => {
    divs[i].classList.remove("show");
  });
}

for (let i = 0; i < divs2.length; i++) {
  priceBtn[i].addEventListener("click", () => {
    divs2[i].classList.toggle("show");
    divs[i].classList.remove("show");
  });

  closeBtn2[i].addEventListener("click", () => {
    divs2[i].classList.remove("show");
  });
}

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     let dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }

tippy(".price-buttons", {
  content: "Clique para ver os lotes",
  animation: "scale",
  theme: "light",
});

$(".my-flipster").flipster({
  style: "flat",
  spacing: -0.25,
  touch: true,
  scrollwheel: false,
});
