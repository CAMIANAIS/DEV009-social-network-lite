import logoutimg from './img/log-out.svg';
import { UserLogeado } from './boolLoggedIn';
import { logout } from '../lib/index';

const handleLoginClick = (event, navigateTo) => {
  event.preventDefault();
  if (UserLogeado()) {
    logout();
    navigateTo('/');
  } else {
    navigateTo('/login');
  }
};
export const createLoginArea = (navigateTo) => {
  const login = document.createElement('div');
  login.classList.add('login');

  const div4 = document.createElement('img');
  div4.src = logoutimg;
  div4.classList.add('log-out');

  const loginLink = document.createElement('a');
  loginLink.id = 'login-link';
  loginLink.href = '';

  const updateLoginLink = () => {
    if (UserLogeado()) {
      loginLink.innerHTML = 'Logout';
    } else {
      loginLink.innerHTML = 'Login';
    }
  };

  updateLoginLink();

  div4.addEventListener('click', (event) => handleLoginClick(event, navigateTo));

  login.appendChild(div4);
  login.appendChild(loginLink);
  return login;
};
