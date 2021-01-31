const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
  console.log("open hamburger");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
    body.classList.remove("noscroll");
  } else {
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
    body.classList.add("noscroll");
  }
});
