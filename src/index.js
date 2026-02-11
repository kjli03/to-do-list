import "./style.css";
import initialLoad from "./initialLoad.js";
import clear from "./clearPage.js"
import home from "./homePage.js"
import menu from "./menuPage.js"
import about from "./aboutPage.js"


initialLoad();

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

homeButton.addEventListener("click", function () {
    clear();
    home();
});

menuButton.addEventListener("click", function () {
    clear();
    menu();
});

aboutButton.addEventListener("click", function () {
    clear();
    about();
});