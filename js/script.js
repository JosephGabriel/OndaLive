//let rellax = new Rellax(".rellax")

window.addEventListener("load", () => {
  let loader = document.getElementById("loader");
  loader.classList.add("finish");
});
window.addEventListener("load", () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
});
