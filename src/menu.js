import { page } from "./loadPage";

export function makeMenu() {
    const div = document.createElement("div");
    div.classList.add("menu-div");

    const heading = document.createElement("h1");
    heading.textContent = "Menu Below!"
    div.appendChild(heading);
    page.append(div);
}

