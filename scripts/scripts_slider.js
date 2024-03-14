const images = ["toan.png", "toanTin.png", "khoaHocDuLieu.png", "khoaHocMayTinhVaThongTin.png", "mim.png"];
let index = 0;
function slider() {
    document.getElementById("HOME").innerHTML = `<img class=\"image\" src=\"./images/${images[index]}\">`
}

let slide;
function runSlider(){
    slide = setInterval(() => {
        ++index;
        if(index == images.length){
            index = 0;
        }
        slider();
    }, 4000);
}

runSlider();