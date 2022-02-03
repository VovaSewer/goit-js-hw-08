import throttle from 'lodash.throttle'

const feedBackFormRef = document.querySelector('.feedback-form');

feedBackFormRef.addEventListener('input', throttle(onFormInput, 500));
feedBackFormRef.addEventListener('submit', onFormSubmit);

saveForm();

function onFormInput (event) {
    if (event.currentTarget) {
        localStorage.setItem("feedback-form-state", JSON.stringify({email: event.currentTarget.email.value, message: event.currentTarget.message.value}));
    };
};

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset();
};    

function saveForm() {
    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));

    if(savedFormData) {
        
        feedBackFormRef.elements.email.value = savedFormData.email;
        feedBackFormRef.elements.message.value = savedFormData.message;
    }
};

