let burgerBtn = document.querySelector('.menu-btn');
let headerNav = document.querySelector('.header-nav');
let burgerSpan2 = document.querySelector('.menu-btn__span2');
let burgerSpan1 = document.querySelector('.menu-btn__span1');
let burgerSpan3 = document.querySelector('.menu-btn__span3');
let main = document.querySelector('.main');
let body = document.body;


let closeAdditions = () =>{
    headerNav.style.display = 'none';
    main.classList.remove('shadow');
    burgerBtn.classList.remove('close');
    body.classList.remove('scroll');

}

let burgerToggle = () =>{
    burgerBtn.addEventListener('click',(e)=>{
        headerNav.style.display = headerNav.style.display === "block" ?"none" : "block";
        burgerBtn.classList.toggle('close');
        body.classList.toggle('scroll');
        main.classList.toggle('shadow');
    })
};


let closeBurger = () =>{
    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(headerNav);
        if ( ! withinBoundaries && e.target != burgerSpan1 && e.target !=burgerSpan2 && e.target !=burgerSpan3 ) {
            closeAdditions();
        }

        if(e.target.tagName === 'A'){
            closeAdditions();
        }
    });
}


export  {burgerToggle, closeBurger};