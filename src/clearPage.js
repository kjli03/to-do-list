export default function clearPage() {
    var div = document.getElementById("container");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
};
