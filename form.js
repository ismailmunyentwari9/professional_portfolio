const errorMessage = document.getElementById('pop-error');
const form = document.querySelector('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
  if (emailInput.value === emailInput.value.toLowerCase()) {
    errorMessage.innerHTML = '';
  } else {
    event.preventDefault();
    errorMessage.innerHTML = 'Please use a lowercase email';
  }
});
