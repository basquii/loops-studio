let burgerIcon = document.querySelector(".burger");
let nav = document.querySelector(".nav-mobile");

// event listenrs
burgerIcon.addEventListener("click", showNav);

// functions
function showNav() {
  if (burgerIcon.getAttribute("src") === "./images/icon-hamburger.svg") {
    burgerIcon.setAttribute("src", "./images/icon-close.svg")
    nav.classList.add("come")
    nav.classList.remove("go")
  } else {
    burgerIcon.setAttribute("src", "./images/icon-hamburger.svg")
    nav.classList.remove("come")
    nav.classList.add("go")
  }
}