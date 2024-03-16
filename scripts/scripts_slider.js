// const images = ["toan.png", "toanTin.png", "khoaHocDuLieu.png", "khoaHocMayTinhVaThongTin.png", "mim.png"];
// let index = 0;
// function slider() {
//     document.getElementById("HOME").innerHTML = `<img class=\"image\" src=\"./images/${images[index]}\">`
// }

// let slide;
// function runSlider(){
//     slide = setInterval(() => {
//         ++index;
//         if(index == images.length){
//             index = 0;
//         }
//         slider();
//     }, 4000);
// }

// runSlider();

function slider(){
    setTimeout(() =>{
        document.querySelector('.slide-show-2 img:nth-child(2)').style.bottom = 0;
        document.querySelector('.slide-show-2 img:nth-child(2)').style.height = '100%';
    }, 3000);

    setTimeout(() => {
        document.querySelector('.slide-show-2 img:nth-child(3)').style.width = '100%';
        document.querySelector('.slide-show-2 img:nth-child(3)').style.left = 0;
    }, 6000);

    setTimeout(() => {
        document.querySelector('.slide-show-2 img:nth-child(4)').style.height = '100%';
        document.querySelector('.slide-show-2 img:nth-child(2)').style.bottom = '100%';
        document.querySelector('.slide-show-2 img:nth-child(2)').style.height = 0;
    }, 9000);

    setTimeout(() => {
        document.querySelector('.slide-show-2 img:nth-child(5)').style.width = '100%';
        document.querySelector('.slide-show-2 img:nth-child(3)').style.width = 0;
        document.querySelector('.slide-show-2 img:nth-child(3)').style.left = '100%';
    }, 12000);

    setTimeout(() => {
        document.querySelector('.slide-show-2 img:nth-child(6)').style.opacity = 1;
        document.querySelector('.slide-show-2 img:nth-child(4)').style.height = 0;
    }, 15000);

    setTimeout(() => {
        document.querySelector('.slide-show-2 img:nth-child(5)').style.width = 0;
    }, 18000)

    setTimeout(() => {
        document.querySelector('.slide-show-2 img:nth-child(6)').style.opacity = 0;
    }, 20000)
}

function runSlider(){
    slider()
    setInterval(() => {
        slider();
    }, 20000);
}

// function start(){
//     let image = document.getElementsByClassName('slide-image');
//     for(let i = 0; i < 4; i++){
//         image[i].classList.remove("transition");
//         console.log(i);
//     }
// }

// start();
runSlider();