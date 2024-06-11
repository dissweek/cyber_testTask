const btnOpenModal:Element|null = document.querySelector('.button');
const btnCloseModal:Element|null = document.querySelector('.modal__close_icon');
const modal:Element|null = document.querySelector('.modal');
const inputMail:HTMLInputElement|null = document.querySelector('.form__mail');
const inputPass:Element|null = document.querySelector('.form__pass');

type userData = {
    mail:string;
    password:string;
}

let user:userData = {
    mail:'',
    password:'',
}

function closeModal (e: any) {
    !e.target.closest('.modal__container') && modal?.classList.remove('active')
}

btnOpenModal?.addEventListener('click',()=>modal?.classList.add('active'))
btnCloseModal?.addEventListener('click',()=>modal?.classList.remove('active'))
modal?.addEventListener('click',(e)=>closeModal(e))

inputMail?.addEventListener('input',(e:any)=>{user.mail = e.target?.value})
inputPass?.addEventListener('input',(e:any)=>{user.password = e.target?.value})



