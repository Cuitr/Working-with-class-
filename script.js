'use strict';
const modal = document.querySelector(`.modal`);
const showModal = document.querySelectorAll(`.show-modal`);
const overLay = document.querySelector(`.overlay`);
const closeBtnModal = document.querySelector(`.close-modal`);
const openModal = function (){
    modal.classList.remove(`hidden`);
        overLay.classList.remove(`hidden`);
}
for(let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener(`click`, openModal);
}
/*
 closeModal.addEventListener(`click`,() => {modal.classList.add(`hidden`);
 overLay.classList.add(`hidden`);});
 */
const closeModal = function(){
    modal.classList.add(`hidden`);
    overLay.classList.add(`hidden`);
}
closeBtnModal.addEventListener(`click`, closeModal);//we don't write closeModal.addEventListener(`click`, close()); because JS will execute the function immediately before the click event happen
overLay.addEventListener(`click`, closeModal);//whenever a click happen, call the close function

/*---handling a keypress event---*/
document.addEventListener(`keydown`, function(event){
    // console.log(typeof event);
   // if(event.key == `Escape`){
      //  console.log(`the escape button was pressed`);
   // }
   if(event.key == `Escape` && !modal.classList.contains(`hidden`)){
    //if the presskey is `Escape`(Esc on the keyboard) and the modal doesn't contain `hidden` class, then call the function closeModal to close the modal
        closeModal();
   }
});