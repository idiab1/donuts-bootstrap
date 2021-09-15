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

// Show cart when click on cart items
const cartItems = document.querySelector(".navbar .cart-items");
// Select on the cart element
const cart = document.querySelector(".cart");

cartItems.addEventListener("click", function showHideCart() {
  "use strict";
  // Add & remove show-cart class
  cart.classList.toggle("show-cart");
  // check if cart element contains 'show-cart' class
  // change color cartItems button to black else back to white
  if (cart.classList.contains("show-cart")) {
    cartItems.style.color = "#000";
  } else {
    cartItems.style.color = "#fff";
  }
});

// Add item to cart
(function () {
  "use strict";

  const cartItemBtn = document.querySelectorAll(".store .store-item-icon");

  cartItemBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e.target.parentElement.classList.contains("store-item-icon")) {
        // Get the path of image item
        let fullPathImg = e.target.parentElement.previousElementSibling.src;
        let pos = fullPathImg.indexOf("img") + 3;
        let partPath = fullPathImg.slice(pos);

        // Get the name of item
        let nameItem =
          e.target.parentElement.parentElement.nextElementSibling.children[0]
            .textContent;

        // Get the price ot item
        let priceItem =
          e.target.parentElement.parentElement.nextElementSibling.children[1]
            .textContent;

        let finalPrice = priceItem.slice("1").trim();

        // Data of the item
        let item = {};

        item.img = `images/img-cart${partPath}`;
        item.name = nameItem;
        item.price = finalPrice;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <img class="img-fluid rounded-circle" src="${item.img}" alt="${item.name}" />
          <div class="item-text">
            <p>${item.name}</p>
            <span>$</span>
            <span class="cart-item-price">${item.price}</span>
          </div>
          <a class="trash" href="#">
            <i class="fas fa-trash"></i>
          </a>
        `;

        // Select on total price
        const itemsContent = document.querySelector(".cart .items-content");
        const cartControl = document.querySelector(
          ".cart .items-content .cart-control"
        );

        itemsContent.insertBefore(cartItem, cartControl);

        alert("Item added to the cart");

        showTotals();
      }
    });
  });

  // Show total price
  function showTotals() {
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");

    items.forEach((item) => {
      total.push(parseFloat(item.textContent));
    });

    const itemMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0);

    const finalMoney = itemMoney.toFixed(2);

    document.querySelector(".total .total-price-cart").textContent =
      "$" + " " + finalMoney;
    document.querySelector(".cart-items .cart-price").textContent =
      "$" + " " + finalMoney;
    document.querySelector(".cart-items .item-count").textContent =
      total.length + " " + "items - " + " ";
  }
})();

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
