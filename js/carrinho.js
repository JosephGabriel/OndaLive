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
let nav = document.getElementById("nav-toggle");
let drop = document.getElementById("dropdown");
let dropImg = document.getElementById("dropdown-user-img");
let imgDrop = document.getElementById("img-drop");
let sidenav = document.getElementById("sidenav");
let main = document.getElementById("main");
let dropRoom = document.getElementById("room-drop");
let roomDropdown = document.getElementById("room-dropdown");

nav.addEventListener("click", () => {
  sidenav.classList.toggle("activeS");
});

menu.addEventListener("click", () => {
  drop.classList.toggle("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
});

roomDropdown.addEventListener("click", () => {
  main.classList.remove("ops");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropRoom.classList.toggle("active-dropdown");
});

// sidenav.addEventListener("click", () => {
//   document.getElementById("nav-toggle").classList.toggle("activeS");
// });

imgDrop.addEventListener("click", () => {
  drop.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropImg.classList.toggle("active-dropdown");
  main.classList.remove("ops");
});

// menu.addEventListener("click", () => {
//   drop.classList.toggle("active-dropdown");
//   dropImg.classList.remove("active-dropdown");
//   roomDropdown.classList.remove("active-dropdown");
//   dropRoom.classList.remove("active-dropdown");
//   main.classList.remove("ops");
// });

main.addEventListener("click", () => {
  document.getElementById("dropdown").classList.remove("active-dropdown");
  document
    .getElementById("dropdown-user-img")
    .classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
});
