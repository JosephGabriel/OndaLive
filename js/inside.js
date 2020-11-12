let divFullscreen = document.getElementById("sorteio");
let btnFullscreen = document.getElementById("fullscreen-button");

btnFullscreen.addEventListener("click", () => {
  divFullscreen.classList.add("expand");
});

var elem = document.getElementById("sorteio");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

let bannerTab = document.getElementsByClassName("banner-row");
let swicthTab = document.querySelectorAll('input[name="radio-cats"]');

for (let index = 0; index < bannerTab.length; index++) {
  swicthTab[index].addEventListener("click", () => {
    let switchA = !swicthTab[index].checked;

    swicthTab[index].checked = true;

    bannerTab[index].classList.add("banner-active");

    for (let index = 0; index < bannerTab.length; index++) {
      if ((switchA = !swicthTab[index].checked)) {
        bannerTab[index].classList.remove("banner-active");
      }
    }
  });
}

let rowQuiz = document.getElementsByClassName("row-quiz");
let swicthQiz = document.querySelectorAll('input[name="quiz"]');

for (let index = 0; index < rowQuiz.length; index++) {
  swicthQiz[index].addEventListener("click", () => {
    let switchA = !swicthQiz[index].checked;

    swicthQiz[index].checked = true;

    rowQuiz[index].classList.add("banner-active");

    for (let index = 0; index < rowQuiz.length; index++) {
      if ((switchA = !swicthQiz[index].checked)) {
        rowQuiz[index].classList.remove("banner-active");
      }
    }
  });
}

let tool = document.getElementById("tool");
let toolbar = document.getElementById("toolbar");
let dropdownb = document.getElementsByClassName("dropdown-btn");
let j;

tool.addEventListener("click", () => {
  toolbar.classList.toggle("activeS");
});

for (j = 0; j < dropdownb.length; j++) {
  dropdownb[j].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownbContent = this.nextElementSibling;
    if (dropdownbContent.style.display === "block") {
      dropdownbContent.style.display = "none";
    } else {
      dropdownbContent.style.display = "block";
    }
  });
}
let nav2 = document.getElementById("nav-toggle");
let sidenav2 = document.getElementById("sidenav");
let dropdown2 = document.getElementsByClassName("dropdown-btn");

nav2.addEventListener("click", () => {
  sidenav2.classList.toggle("activeS");
});

for (let i = 0; i < dropdown2.length; i++) {
  dropdown2[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

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
