import { page } from "./loadPage";

export function makeAbout() {
    const div = document.createElement("div");
    div.classList.add("about-div");

    const heading = document.createElement("h1");
    heading.textContent = "Hear our story!"
    div.appendChild(heading);

    const para = document.createElement("p");
    para.textContent = "Out story begins about a year ago...";
    div.appendChild(para);

    page.append(div);
}