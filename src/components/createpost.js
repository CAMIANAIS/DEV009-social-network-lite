import { isUserLoggedIn } from './userLoggedIn';

export const createPostModal = () => {
  if (isUserLoggedIn()) {
    // Se crea el modal
    const modal = document.createElement('div');
    modal.className = 'create-post-modal';
 // Crear el contenido del modal
 const content = document.createElement('div');
 content.className = 'modal-content';

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

content.append(inputPost,buttonPost,buttonReturn1);
modal.append(content);
}
return modal;
};
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

