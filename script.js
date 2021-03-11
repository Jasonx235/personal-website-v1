console.log("Hello");

const mobileMenuButtonHAM = document.getElementById("mobile-menu-button-ham");
const mobileMenuButtonX = document.getElementById("mobile-menu-button-x");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButtonHAM.addEventListener("click", function () {
  if (mobileMenu.classList.contains("closed")) {
    mobileMenuButtonHAM.classList.add("closed");
    mobileMenu.classList.remove("closed");
    mobileMenuButtonX.classList.remove("closed");
  } else {
    mobileMenuButtonHAM.classList.remove("closed");
    mobileMenu.classList.add("closed");
    mobileMenuButtonX.classList.add("closed");
  }
});

mobileMenuButtonX.addEventListener("click", function () {
  if (mobileMenu.classList.contains("closed")) {
    mobileMenu.classList.remove("closed");
    mobileMenuButtonHAM.classList.add("closed");
    mobileMenuButtonX.classList.remove("closed");
  } else {
    mobileMenu.classList.add("closed");
    mobileMenuButtonHAM.classList.remove("closed");
    mobileMenuButtonX.classList.add("closed");
  }
});
