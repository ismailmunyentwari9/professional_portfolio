
const formMobile = document.querySelector('#form-mobile');
const emailInputMobile = document.getElementById('email-mobile');
const errorMessageMobile = document.getElementById('pop-error-mobile');

formMobile.addEventListener('submit', (event) => {
  if (emailInputMobile.value === emailInputMobile.value.toLowerCase()) {
    errorMessageMobile.innerHTML = '';
  } else {
    event.preventDefault();
    errorMessageMobile.innerHTML = 'Please use a lowercase email';
  }
});
