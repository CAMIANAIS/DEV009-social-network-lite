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
  div4.src = 'components/img/log-out.svg';
  div4.classList.add('like');

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

  loginLink.addEventListener('click', (event) => handleLoginClick(event, navigateTo));

  login.append(div4, loginLink);
  return login;
};
