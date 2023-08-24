import { createPost, editPost, deletePost, getLoggedInUser, getPosts } from '../lib/index.js';
import { UserLogeado } from './boolLoggedIn';

export const createPostModal = () => {
  if (UserLogeado()) {
    const modal = document.createElement('div');
    modal.className = 'create-post-modal';

    const content = document.createElement('div');
    content.className = 'modal-content';

    const inputPost = document.createElement('input');
    inputPost.classList.add('input-field');

    const buttonPost = document.createElement('button');
    buttonPost.classList.add('btn');
    buttonPost.textContent = 'Post';

    const postsList = document.createElement('ul');
    postsList.className = 'posts-list';

    const posts = getPosts();

    posts.forEach((post) => {
      const postItem = document.createElement('li');
      postItem.className = 'li-postComents';

      const postEmail = document.createElement('p');
      postEmail.className = 'post-email';
      postEmail.textContent = post.email;

      const postText = document.createElement('p');
      postText.textContent = post.content;

      const editBtn = document.createElement('img');
      editBtn.src = 'components/img/edit.svg';
      editBtn.classList.add('edit');

      const deleteBtn = document.createElement('img');
      deleteBtn.src = 'components/img/trash-can-regular.svg';
      deleteBtn.classList.add('delete');

      editBtn.addEventListener('click', () => {
        const newContent = prompt('Enter new content:');
        if (newContent !== null) {
          editPost(post.id, newContent);
          postText.textContent = newContent;
        }
      });

      deleteBtn.addEventListener('click', () => {
        const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este comentario?');
        if (confirmDelete) {
          deletePost(post.id);
          postsList.removeChild(postItem);
        }
      });

      postItem.append(postEmail, postText, editBtn, deleteBtn);
      postsList.appendChild(postItem);
    });

    buttonPost.addEventListener('click', () => {
      const userEmail = getLoggedInUser().email;
      const inputValue = inputPost.value;
      createPost(inputValue, userEmail);
      const newPostItem = document.createElement('li');
      // ... Create and append new post elements similar to the code above ...
      postsList.appendChild(newPostItem);
    });

    content.append(inputPost, buttonPost, postsList);
    modal.append(content);

  
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

    return modal;
    
  }
};



