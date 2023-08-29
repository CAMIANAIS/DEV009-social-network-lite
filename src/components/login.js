import imagenfondo from './img/fondo.jpg';
import imagenlogo from './img/logo.png';
import { login } from '../lib/index.js';

function createLogin(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const containerContent = document.createElement('div');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  inputPass.type = 'password';
  const buttonLogin = document.createElement('button');
  const buttonReturn = document.createElement('button');

  const background = document.createElement('img'); // Create an img element
  background.src = imagenfondo;
  background.alt = 'fondo';
  background.classList.add('img'); // Add the class 'img'

  const logo = document.createElement('img'); // Create an img element
  logo.src = imagenlogo;
  logo.alt = 'logo';
  logo.classList.add('logo'); // Add the class 'img'

  inputEmail.classList.add('input-fieldEmail');
  inputPass.classList.add('input-fieldPassword');
  buttonLogin.classList.add('btn');
  buttonReturn.classList.add('btn');
  containerContent.classList.add('container-content');

  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Password';

  title.textContent = 'Welcome to Arequipa 360';
  buttonLogin.textContent = 'Log in';
  buttonReturn.textContent = 'Return to home';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  buttonLogin.addEventListener('click', () => {
    // Obtener los valores del email y la contraseña
    const email = document.querySelector('.input-fieldEmail').value;
    const password = document.querySelector('.input-fieldPassword').value;

    const success1 = login(email, password); // Llama a la función de login
    if (success1) {
      alert('Cargando tus preferencias');
      navigateTo('/publish'); // Navegar al muro
    } else {
      alert('Error. Verifique su correo o contraseña, por favor');
    }
  });
  containerContent.append(logo, inputEmail, inputPass, buttonLogin, buttonReturn);
  section.append(title, containerContent, background);
  return section;
}
export default createLogin;
