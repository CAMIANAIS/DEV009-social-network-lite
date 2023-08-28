/* import { createDropdownMenu } from './desplegable.js'; */
import { createPostModal } from './createpost.js';
import { createLoginArea } from './loginConfirm.js';
/* import { handleInteractionPosts } from './interaccion.js'; */

function publish(navigateTo) {
  const section3 = document.createElement('section');
  const containerHeader = document.createElement('header');
  containerHeader.classList.add('header');
  const sandwich = document.createElement('img');
  /* const menuComponents = createDropdownMenu(); */
  sandwich.src = 'components/img/bars-solid.svg';
  sandwich.classList.add('img-logo');
  const title = document.createElement('h2');
  title.textContent = 'Arequipa 360';

  const postStart = document.createElement('div');
  postStart.classList.add('postInput');
  postStart.innerHTML = `

  <img src="components/img/user1.png" class="user1" alt="user1">
  <input id="inputFeed" class="inputFeed" placeholder="Ali, let us to know about your experience">
  `;

  const postDefect1 = document.createElement('div');
  postDefect1.classList.add('idpost1');
  postDefect1.innerHTML = `
    <div id=1 class=post1>
      <img src="components/img/user2.png" class="user2" alt="photo-user2">
      <p>Juan Rocas</p>
    </div>
    <div class="postDefect">
      <img src="components/img/experience1.jpg" class="exp" alt="exp-user2">
      <p> Me gusto la experiencia en Uchumayo, viaje en familia y...ver mas</p>
    </div>


    `;
  const likeBtn = document.createElement('img');
  likeBtn.src = 'components/img/like.png';
  likeBtn.classList.add('like');

  const postDefect2 = document.createElement('div');
  postDefect2.classList.add('idpost2');
  postDefect2.innerHTML = `
    <div id=2 class=post2>
      <img src="components/img/user3.png" class="user3" alt="photo-user3">
      <p>Lola Morales</p>
    </div>
    <div class="postDefect">
      <img src="components/img/experience1.jpg" class="exp" alt="exp-user2">
      <p> Recomiendo la experiencia en Uchumayo, viaje con amigas y...ver mas</p>
    </div>
    <div class="contenedoriconos">
      <img src="components/img/like.png" class="like" alt="like">
      <img src="components/img/comments-regular.svg" class="comment" alt="comment">
    </div>
  `;
  containerHeader.appendChild(sandwich);
  containerHeader.appendChild(createLoginArea(navigateTo));
  /* containerHeader.appendChild(menuComponents.navElement); */
  section3.appendChild(containerHeader);

  /* likeBtn.addEventListener('click', () => {
    handleInteractionPosts();
  }); */

  postStart.addEventListener('click', () => {
    createPostModal();
  });
  section3.append(postStart, postDefect1, likeBtn, postDefect2);
  return section3;
}
export default publish;
