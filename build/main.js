"use strict";
const btnOpenModal = document.querySelector('.button');
const btnCloseModal = document.querySelector('.modal__close_icon');
const modal = document.querySelector('.modal');
const inputMail = document.querySelector('.form__mail');
const inputPass = document.querySelector('.form__pass');
let user = {
    mail: '',
    password: '',
};
function closeModal(e) {
    !e.target.closest('.modal__container') && (modal === null || modal === void 0 ? void 0 : modal.classList.remove('active'));
}
btnOpenModal === null || btnOpenModal === void 0 ? void 0 : btnOpenModal.addEventListener('click', () => modal === null || modal === void 0 ? void 0 : modal.classList.add('active'));
btnCloseModal === null || btnCloseModal === void 0 ? void 0 : btnCloseModal.addEventListener('click', () => modal === null || modal === void 0 ? void 0 : modal.classList.remove('active'));
modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', (e) => closeModal(e));
inputMail === null || inputMail === void 0 ? void 0 : inputMail.addEventListener('input', (e) => { var _a; user.mail = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value; });
inputPass === null || inputPass === void 0 ? void 0 : inputPass.addEventListener('input', (e) => { var _a; user.password = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value; });
