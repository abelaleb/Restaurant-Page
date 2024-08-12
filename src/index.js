import createHomepage from "./homepage";
import createContact from "./contact";
import createMenu from "./menu";
import './style.css';
console.log("Webpack is working.");
function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}
function loadHome() {
  clearContent();
  createHomepage();
}
function loadContact() {
  clearContent();
  createContact();
}
function loadMenu() {
  clearContent();
  createMenu();
}
function setUpEventListeners() {
  document
    .querySelector("button:nth-child(1)")
    .addEventListener("click", loadHome);
  document
    .querySelector("button:nth-child(2)")
    .addEventListener("click", loadMenu);
  document
    .querySelector("button:nth-child(3)")
    .addEventListener("click", loadContact);
}
setUpEventListeners();
function initialize() {
  document.addEventListener("DOMContentLoaded", () => {
    setUpEventListeners();
    loadHome();
  });
}
initialize();
