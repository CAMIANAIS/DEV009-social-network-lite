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
  const background = document.createElement('img');
  background.src = 'components/img/fondo.jpg';
  const logo = document.createElement('img');
  logo.src = 'components/img/logo.png';
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
  inputPass.placeholder = 'Pssword';

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

    const success = register(email, password); // Llama a la función de registro
    if (success) {
      alert('Usuario registrado exitosamente');
      navigateTo('/login'); // Navegar al login para su primer inicio de sesión
    } else {
      alert('Error al registrar usuario:');
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
