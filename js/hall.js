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
let sidenav = document.getElementById("sidenav");
let sidenavClose = document.getElementById("sidenav-close");
let dropdown = document.getElementsByClassName("dropdown-btn");
let navToggle = document.getElementById("close-btn");
let navToggleSide = document.getElementById("nav-toggle-side");
let programBtn = document.getElementById("program");
let closeBtnSideNavAdm = document.getElementById("close-btn-sidebar-adm");
let programSideNav = document.getElementById("program-sidenav");
let toolbar = document.getElementById("toolbar");
let choose = true;
let i;

navToggleSide.addEventListener("click", () => {
  programSideNav.classList.remove("sidebar-active");
  toolbar.classList.toggle("activeS");
  main.classList.toggle("ops");
  sidenav.classList.remove("activeS");
});

main.addEventListener("click", () => {
  toolbar.classList.remove("activeS");
  main.classList.remove("ops");
  sidenav.classList.remove("activeS");
});

navToggle.addEventListener("click", () => {
  sidenav.classList.remove("activeS");
  main.classList.remove("ops");
});

programBtn.addEventListener("click", function () {
  programSideNav.classList.toggle("sidebar-active");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  sidenav.classList.remove("activeS");
  main.classList.toggle("ops");
  toolbar.classList.remove("activeS");
});

main.addEventListener("click", () => {
  programSideNav.classList.remove("sidebar-active");
  drop.classList.remove("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  main.classList.remove("ops");
});

sidenavClose.addEventListener("click", () => {
  programSideNav.classList.remove("sidebar-active");
  main.classList.remove("ops");
});

nav.addEventListener("click", () => {
  sidenav.classList.toggle("activeS");
  main.classList.remove("ops");
  toolbar.classList.remove("activeS");
  programSideNav.classList.remove("sidebar-active");
});

menu.addEventListener("click", () => {
  main.classList.remove("ops");
  drop.classList.toggle("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  programSideNav.classList.remove("sidebar-active");
});

sidenav.addEventListener("click", () => {
  document.getElementById("nav-toggle").classList.toggle("activeS");
});

closeBtnSideNavAdm.addEventListener("click", () => {
  toolbar.classList.remove("activeS");
  main.classList.remove("ops");
});

imgDrop.addEventListener("click", () => {
  drop.classList.remove("active-dropdown");
  dropImg.classList.toggle("active-dropdown");
  programSideNav.classList.remove("sidebar-active");
});

for (let i = 0; i < divsg.length; i++) {
  detailsBtn2[i].addEventListener("click", () => {
    divsg[i].classList.toggle("show");
  });

  closeBtnG[i].addEventListener("click", () => {
    divsg[i].classList.remove("show");
  });
}

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

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

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
