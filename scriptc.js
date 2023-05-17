const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  
  if (name === '') {
    showError(nameInput, 'Please enter your name');
  } else {
    removeError(nameInput);
  }
  
  if (email === '') {
    showError(emailInput, 'Please enter your email');
  } else if (!isValidEmail(email)) {
    showError(emailInput, 'Please enter a valid email');
  } else {
    removeError(emailInput);
  }
  
  if (message === '') {
    showError(messageInput, 'Please enter a message');
  } else {
    removeError(messageInput);
  }
  
  if (name !== '' && email !== '' && isValidEmail(email) && message !== '') {
    form.submit();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
  input.classList.add('error');
}

function removeError(input) {
  const error = input.nextElementSibling;
  error.innerText = '';
  input.classList.remove('error');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
