'use strict';
const modal = document.querySelector(`.modal`);
const showModal = document.querySelectorAll(`.show-modal`);
const overLay = document.querySelector(`.overlay`);
const closeModal = document.querySelector(`.close-modal`);
const open = function (){
    modal.classList.remove(`hidden`);
        overLay.classList.remove(`hidden`);
}
for(let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener(`click`, open);
}
/*
 closeModal.addEventListener(`click`,() => {modal.classList.add(`hidden`);
 overLay.classList.add(`hidden`);});
 */
const close = function(){
    modal.classList.add(`hidden`);
    overLay.classList.add(`hidden`);
}
closeModal.addEventListener(`click`, close);//we don't write closeModal.addEventListener(`click`, close()); because JS will execute the function immediately before the click event happen
overLay.addEventListener(`click`, close);