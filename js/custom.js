//  Select on serveral of components
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");

// Adjust height full screen for header
document.querySelector("body").style.marginTop = navbar.clientHeight + "px";
header.style.height = window.innerHeight - navbar.clientHeight + "px";

// Adjust add class when scrolled
window.addEventListener("scroll", () => {
  if (this.scrollY >= 500) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Adjust add and remove class active to navbar links
// Select on all navbar links
const navLinks = document.querySelectorAll(
  ".navbar .navbar-nav .nav-item .nav-link"
);
/**
 * Create for each on all links where when click on navbar link
 * first step prevent default in anchor tag then select on active exists in nav-link
 * second step check if active true remove this class otherwise add active class
 * */
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const active = document.querySelector(".nav-link.active");
    if (active) {
      active.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  });
});

// Smooth scroll to section by data scroll
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    let section = document.getElementById(navLink.getAttribute("data-scroll"));
    scrolling(section);
  });
});

// Scroll to store section when click on explore button
// Select on explore button
const exploreBtn = document.getElementById("explore-btn");
const exploreAboutBtn = document.getElementById("explore-about-btn");
const storeSection = document.getElementById("store");

function scrolling(element) {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop - 50,
  });
}
exploreBtn.addEventListener("click", () => {
  scrolling(storeSection);
});
exploreAboutBtn.addEventListener("click", () => {
  scrolling(storeSection);
});

// Show and hide button when scrolling
// Select on button top
const buttonTop = document.querySelector(".button-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 1000) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
});

// Adjust scroll to top when click on button width smoothly
buttonTop.addEventListener("click", () => {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: 0,
  });
});
