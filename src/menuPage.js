import menuPic1 from "/assets/menu-page-1.png"
import menuPic2 from "/assets/menu-page-2.png"

export default function menu() {
    const content = document.getElementById("content");

    const title = document.createElement("span");
    title.className = "title";
    title.textContent = "Siam Station Menu"
    content.appendChild(title);

    const menu1 = document.createElement("img");
    menu1.src = menuPic1;

    const menu2 = document.createElement("img");
    menu2.src = menuPic2;

    content.appendChild(menu1);
    content.appendChild(menu2);
}