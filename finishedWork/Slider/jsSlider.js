// Левая кнопка

document.getElementById("slider-left").onclick = sliderLeft;

let left = 0;


function sliderLeft() {
    let polosa = document.getElementById("polosa");
    left = left - 256;

    if (left < -1024) {
        left = 0;
    }

    polosa.style.left = left + 'px';
}

//Правая кнопка

document.getElementById("slider-right").onclick = sliderRight;

let right = -1024;

function sliderRight() {
    let line = document.getElementById("polosa");
    left = left + 256;

    if (left > 0) {
        left = -1024;
    }

    line.style.left = `${left}px`;
}