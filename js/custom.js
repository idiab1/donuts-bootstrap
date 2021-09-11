//  Select on serveral of components
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");

// Adjust height full screen for header
document.querySelector("body").style.marginTop = navbar.clientHeight + "px";
header.style.height = window.innerHeight - navbar.clientHeight + "px";
