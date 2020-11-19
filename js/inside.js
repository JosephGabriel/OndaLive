let sortUser = document.getElementById("sort-user");
let sortTable = document.getElementById("sort-table");
let sortInput = document.querySelector("input[name=gift]");
let sortBtn = document.getElementById("sortear");
let users = document.getElementsByClassName("raffle-row");
let result = sortInput.value;
let form = document.getElementById("form-sorteio");
let sortBtns = document.getElementById("raffle-buttons");
let sortBtnsNew = document.getElementById("raffle-buttons-new");
let sortBtnNew = document.getElementById("sortear-new");
let sortTitle = document.getElementById("sort-title");
let awaitScreen = document.getElementById("await");
let userId = document.getElementById("user-id");
let userName = document.getElementById("user-name");
let userDoc = document.getElementById("user-document");
let userEmail = document.getElementById("user-email");
let userGift = document.getElementById("user-gift");
let roomDropdown = document.getElementById("room-dropdown");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let min = 0;
  let max = users.length;
  let valor = Math.trunc(Math.random() * (max - min) + min);

  sortTable.classList.add("hide");
  sortInput.classList.add("hide");
  awaitScreen.classList.remove("hide");
  sortTitle.classList.add("hide");
  sortBtns.classList.add("hide");

  setTimeout(() => {
    awaitScreen.classList.add("hide");
    sortUser.classList.remove("hide");
    userName.innerHTML = users[valor].children[1].innerHTML;
    userId.innerHTML = users[valor].children[0].innerHTML;
    userDoc.innerHTML = users[valor].children[2].innerHTML;
    userEmail.innerHTML = users[valor].children[3].innerHTML;
    userGift.innerHTML = sortInput.value;
    sortBtnsNew.classList.remove("hide");
  }, 5000);
});

sortBtnNew.addEventListener("click", () => {
  sortTable.classList.remove("hide");
  sortInput.classList.remove("hide");
  awaitScreen.classList.add("hide");
  sortTitle.classList.remove("hide");
  sortBtns.classList.remove("hide");
  sortUser.classList.add("hide");
  sortBtnsNew.classList.add("hide");
});

let btnFullscreen = document.getElementsByClassName("fullscreen-button");

for (let index = 0; index < btnFullscreen.length; index++) {
  btnFullscreen[index].addEventListener("click", () => {
    sortBtn.classList.add("expand");
  });
}

let full = document.getElementById("sorteio");
let full2 = document.getElementById("quizTab");
let tabbleQuiz = document.getElementById("table-quiz");

let chooseFull = true;

function toggle() {
  if (chooseFull) {
    chooseFull = false;
    openFullscreen();
  } else {
    chooseFull = true;
    closeFullscreen();
  }
}

function toggleRanking() {
  if (chooseFull) {
    chooseFull = false;
    openFullscreen2();
  } else {
    chooseFull = true;
    closeFullscreen();
  }
}

document.addEventListener("fullscreenchange", () => {
  tabbleQuiz.classList.toggle("hide");
});

let rankingRow2 = document.getElementsByClassName("tb-ranking");
let rankingRowBtn = document.getElementsByClassName("ranking-btn");

for (let index = 0; index < rankingRow2.length; index++) {
  rankingRowBtn[index].addEventListener("click", () => {
    rankingRow2[index].classList.toggle("hide");
  });
}

function openFullscreen() {
  if (full.requestFullscreen) {
    full.requestFullscreen();
  } else if (full.webkitRequestFullscreen) {
    full.webkitRequestFullscreen();
  } else if (full.msRequestFullscreen) {
    full.msRequestFullscreen();
  }
}

