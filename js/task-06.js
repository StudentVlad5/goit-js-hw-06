
const validationInput = document.querySelector('#validation-input');
console.log(validationInput.dataset.length);

validationInput.addEventListener('blur',(event)=>{
    validationInput.classList.remove(`valid`);
    validationInput.classList.remove(`invalid`);
    if(event.currentTarget.value.length === +(validationInput.dataset.length)){
        validationInput.classList.add(`valid`)}
    else {validationInput.classList.add('invalid')}
})