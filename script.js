'use strict';
const modal = document.querySelector(`.modal`);
const showModal = document.querySelectorAll(`.show-modal`);
const overLay = document.querySelector(`.overlay`);
const closeModal = document.querySelector(`.close-modal`);
for(let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener(`click`, function(){
        modal.classList.remove(`hidden`);
        overLay.classList.remove(`hidden`);
    })
}
 closeModal.addEventListener(`click`,() => {modal.classList.add(`hidden`);
 overLay.classList.add(`hidden`);});