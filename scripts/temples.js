const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent =
"Last Modification: " + lastModified;

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {

navMenu.classList.toggle("show");

const isOpen = navMenu.classList.contains("show");
menuButton.textContent = isOpen ? "✕" : "☰";
menuButton.setAttribute("aria-expanded", isOpen);

menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
);
});