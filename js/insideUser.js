let roomDropdown = document.getElementById("room-dropdown");
let btnAnswer = document.getElementsByClassName("btn-answer");
let main = document.getElementById("main");
let grid = document.getElementById("grid");
let nav2 = document.getElementById("nav-toggle");
let sidenav2 = document.getElementById("sidenav");
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
let sidenav = document.getElementById("sidenav");
let sidenavClose = document.getElementById("close-btn");
let dropdown = document.getElementsByClassName("dropdown-btn");
let choose = true;
let dropRoom = document.getElementById("room-drop");
let i;
let menu8 = document.getElementById("sidenav");
let hallNav = document.getElementById("sidenav-program");
let closeHall = document.getElementById("close-btn2");
let roomBtnMobile = document.getElementById("room-dropdown-mobile");
let main7 = main;
let navToggle = document.getElementById("close-btn");

nav2.addEventListener("click", () => {
  sidenav2.classList.toggle("activeS");
});

roomBtnMobile.addEventListener("click", () => {
  hallNav.classList.toggle("activeS");
  sidenav.classList.remove("activeS");
});

main7.addEventListener("click", () => {
  hallNav.classList.remove("activeS");
});

closeHall.addEventListener("click", () => {
  hallNav.classList.remove("activeS");
});

main.addEventListener("click", () => {
  menu8.classList.remove("activeS");
  main.classList.remove("ops");
});

navToggle.addEventListener("click", () => {
  sidenav.classList.remove("activeS");
});

main.addEventListener("click", () => {
  dropRoom.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  dropImg.classList.remove("active-dropdown");
});

nav.addEventListener("click", () => {
  hallNav.classList.remove("activeS");
  sidenav.classList.toggle("activeS");
});

nav.addEventListener("click", () => {
  sidenav.classList.toggle("activeS");
});

sidenavClose.addEventListener("click", () => {
  sidenav.classList.remove("activeS");
});

sidenav.addEventListener("click", () => {
  document.getElementById("nav-toggle").classList.toggle("activeS");
});

imgDrop.addEventListener("click", () => {
  drop.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropImg.classList.toggle("active-dropdown");
});

menu.addEventListener("click", () => {
  drop.classList.toggle("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  roomDropdown.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  hallNav.classList.remove("activeS");
});

roomDropdown.addEventListener("click", () => {
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropRoom.classList.toggle("active-dropdown");
});

for (let index = 0; index < btnAnswer.length; index++) {
  btnAnswer[index].addEventListener("click", () => {
    for (let index = 0; index < btnAnswer.length; index++) {
      btnAnswer[index].classList.remove("active-btn");
    }

    btnAnswer[index].classList.add("active-btn");
  });
}
