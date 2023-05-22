let input_name = document.querySelector('.input_name');
let input_number = document.querySelector('.input_number');
let buttonSubmit = document.querySelector('#buttonSubmit');
let reg =/^[\d\+][\d\(\)\ -]{4,14}\d$/;

buttonSubmit.addEventListener('click', () =>{
    if( input_name.value === '' ||  !isNaN(input_name.value ) || input_name.value === ' '){
        input_name.style.border = "1px solid red";
    }else{
        input_name.style.border = "1px solid green";
        input_name.value = '';

    }

    if( reg.test(input_number.value) ){
        input_number.style.border = "1px solid green";
        input_number.value = '';
    }else{
        input_number.style.border = "1px solid red";

    }
})


export  {buttonSubmit};