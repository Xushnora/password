let elInput = document.querySelector('#input');
let upparcase = document.querySelector('.upparcase');
let special = document.querySelector('.special');
let number = document.querySelector('.number');
let more = document.querySelector('.more');
let checkedBox = document.querySelector('.checked-box');
let checkBx = document.querySelector('#bxs');
let checkSpecial = document.querySelector('#bxs2');
let checkNumber = document.querySelector('#bxs3');
let checkMore = document.querySelector('#bxs4');
let eyeBtn = document.querySelector('.eye-btn');
let inputBox = document.querySelector('.input-box');

let count = 0;

eyeBtn.addEventListener('click', ()=> {
    eyeBtn.className = "bi bi-eye-slash";
    // count++;
    // if(count == 1) {
    //     inputBox.classList.add('colorBox');
    //     elInput.classList.add('colorBox');
    //     count--;
    // } else {
    //     inputBox.classList.remove('colorBox');
    //     elInput.classList.remove('colorBox');
    // }
})

elInput.addEventListener('click', () => {
    checkedBox.style.display = "block";
})

elInput.addEventListener('keyup', () => {
    let parol = elInput.value;

    if(parol.length>=8){
        more.style.opacity = "1";
        checkMore.className = "bx bx-check"
        checkMore.style.opacity = '1';
    }
    for(let i=0; i<parol.length; i++){
        if(parol.charCodeAt(i)>64 && parol.charCodeAt(i) < 91){
            upparcase.style.opacity = "1";
            checkBx.className = "bx bx-check"
            checkBx.style.opacity = '1';
        }
        if(['@', '#', '$', '!', '%', '&', '*', '.'].includes(parol[i])){
            special.style.opacity = "1";
            checkSpecial.className = "bx bx-check"
            checkSpecial.style.opacity = '1';
        }
    
        if([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(+parol[i])){
            number.style.opacity = "1";
            checkNumber.className = "bx bx-check"
            checkNumber.style.opacity = '1';
        }
    }
})