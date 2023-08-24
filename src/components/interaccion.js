import { getLoggedInUser } from '../lib/index.js';
import { UserLogeado } from './boolLoggedIn';
import { edittModal } from './editpost.js';

export const handleInteractionPosts = () => {
    if (UserLogeado()) {
    // Obtener el email del usuario logeado
      const userEmail = getLoggedInUser().email;

    // Comments
    const commentIcon = document.createElement('icon');
    commentIcon.className = 'comment';
    commentIcon.addEventListener('click', () => {
      openCommentModal();
    });

    const commentAll = document.createElement('p');
    commentAll.className = 'commentPostAll';
    commentAll.textContent = 'View all comments';
    commentAll.addEventListener('click', () => {
      openCommentsModal();
    });

    // Mostrar información
    const displayInformation = document.createElement('div');
    displayInformation.className = 'display-information-allComents';

    displayInformation.append(commentAll);
    recipeElement.append(displayInformation);
    }
   };