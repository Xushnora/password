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
let eyeBx = document.querySelector('#eyeBx');
let lockIcon = document.querySelector('.bxs-lock-alt');
let lockBtn = document.querySelector('.lock-btn');

eyeBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    elInput.classList.toggle('black');
    inputBox.classList.toggle('black');
    eyeBtn.classList.toggle('bi-eye-slash-fill');
    eyeBx.classList.toggle('d-none');
    eyeBtn.classList.toggle('white');
    lockIcon.classList.toggle('iconsBx');
    elInput.setAttribute = ('type', 'password');
})

elInput.addEventListener('click', () => {
    checkedBox.style.display = "block";
    elInput.classList.toggle('black');
    inputBox.classList.toggle('black');
    eyeBtn.classList.toggle('white');
    lockIcon.classList.toggle('bxIcon');
    lockIcon.classList.toggle('iconsBx');
})

elInput.addEventListener('keyup', (value) => {
    let parol = value.target.value.trim();

    if (parol.match(/[A-Z]/) != null) {
        upparcase.style.opacity = "1";
        checkBx.className = "bx bx-check"
        checkBx.style.opacity = '1';
    } else {
        upparcase.style.opacity = "0.2";
        checkBx.className = "bx bx-x"
        checkBx.style.opacity = '0.2';
    }
    if (parol.match(/[0-9]/) != null) {
        number.style.opacity = "1";
        checkNumber.className = "bx bx-check"
        checkNumber.style.opacity = '1';
    } else {
        number.style.opacity = "0.2";
        checkNumber.className = "bx bx-x"
        checkNumber.style.opacity = '0.2';
    }
    if (parol.match(/[!@#$%^&*]/) != null) {
        special.style.opacity = "1";
        checkSpecial.className = "bx bx-check"
        checkSpecial.style.opacity = '1';
    } else {
        special.style.opacity = "0.2";
        checkSpecial.className = "bx bx-x"
        checkSpecial.style.opacity = '0.2';
    } 
    if(parol.length>=8){
        more.style.opacity = "1";
        checkMore.className = "bx bx-check"
        checkMore.style.opacity = '1';
    } else {
        more.style.opacity = "0.2";
        checkMore.className = "bx bx-x"
        checkMore.style.opacity = '0.2';
    }

})
