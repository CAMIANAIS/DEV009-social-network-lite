import { register } from "../lib/index.js";
function createRegisterForm(navigateTo){
  const section1 = document.createElement('section');
  const title = document.createElement('h2');
  const inputName = document.createElement('input');
  const inputApellidos = document.createElement('input');
  const inputNacimiento = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  inputPass.type = 'password';
  const inputconfirmPass = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonReturn1 = document.createElement('button');
  const background = document.createElement('img');
  background.src = "components/img/fondo.jpg";
  const logo = document.createElement('img');
  logo.src = "components/img/logo.png";
  // Añade clases a los elementos para estilizarlos con CSS
  section1.classList.add('containerRegister');
  inputName.classList.add('input-field');
  inputApellidos.classList.add('input-field');
  inputNacimiento.classList.add('input-field');
  inputEmail.classList.add('input-fieldEmail');
  inputPass.classList.add('input-fieldPassword');
  inputconfirmPass.classList.add('input-field');
  buttonRegister.classList.add('btn');
  buttonReturn1.classList.add('btn');
  background.classList.add('img');
  logo.classList.add('logo');

  inputName.placeholder = 'Nombres';
  inputApellidos.placeholder = 'Apellidos';
  inputNacimiento.placeholder = 'Fecha de Nacimiento dd/mm/aaaa';
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Contraseña';
  inputconfirmPass.placeholder = 'Confirmar Contraseña';

  title.textContent = 'Bienvenidx a Arequipa 360';
  buttonRegister.textContent = 'Registrarse';
  buttonReturn1.textContent = 'Return to home';
  buttonReturn1.addEventListener('click',() => {
    navigateTo('/');
  });

  buttonRegister.addEventListener('click', () => {
    // Get the values entered by the user
    const email = document.querySelector(".input-fieldEmail").value;
    const password = document.querySelector(".input-fieldPassword").value;

    const success = register(email, password); // Llama a la función de registro
    if (success) {
      alert('Usuario registrado exitosamente');
      navigateTo('/login'); // Navegar al login para su primer inicio de sesión
    }
    else{
    alert('Error al registrar usuario:');
    }
    });
    section1.append(title, logo, inputName, inputApellidos, inputNacimiento, inputEmail, inputPass, inputconfirmPass, buttonRegister, buttonReturn1, background);
  return section1;
};
export default createRegisterForm;

