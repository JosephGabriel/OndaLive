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

console.log(sortBtns);

sortBtnNew.addEventListener("click", () => {
  sortTable.classList.remove("hide");
  sortInput.classList.remove("hide");
  awaitScreen.classList.add("hide");
  sortTitle.classList.remove("hide");
  sortBtns.classList.remove("hide");
  sortUser.classList.add("hide");
  sortBtnsNew.classList.add("hide");
});

// let sortTab = document.getElementById("sort-tab");
// sortTab.addEventListener("click", () => {
//   sortTable.classList.remove("hide");
//   sortInput.classList.remove("hide");
//   sortTitle.classList.remove("hide");
//   sortBtns.classList.remove("hide");
//   sortUser.classList.add("hide");
//   awaitScreen.classList.add("hide");
//   sortBtnsNew.classList.add("hide");
// });

let btnFullscreen = document.getElementById("fullscreen-button");

btnFullscreen.addEventListener("click", () => {
  sortBtn.classList.add("expand");
});

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
  // document.getElementById("img-quiz").classList.toggle("hide");
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

let tool = document.getElementById("tool");
let tool2 = document.getElementById("tool2");
let toolbar = document.getElementById("toolbar");
let main = document.getElementById("main");
let grid = document.getElementById("grid");
let closeBtnAdm = document.getElementById("close-btn-sidebar-adm");
let dropdownb = document.getElementsByClassName("dropdown-btn");
let j;

main.addEventListener("click", () => {
  toolbar.classList.remove("activeS");
  // main.classList.remove("ops");
});

// grid.addEventListener("click", () => {
//   toolbar.classList.remove("activeS");
//   // main.classList.remove("ops");
// });

closeBtnAdm.addEventListener("click", () => {
  toolbar.classList.remove("activeS");
  main.classList.remove("ops");
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

let btnAnswer = document.getElementsByClassName("btn-answer");

for (let index = 0; index < btnAnswer.length; index++) {
  btnAnswer[index].addEventListener("click", () => {
    for (let index = 0; index < btnAnswer.length; index++) {
      btnAnswer[index].classList.remove("active-btn");
    }

    btnAnswer[index].classList.add("active-btn");
  });
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
let sidenav = document.getElementById("sidenav");
let sidenavClose = document.getElementById("sidenav-close");
let dropdown = document.getElementsByClassName("dropdown-btn");
let choose = true;
let dropRoom = document.getElementById("room-drop");
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

document.getElementById("main").addEventListener("click", () => {
  dropRoom.classList.remove("active-dropdown");
  document.getElementById("dropdown").classList.remove("active-dropdown");
  document
    .getElementById("dropdown-user-img")
    .classList.remove("active-dropdown");
});

nav.addEventListener("click", () => {
  sidenav.classList.toggle("activeS");
});

sidenav.addEventListener("click", () => {
  document.getElementById("nav-toggle").classList.toggle("activeS");
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

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

imgDrop.addEventListener("click", () => {
  drop.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropImg.classList.toggle("active-dropdown");
  toolbar.classList.remove("activeS");
  main.classList.remove("ops");
});

nav.addEventListener("click", () => {
  sidenav.classList.toggle("activeS");
});

menu.addEventListener("click", () => {
  drop.classList.toggle("active-dropdown");
  dropImg.classList.remove("active-dropdown");
  roomDropdown.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
  toolbar.classList.remove("activeS");
  main.classList.remove("ops");
});

roomDropdown.addEventListener("click", () => {
  main.classList.remove("ops");
  toolbar.classList.remove("activeS");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropRoom.classList.toggle("active-dropdown");
});

tool.addEventListener("click", () => {
  toolbar.classList.toggle("activeS");
  main.classList.toggle("ops");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
});
tool2.addEventListener("click", () => {
  toolbar.classList.toggle("activeS");
  main.classList.toggle("ops");
  dropImg.classList.remove("active-dropdown");
  drop.classList.remove("active-dropdown");
  imgDrop.classList.remove("active-dropdown");
  dropRoom.classList.remove("active-dropdown");
});
