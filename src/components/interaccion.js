/* import { getLoggedInUser } from '../lib/index.js';
import { UserLogeado } from './boolLoggedIn';

export const handleInteractionPosts = () => {
  if (UserLogeado()) {
    const userEmail = getLoggedInUser().email;

    // Recorre los posts y agrega interacciones a cada uno
    posts.forEach(() => {
      const likesCount = document.createElement('span');
      likesCount.textContent = `${post.likes.length} Likes`;

      const likeBtn = document.createElement('img');
      likeBtn.src = 'components/img/like.png';
      likeBtn.classList.add('like');

      if (post.likes.includes(userEmail)) {
        likeBtn.classList.add('active');
      }

      likeBtn.addEventListener('click', () => {
        if (likeBtn.classList.contains('active')) {
          likeBtn.classList.remove('active');

          const index = post.likes.indexOf(userEmail);
          if (index !== -1) post.likes.splice(index, 1);
        } else {
          likeBtn.classList.add('active');
          post.likes.push(userEmail);
        }

        localStorage.setItem(`postLikes_${post.id}`, JSON.stringify(post.likes));
        likesCount.textContent = `${post.likes.length} Likes`;
      });

      const iconContainer = document.createElement('div');
      iconContainer.className = 'icons-container-likes';

      const displayInformation = document.createElement('div');
      displayInformation.className = 'display-information';

      iconContainer.appendChild(likeBtn);
      displayInformation.appendChild(likesCount);
    });
  }
}; */
