import { createDropdownMenu } from './desplegable.js';
import imagendesplegable from './img/bars-solid.svg';
import user1 from './img/user1.png';
import user2 from './img/user2.png';
import user3 from './img/user3.png';
import experience1 from './img/experience1.jpg';
import like from './img/like.png';
import { createPostModal } from './createpost.js';
import { createLoginArea } from './loginConfirm.js';

function publish(navigateTo) {
  const section3 = document.createElement('section');
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header');
  const sandwich = document.createElement('img');
  const menuComponents = createDropdownMenu();
  sandwich.src = imagendesplegable;
  sandwich.classList.add('img-logo');
  const title = document.createElement('h2');
  title.textContent = 'Arequipa 360';

  const postStart = document.createElement('div');
  postStart.classList.add('postInput');
  postStart.innerHTML = `

  <img src=${user1} class="user1" alt="user1">
  <input id="inputFeed" class="inputFeed" placeholder="Ali, let us to know about your experience">
  `;

  const postDefect1 = document.createElement('div');
  postDefect1.classList.add('idpost1');
  postDefect1.innerHTML = `
    <div id=1 class=post1>
      <img src=${user2} class="user2" alt="photo-user2">
      <p>Juan Rocas</p>
    </div>
    <div class="postDefect">
      <img src=${experience1} class="exp" alt="exp-user2">
      <p> We had an incredible 25th anniversary trip, planned by Elevate. Though we knew our itinerary, there were surprise experiences along the way as well, like interactions with the native people that were truly special..ver mas</p>
    </div>
    <div class="icono">
      <img id="like" src=${like} class="like" alt="like">
    </div>
  `;

  const postDefect2 = document.createElement('div');
  postDefect2.classList.add('idpost2');
  postDefect2.innerHTML = `
    <div id=2 class=post2>
      <img src=${user3} class="user3" alt="photo-user3">
      <p>Lola Morales</p>
    </div>
    <div class="postDefect">
      <img src=${experience1} class="exp" alt="exp-user2">
      <p> It is difficult to put into word the meaning of our trip to Peru. We feel so blessed to have spent time with so many wonderful people. It was the perfect balance of volunteering, getting to know the Peruvian culture...ver mas</p>
    </div>
    <div class="icono">
      <img id="like" src=${like} class="like" alt="like">
    </div>
  `;
  containerHeader.appendChild(sandwich);
  containerHeader.appendChild(createLoginArea(navigateTo));
  containerHeader.appendChild(menuComponents.navElement);
  section3.appendChild(containerHeader);
  postStart.addEventListener('click', () => {
    createPostModal();
  });
  // Ocultar el menú desplegable por defecto
  sandwich.addEventListener('click', () => {
    // Alternar la clase 'open' para mostrar u ocultar el menú
    menuComponents.asideMenuElement.classList.toggle('open');
  });

  section3.append(postStart, postDefect1, postDefect2);
  return section3;
}
export default publish;
