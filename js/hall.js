let btnAnswer = document.getElementsByClassName("btn-answer");

for (let index = 0; index < btnAnswer.length; index++) {
  btnAnswer[index].addEventListener("click", () => {
    for (let index = 0; index < btnAnswer.length; index++) {
      btnAnswer[index].classList.remove("active-btn");
    }

    btnAnswer[index].classList.add("active-btn");
  });
}

var body = document.getElementById("main");
var nav = document.getElementById("nav-toggle");
var sidenav = document.getElementById("sidenav");
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

nav.addEventListener("click", () => {
  sidenav.classList.toggle("activeS");
});

var drop = document.getElementById("dropdown");
var dropImg = document.getElementById("dropdown-user-img");
var imgDrop = document.getElementById("img-drop");
var menu = document.getElementById("menu-toggle");

imgDrop.addEventListener("click", () => {
  drop.classList.remove("active-dropdown");
  dropImg.classList.toggle("active-dropdown");
  dropRoom2.classList.remove("active-dropdown");
  document.getElementById("program-sidenav").classList.remove("sidebar-active");
});

menu.addEventListener("click", () => {
  drop.classList.toggle("active-dropdown");
  dropRoom2.classList.remove("active-dropdown");
  dropImg.classList.remove("active-dropdown");
});

main.addEventListener("click", () => {
  drop.classList.remove("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  dropRoom2.classList.remove("active-dropdown");
});

var dropRoom = document.getElementById("room-dropdown");
var dropRoom2 = document.getElementById("room-drop");

dropRoom.addEventListener("click", () => {
  dropRoom2.classList.toggle("active-dropdown");
  drop.classList.remove("active-dropdown");
  dropImg.classList.remove("active-dropdown");
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

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
