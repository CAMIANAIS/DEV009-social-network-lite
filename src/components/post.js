import { createPost, getLoggedInUser } from '../lib/index';

export const openCommentModal = (post) => {
    // Crear el modal
    const modal = document.createElement('div');
    modal.className = 'comment-modal';

  // Crear contenido del modal
  const content = document.createElement('div');
  content.className = 'content-modal';

const title = document.createElement('h2');
const inputPost = document.createElement('input');
const buttonPost = document.createElement('button');
const buttonReturn1 = document.createElement('button'); // Declare buttonReturn1


// Añade clases a los elementos para estilizarlos con CSS
inputPost.classList.add('input-field');
buttonPost.classList.add('btn');
buttonReturn1.classList.add('btn'); // Add class to buttonReturn1

buttonPost.textContent = 'Publicar';
buttonReturn1.textContent = 'Return to home';

buttonReturn1.addEventListener('click', () => {
    navigateTo('/');
});

/*buttonPost.addEventListener('click', () => {
    // Get the values entered by the user
    const publish = inputPost.value;

    // Create an object to store the user data
    const userData = {
        publish: publish,
    };

    // Convert the userData object to a JSON string and store it in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
});*/

button.addEventListener('click', () => {
    const userEmail = getLoggedInUser().email;
    try {
      const id = createPost(textarea.value, userEmail);
      const recipeComments = localStorage.getItem(`comments_${recipe.id}`);
      if (recipeComments) {
        const comments = JSON.parse(recipeComments);
        comments.ids.push(id);
        localStorage.setItem(`comments_${recipe.id}`, JSON.stringify(comments));
      } else {
        localStorage.setItem(`comments_${recipe.id}`, JSON.stringify({ ids: [id] }));
      }

      content.append(textarea, button);
      modal.append(content);
    
      // Agregar el modal al body
      document.body.append(modal);
    
      // Función para cerrar el modal
      const closeModal = () => {
        document.body.removeChild(modal);
      };
    
      // Escuchar clics en el modal
      modal.addEventListener('click', (e) => {
        // Si el clic fue directamente en el modal (y no en alguno de sus hijos),
        // significa que el usuario hizo clic fuera del contenido del modal
        if (e.target === modal) {
          closeModal();
        }
      });
    };