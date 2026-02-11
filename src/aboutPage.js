export default function about() {
    const content = document.getElementById("content");

    const title = document.createElement("span");
    title.className = "title";
    title.textContent = "Siam Station"
    content.appendChild(title);

    const slug = document.createElement("span");
    slug.className = "slug";
    slug.textContent = "About Us"
    content.appendChild(slug);

    const infoDiv = document.createElement("div");
    infoDiv.id = "info-container";

    content.appendChild(infoDiv);

    const info1 = document.createElement("p");
    info1.className = "info";
    info1.textContent = "Open Everyday:";

    const info2 = document.createElement("p");
    info2.className = "info";
    info2.textContent = "11:30AM - 9PM:";

    const info3 = document.createElement("p");
    info3.className = "info";
    info3.textContent = "We do not take reservations";

    content.appendChild(info1);
    content.appendChild(info2);
    content.appendChild(info3);
}