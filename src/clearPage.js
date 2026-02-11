export default function clearPage() {
    var div = document.getElementById("content");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
};
