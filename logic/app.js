// Add this in your JavaScript file (app.js)

function toggleMenu() {
  const navMenu = document.querySelector(".navmenu");
  navMenu.classList.toggle("active");
}

// Add this code to set the "Home" menu as active initially
document.addEventListener("DOMContentLoaded", function () {
  const homeMenu = document.querySelector(".navmenu ul li:first-child");
  homeMenu.classList.add("active");
});

// Add this code to handle the active state when clicking on other menu items
const menuItems = document.querySelectorAll(".navmenu ul li");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});
function submitForm(){
    location.reload()
}
// Add this in your JavaScript file (app.js)

let darkMode = false;

function toggleDarkMode() {
  const body = document.body;
  const darkModeIcon = document.getElementById("darkModeIcon");
  const lightModeIcon = document.getElementById("lightModeIcon");

  darkMode = !darkMode;

  if (darkMode) {
    body.classList.add("dark-mode");
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "inline-block";
  } else {
    body.classList.remove("dark-mode");
    darkModeIcon.style.display = "inline-block";
    lightModeIcon.style.display = "none";
  }
}

// Rest of your existing JavaScript code
