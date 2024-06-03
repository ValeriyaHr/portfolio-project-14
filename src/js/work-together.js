import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector('.form');
const sendBtn = document.querySelector('.form-btn');
const closeModalBtn = document.querySelector('.modal-close-btn');
const emailInp = document.querySelector('.form-input-name');
const msgInp = document.querySelector('.input-textarea');
const modalEl = document.querySelector('.backdrop')

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
const userData = {
    "email": "",
    "comment": ""
};
// Отримання даних

const userMail = (event) => {
    userData.email = event.target.value;
}
emailInp.addEventListener('input', userMail);

const userMsg = (event) => {
    userData.comment = event.target.value;
};
msgInp.addEventListener('input', userMsg);

// Пост на сервер

const sendData = async () => axios.post(BASE_URL, userData);

   
    
const sendForm = async (event) => {
    event.preventDefault();
    if (userData.comment === '' || userData.email === '') {
        iziToast.error({
            message: 'All fields must be completed!',
            position: 'topRight',
            maxWidth: '300px',
        });
        return
    }
    sendData(BASE_URL, userData)
    try {
        modalEl.classList.add('is-open')
    }
    catch (error) {
        iziToast.error({
            message: 'Ops! Something went wrong. Please try again!',
            position: 'topRight',
            maxWidth: '300px',
        })
    }
    event.currentTarget.reset();
    userData.comment = '';
    userData.email = '';
}
formEl.addEventListener('submit', sendForm);



// Функції для закриття модалки

const closeModal = (event) => {
    modalEl.classList.remove('is-open')
}
closeModalBtn.addEventListener('click', closeModal);

const closeModalBack = (event) => {
    if (event.target === modalEl) {
        modalEl.classList.remove('is-open')
    }
}
modalEl.addEventListener('click', closeModalBack)

document.addEventListener("keydown", event => {
  if (event.key === 'Escape') {
    modalEl.classList.remove('is-open')
  }
});

