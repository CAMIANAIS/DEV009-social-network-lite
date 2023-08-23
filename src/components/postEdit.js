/* import {
    getPosts, editPost, deletePost, getLoggedInUser,
  } from '../lib/index';
  import { showConfirmationModal, showEditModal } from './showCustomEditDeleteComents';
  // import { showCustomAlert } from './showCustomAlert';
  export const openCommentsModal = () => {
    // Se crea el modal
    const modal = document.createElement('div');
    modal.className = 'posts-modal';
    // Crear el contenido del modal
    const content = document.createElement('div');
    content.className = 'modal-content';
    });
    // Lista para los comentarios
    const postsList = document.createElement('ul');
    postsList.className = 'posts-list';
    // Obtener todos los posts
    const posts = getPosts();
    posts.forEach((post) => {
      const currentUserEmail = getLoggedInUser().email;
      const postItem = document.createElement('li');
      postItem.className = 'li-postComents';
      const postEmail = document.createElement('p');
      postEmail.className = 'post-email';
      postEmail.textContent = post.email;
      const postText = document.createElement('p');
      postText.textContent = post.content;
      const editBtn = document.createElement('i');
      editBtn.className = 'comments-regular';
      const deleteBtn = document.createElement('i');
      deleteBtn.className = 'fa-solid fa-trash-can';
      if (currentUserEmail === post.email) {
        editBtn.addEventListener('click', () => {
          showEditModal(post.content, (newContent) => {
            editPost(post.id, newContent);
            postText.textContent = newContent;
          });
        });
        deleteBtn.addEventListener('click', () => {
          showConfirmationModal('¿Estás seguro de que deseas eliminar este comentario?', () => {
            deletePost(post.id);
            postsList.removeChild(postItem);
          });
        });
        postItem.append(postEmail, postText, editBtn, deleteBtn);
      } else {
        postItem.append(postEmail, postText);
      }
      postsList.append(postItem);
    });
    const closeModal = () => {
      document.body.removeChild(modal);
    };
    modal.addEventListener('click', (e) => {
      // Si el clic fue directamente en el modal (y no en alguno de sus hijos),
      // significa que el usuario hizo clic fuera del contenido del modal
      if (e.target === modal) {
        closeModal();
      }
    });
    content.append(closeModalIcon, postsList);
    modal.append(content);
    // Agregar el modal al body
    document.body.append(modal);
  }; */