function openFullscreen2() {
  if (full2.requestFullscreen) {
    full2.requestFullscreen();
  } else if (full2.webkitRequestFullscreen) {
    full2.webkitRequestFullscreen();
  } else if (full2.msRequestFullscreen) {
    full2.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
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

let hallNav = document.getElementById("sidenav-program");
let closeHall = document.getElementById("close-btn2");
let roomBtnMobile = document.getElementById("room-dropdown-mobile");
let main = document.getElementById("main");

roomBtnMobile.addEventListener("click", () => {
  hallNav.classList.toggle("activeS");
  sidenav.classList.remove("activeS");
  toolbar.classList.remove("activeS");
  main.classList.remove("ops");
});

closeHall.addEventListener("click", () => {
  hallNav.classList.remove("activeS");
});

let tool = document.getElementById("tool");
let tool2 = document.getElementById("tool2");
let toolbar = document.getElementById("toolbar");
let grid = document.getElementById("grid");
let closeBtnAdm = document.getElementById("close-btn-sidebar-adm");
let dropdownb = document.getElementsByClassName("dropdown-btn");
let j;

closeBtnAdm.addEventListener("click", () => {
  toolbar.classList.remove("activeS");
  main.classList.remove("ops");
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

let btnAnswer = document.getElementsByClassName("btn-answer");

for (let index = 0; index < btnAnswer.length; index++) {
  btnAnswer[index].addEventListener("click", () => {
    for (let index = 0; index < btnAnswer.length; index++) {
      btnAnswer[index].classList.remove("active-btn");
    }

    btnAnswer[index].classList.add("active-btn");
  });
}

let menu = document.getElementById("menu-toggle");
let drop = document.getElementById("dropdown");
let dropImg = document.getElementById("dropdown-user-img");
let imgDrop = document.getElementById("img-drop");
let nav = document.getElementById("nav-toggle");
let sidenav = document.getElementById("sidenav");
let layer = document.getElementById("layer");
let sidenavClose = document.getElementById("close-btn");
let dropdown = document.getElementsByClassName("dropdown-btn");
let dropRoom = document.getElementById("room-drop");

main.addEventListener("click", () => {
  dropRoom.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  toolbar.classList.remove("activeS");
  layer.classList.remove("ops");
  hallNav.classList.remove("activeS");
  sidenav.classList.remove("activeS");
});

nav.addEventListener("click", () => {
  sidenav.classList.toggle("activeS");
  toolbar.classList.remove("activeS");
  layer.classList.remove("ops");
  hallNav.classList.remove("activeS");
});

sidenavClose.addEventListener("click", () => {
  sidenav.classList.remove("activeS");
  layer.classList.remove("ops");
});

imgDrop.addEventListener("click", () => {
  drop.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropImg.classList.toggle("active-dropdown");
  toolbar.classList.remove("activeS");
  layer.classList.remove("ops");
});

menu.addEventListener("click", () => {
  drop.classList.toggle("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  roomDropdown.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  toolbar.classList.remove("activeS");
  layer.classList.remove("ops");
});

roomDropdown.addEventListener("click", () => {
  layer.classList.remove("ops");
  toolbar.classList.remove("activeS");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropRoom.classList.toggle("active-dropdown");
});

tool.addEventListener("click", () => {
  toolbar.classList.toggle("activeS");
  layer2.classList.remove("ops");
  layer.classList.toggle("ops");
  quiz.classList.remove("activeQ");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
});

tool2.addEventListener("click", () => {
  toolbar.classList.toggle("activeS");
  layer.classList.toggle("ops");
  sidenav.classList.remove("activeS");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  hallNav.classList.remove("activeS");
});

tippy("#myButton", {
  content: "Mostrar ranking ao final do quiz",
  theme: "light",
  animation: "scale",
});

let rankingRow = document.getElementsByClassName("ranking-row");
let quizRow = document.getElementsByClassName("row-quiz");
let quizRowRanking = document.querySelectorAll("input[name=quiz-row-ranking");

for (let index = 0; index < quizRow.length; index++) {
  quizRowRanking[index].addEventListener("click", () => {
    for (let index = 0; index < quizRow.length; index++) {
      rankingRow[index].classList.add("hide");
    }

    rankingRow[index].classList.remove("hide");
    rankingRow[index].scrollIntoView({ behavior: "smooth" });
  });
}
