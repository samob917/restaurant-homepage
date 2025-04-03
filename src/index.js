import { page } from "./loadPage";
import { makeMenu } from "./menu";
import { makeHome } from "./home";
import { makeAbout } from "./about";

makeHome()

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

homeButton.addEventListener("click", () => {
    while (page.firstChild) {
        page.removeChild(page.lastChild);
    }
    makeHome();
});


menuButton.addEventListener("click", () => {
    while (page.firstChild) {
        page.removeChild(page.lastChild);
    }
    makeMenu();
});

aboutButton.addEventListener("click", () => {
    while (page.firstChild) {
        page.removeChild(page.lastChild);
    }
    makeAbout();
});