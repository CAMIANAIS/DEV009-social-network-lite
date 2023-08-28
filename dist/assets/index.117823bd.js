(function polyfill() {
  const relList = document.createElement('link').relList;
  if (relList && relList.supports && relList.supports('modulepreload')) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== 'childList') {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === 'LINK' && node.rel === 'modulepreload') processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity) fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy) fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === 'use-credentials') fetchOpts.credentials = 'include';
    else if (script.crossorigin === 'anonymous') fetchOpts.credentials = 'omit';
    else fetchOpts.credentials = 'same-origin';
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());
const style = '';
const register$1 = (email, password) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email');
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
  let users = [];
  const usersStr = localStorage.getItem('users');
  if (usersStr) {
    users = JSON.parse(usersStr);
  }
  const user = users.find((user2) => user2.email === email);
  if (user) {
    throw new Error('User already exists');
  } else {
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
};
const register = (email, password) => register$1(email, password);
const myFunction = () => {
  console.log('Hola mundo!');
};
function home(navigateTo2) {
  const section = document.createElement('section');
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header');
  const title = document.createElement('h1');
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  const background = document.createElement('img');
  background.src = 'components/img/fondo.jpg';
  button.textContent = 'Ingresar';
  button.addEventListener('click', () => {
    navigateTo2('/login');
  });
  button2.textContent = 'Registrar';
  button2.addEventListener('click', () => {
    navigateTo2('/register');
  });
  title.textContent = 'Bienvenidx';
  button.classList.add('btn1');
  button2.classList.add('btn1');
  background.classList.add('img');
  containerHeader.appendChild(button);
  containerHeader.appendChild(button2);
  section.appendChild(containerHeader);
  section.append(title, background);
  return section;
}
function createLogin(navigateTo2) {
  const section = document.createElement('section');
  const formContainer = document.createElement('section');
  const title = document.createElement('h2');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonForgotPass = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const buttonReturn = document.createElement('button');
  const background = document.createElement('img');
  background.src = 'components/img/fondo.jpg';
  const logo = document.createElement('img');
  logo.src = 'components/img/logo.png';
  inputEmail.classList.add('input-field');
  inputPass.classList.add('input-field');
  buttonLogin.classList.add('btn');
  buttonReturn.classList.add('btn');
  buttonForgotPass.classList.add('btn');
  background.classList.add('img');
  logo.classList.add('logo');
  formContainer.classList.add('container');
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Contrase\xF1a';
  title.textContent = 'Bienvenidx a Arequipa 360';
  buttonLogin.textContent = 'Ingresar';
  buttonLogin.addEventListener('click', () => {
    navigateTo2('/publish');
  });
  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo2('/');
  });
  buttonForgotPass.textContent = 'Olvidaste tu contrase\xF1a';
  buttonLogin.addEventListener('click', () => {
    const email = inputEmail.value;
    const password = inputPass.value;
    const userData = {
      email,
      password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  });
  section.appendChild(formContainer);
  section.append(title, logo, inputEmail, inputPass, buttonLogin, buttonReturn, buttonForgotPass, background);
  return section;
}
function error() {
  const title = document.createElement('h2');
  title.textContent = 'Error 404 page not found';
  return title;
}
function createRegisterForm(navigateTo2) {
  const section1 = document.createElement('section');
  const title = document.createElement('h2');
  const inputName = document.createElement('input');
  const inputApellidos = document.createElement('input');
  const inputNacimiento = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const inputconfirmPass = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonReturn1 = document.createElement('button');
  const background = document.createElement('img');
  background.src = 'components/img/fondo.jpg';
  const logo = document.createElement('img');
  logo.src = 'components/img/logo.png';
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
  inputPass.placeholder = 'Contrase\xF1a';
  inputconfirmPass.placeholder = 'Confirmar Contrase\xF1a';
  title.textContent = 'Bienvenidx a Arequipa 360';
  buttonRegister.textContent = 'Registrarse';
  buttonReturn1.textContent = 'Return to home';
  buttonReturn1.addEventListener('click', () => {
    navigateTo2('/');
  });
  buttonRegister.addEventListener('click', () => {
    inputName.value;
    inputApellidos.value;
    inputNacimiento.value;
    const email = document.querySelector('.input-fieldEmail').value;
    const password = document.querySelector('.input-fieldPassword').value;
    try {
      const success = register(email, password);
      if (success) {
        console.log('Usuario registrado exitosamente');
        navigateTo2('/login');
      }
    } catch (error2) {
      console.error('Error al registrar usuario:', error2.message);
    }
  });
  section1.append(title, logo, inputName, inputApellidos, inputNacimiento, inputEmail, inputPass, inputconfirmPass, buttonRegister, buttonReturn1, background);
  return section1;
}
function publish(navigateTo2) {
  const section2 = document.createElement('section');
  section2.style.backgroundColor = '#D9D9D9';
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header');
  const title = document.createElement('h2');
  const inputPublish = document.createElement('input');
  const buttonPublish = document.createElement('button');
  const buttonReturn1 = document.createElement('button');
  const sandwich = document.createElement('img');
  sandwich.src = 'components/img/bars-solid.svg';
  document.createElement('p');
  inputPublish.classList.add('input-field');
  buttonPublish.classList.add('btn');
  buttonReturn1.classList.add('btn');
  sandwich.classList.add('icon');
  inputPublish.placeholder = 'Publicacion';
  title.textContent = 'Arequipa 360';
  buttonPublish.textContent = 'Publicar';
  buttonReturn1.textContent = 'Return to home';
  buttonReturn1.addEventListener('click', () => {
    navigateTo2('/');
  });
  buttonPublish.addEventListener('click', () => {
    const publish2 = inputPublish.value;
    const userData = {
      publish: publish2,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  });
  containerHeader.appendChild(sandwich);
  section2.appendChild(containerHeader);
  section2.append(title, inputPublish, buttonPublish, buttonReturn1);
  return section2;
}
myFunction();
const root = document.getElementById('root');
const routes = [
  { path: '/', component: home },
  { path: '/login', component: createLogin },
  { path: '/error', component: error },
  { path: '/register', component: createRegisterForm },
  { path: '/publish', component: publish },
];
const defaultRoute = '/';
function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
navigateTo(window.location.pathname || defaultRoute);
