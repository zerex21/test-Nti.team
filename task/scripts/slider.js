const images = document.querySelectorAll('.slider-img')
let sliderArrow = document.querySelector(".arrow1");
let sliderArrow2 = document.querySelector(".arrow2");

const sliderImgs = document.querySelector('.slider-imgs')
let dots = document.querySelectorAll('.dot')
/* current-dot */

let count = 0;
let width;

function init() {
    width = images[0].offsetWidth
}

let show = () => {
    if(sliderArrow2){
        sliderArrow2.addEventListener('click', () => {
            init()
            count++;
            rollSlider()
            if( count === 5){
                count =0
                sliderImgs.style.transform = 'translate('+ 0+ 'px)';
            }
            console.log(count)
            currentDots(count)
        })
    }

    if(sliderArrow){
        sliderArrow.addEventListener('click', () => {
            init()
            count++;
            rollSlider()
            if( count === 5){
                count =0
                sliderImgs.style.transform = 'translate('+ 0+ 'px)';
            }
            console.log(count)
            currentDots(count)
        })
    }


}


let rollSlider = () => {
    sliderImgs.style.transform = 'translate(-' + count * width + 'px)';
}

let currentDots = (n) => {
    for(let i = 0 ; i< dots.length; i++) {
        ( i === n) ? dots[i].classList.add('current-dot') : dots[i].classList.remove('current-dot')
    }
}


export  {show};