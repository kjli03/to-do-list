import coverImage from "/assets/cover.png";

export default function home() {
    const content = document.getElementById("content");

    const image = document.createElement("img");
    image.src = coverImage;
    image.id = "cover-image";

    const imageContainer = document.createElement("div");
    imageContainer.id = "image-container";

    content.appendChild(imageContainer);
    imageContainer.appendChild(image);

    const title = document.createElement("span");
    title.className = "title";
    title.textContent = "Siam Station"
    content.appendChild(title);

    const slug = document.createElement("span");
    slug.className = "slug";
    slug.textContent = "Thai Street Food -- My favorite Thai restaurant and the spot where hot is HOT! 🔥"
    content.appendChild(slug);
}