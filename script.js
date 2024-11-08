import products from "./assets/products.js";

// Function to create product cards
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="product-description">${product.description}</p>
    </div>
  `;
  return card;
}

const productGrid = document.querySelector(".product-grid");
products.forEach((product) => {
  const productCard = createProductCard(product);
  productGrid.appendChild(productCard);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Handle contact form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Here you would typically send the form data to a server
  alert("Thank you for your message. We will get back to you soon!");
  contactForm.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});

// Change hero image every 3 seconds
document.addEventListener("DOMContentLoaded", function () {
  const heroImage = document.querySelector(".hero-image");
  const images = ["assets/hero-img1.jpg", "assets/hero-img2.jpg"];
  let currentIndex = 0;

  function changeHeroImage() {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.src = images[currentIndex];
  }

  setInterval(changeHeroImage, 5000); // Change image every 5 seconds
});
