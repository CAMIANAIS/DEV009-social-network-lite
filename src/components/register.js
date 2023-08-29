import imagenfondo from './img/fondo.jpg';
import imagenlogo from './img/logo.png';
import { register } from '../lib/index.js';

function createRegisterForm(navigateTo) {
  const section1 = document.createElement('section');
  const title = document.createElement('h1');
  const containerContent = document.createElement('div');
  const inputName = document.createElement('input');
  const inputApellidos = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  inputPass.type = 'password';
  const buttonRegister = document.createElement('button');
  const buttonReturn1 = document.createElement('button');

  const background = document.createElement('img'); // Create an img element
  background.src = imagenfondo;
  background.alt = 'fondo';
  background.classList.add('img'); // Add the class 'img'

  const logo = document.createElement('img'); // Create an img element
  logo.src = imagenlogo;
  logo.alt = 'logo';
  logo.classList.add('logo'); // Add the class 'img'
  // Añade clases a los elementos para estilizarlos con CSS
  section1.classList.add('containerRegister');
  inputName.classList.add('input-field');
  inputApellidos.classList.add('input-field');
  inputEmail.classList.add('input-fieldEmail');
  inputPass.classList.add('input-fieldPassword');
  buttonRegister.classList.add('btn');
  buttonReturn1.classList.add('btn');
  background.classList.add('img');
  logo.classList.add('logo');
  containerContent.classList.add('container-content');

  inputName.placeholder = 'Names';
  inputApellidos.placeholder = 'Surnames';
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Password';

  title.textContent = 'Welcome to Arequipa 360';
  buttonRegister.textContent = 'Registrarse';
  buttonReturn1.textContent = 'Return to home';
  buttonReturn1.addEventListener('click', () => {
    navigateTo('/');
  });

  buttonRegister.addEventListener('click', () => {
    // Get the values entered by the user
    const email = document.querySelector('.input-fieldEmail').value;
    const password = document.querySelector('.input-fieldPassword').value;

    try {
      if (register(email, password)) {
        alert('User registered successfully!');
        navigateTo('/login');
      }
    } catch (error) {
      switch (error.message) {
        case 'Invalid email':
          alert('Please enter a valid email.');
          break;
        case 'Password must be at least 6 characters long':
          alert('Password must be at least 6 characters long.');
          break;
        case 'User already exists':
          alert('This user is already registered. Please try logging in.');
          break;
        default:
          alert('An error occurred during registration');
      }
    }
  });
  containerContent.append(
    logo,
    inputName,
    inputApellidos,
    inputEmail,
    inputPass,
    buttonRegister,
    buttonReturn1,
  );
  section1.append(
    title,
    containerContent,
    background,
  );
  return section1;
}
export default createRegisterForm;
