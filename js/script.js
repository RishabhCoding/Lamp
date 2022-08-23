const menu = document.getElementById("menu");
const img = document.getElementById("image");

menu.addEventListener("click", function () {
    if (img.style.opacity === '0') {
        img.style.opacity = '1';
        img.style.pointerEvents = 'auto';
    }
    else {
        img.style.opacity = '0';
        img.style.pointerEvents = 'none';
    }
});