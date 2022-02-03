import throttle from 'lodash.throttle'

const feedBackFormRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

feedBackFormRef.addEventListener('submit', onFormSubmit);
feedBackFormRef.addEventListener('input', throttle(onFormInput, 500));

saveForm();

function onFormInput (event) {
    if (event.currentTarget) {

        localStorage.setItem(STORAGE_KEY, JSON.stringify({email: event.currentTarget.email.value, message: event.currentTarget.message.value}));
    };
};

function onFormSubmit(event) {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);

    const formElements = event.currentTarget.elements;
    console.log(formElements);

    const email = formElements.email.value;
    const message = formElements.message.value;

    event.currentTarget.reset();

    if (email === '' || message === '') {
        alert ('Заполни все поля перед отправкой')
    }

};    

function saveForm() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(savedFormData) {
        feedBackFormRef.elements.email.value = savedFormData.email;
        feedBackFormRef.elements.message.value = savedFormData.message;
    }
};

