// Remove Items From Cart
$("a.remove").click(function () {
  event.preventDefault();
  $(this).parent().parent().parent().hide(400);
});

// Just for testing, show all items
$("a.btn.continue").click(function () {
  $("li.items").show(400);
});
let menu = document.getElementById("menu-toggle");
let drop = document.getElementById("dropdown");
let dropImg = document.getElementById("dropdown-user-img");
let imgDrop = document.getElementById("img-drop");
let nav = document.getElementById("nav-toggle");
let main = document.getElementById("main");
let sidenav = document.getElementById("sidenav");
let sidenavClose = document.getElementById("close-btn");
let dropdown = document.getElementsByClassName("dropdown-btn");
let dropRoom = document.getElementById("room-drop");
let hallNav = document.getElementById("sidenav-program");
let closeHall = document.getElementById("close-btn2");
let roomBtnMobile = document.getElementById("room-dropdown-mobile");
let roomDropdown = document.getElementById("room-dropdown");

roomBtnMobile.addEventListener("click", () => {
  hallNav.classList.toggle("activeS");
  sidenav.classList.remove("activeS");
  main.classList.remove("ops");
});

closeHall.addEventListener("click", () => {
  hallNav.classList.remove("activeS");
});

main.addEventListener("click", () => {
  dropRoom.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  main.classList.remove("ops");
  hallNav.classList.remove("activeS");
  sidenav.classList.remove("activeS");
});

nav.addEventListener("click", () => {
  sidenav.classList.toggle("activeS");
  main.classList.remove("ops");
  hallNav.classList.remove("activeS");
});

sidenavClose.addEventListener("click", () => {
  sidenav.classList.remove("activeS");
  main.classList.remove("ops");
});

imgDrop.addEventListener("click", () => {
  drop.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropImg.classList.toggle("active-dropdown");
  main.classList.remove("ops");
});

menu.addEventListener("click", () => {
  drop.classList.toggle("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  roomDropdown.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  main.classList.remove("ops");
});

roomDropdown.addEventListener("click", () => {
  main.classList.remove("ops");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropRoom.classList.toggle("active-dropdown");
});
