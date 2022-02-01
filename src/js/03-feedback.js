import throttle from 'lodash.throttle'

const feedBackFormRef = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE = 'feedback-form-state';

feedBackFormRef.addEventListener('input', throttle(onFormInput, 500));
feedBackFormRef.addEventListener('submit', onFormSubmit);

makeForm();

function onFormInput (event) {
    if (event.currentTarget) {
        localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify({email: event.currentTarget.email.value, message: event.currentTarget.message.value}));
    };
};

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)));
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    event.currentTarget.reset();
};    

function makeForm() {
    const savedFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));

    if(savedFormData) {
        feedBackFormRef.elements.email.value = savedFormData.email;
        feedBackFormRef.elements.email.value = savedFormData.message;
    }
};