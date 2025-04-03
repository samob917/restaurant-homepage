import resImage from "./jay-wennington-restuarant.jpg";
import { page } from "./loadPage";
import { makeMenu } from "./menu";

const heading = document.createElement("h1");
heading.textContent = "The best restuarant ever";
page.appendChild(heading);

const image = document.createElement("img");
image.src = resImage;
image.style.height = "50vh";
image.style.width = "40vw";
page.appendChild(image);

const para = document.createElement("p");
para.textContent = "We have a great selection of food. You will love it so much.";
page.appendChild(para);

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

menuButton.addEventListener("click", () => {
    while (page.firstChild) {
        page.removeChild(page.lastChild);
    }
    makeMenu();
});