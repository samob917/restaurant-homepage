import { page } from "./loadPage";
import resImage from "./jay-wennington-restuarant.jpg";

export function makeHome() {
    const div = document.createElement("div");
    div.classList.add("home-div");

    const heading = document.createElement("h1");
    heading.textContent = "The best restuarant ever";
    div.appendChild(heading);

    const image = document.createElement("img");
    image.src = resImage;
    image.style.height = "50vh";
    image.style.width = "40vw";
    div.appendChild(image);

    const para = document.createElement("p");
    para.textContent = "We have a great selection of food. You will love it so much.";
    div.appendChild(para);
    page.appendChild(div)
}
