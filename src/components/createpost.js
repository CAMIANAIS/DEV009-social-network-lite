import {  createPost, getLoggedInUser } from '../lib/index.js'; 


export const createPostModal = () => {
    // Se crea el modal
    const modal = document.createElement('div');
    modal.className = 'create-post-modal';
    // Crear el contenido del modal
    const content = document.createElement('div');
    content.className = 'modal-content';
    const inputPost = document.createElement('input');
    const buttonPost = document.createElement('button');
    // Añade clases a los elementos para estilizarlos con CSS
    inputPost.classList.add('input-field');
    buttonPost.classList.add('btn');
    buttonPost.textContent = 'Post';

    buttonPost.addEventListener('click', () => {
      const userEmail = getLoggedInUser().email;
      const inputValue = inputPost.value;
      createPost(inputValue, userEmail); //Usamos la función createPost con el valor del input y el email del usuario
    });

    content.append(inputPost, buttonPost);
    modal.append(content);
    document.body.appendChild(modal);

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

    return modal;
  }
;


/* buttonPost.addEventListener('click', () => {
    // Get the values entered by the user
    const publish = inputPost.value;
    // Create an object to store the user data
    const userData = {
        publish: publish,
    };
    // Convert the userData object to a JSON string and store it in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
}); */

