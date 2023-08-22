import { createDropdownMenu } from './desplegable.js';
function publish(navigateTo) {
    const section3 = document.createElement('section');
    const containerHeader = document.createElement('header');
    containerHeader.classList.add('header');
    const sandwich=document.createElement('img');
    sandwich.src="components/img/bars-solid.svg";
    sandwich.classList.add('img-logo');

    const title = document.createElement('h2');
    const profile=document.createElement('img');
    profile.src="components/img/user1.png";
    profile.classList.add('user1');
    const inputFeed = document.createElement('input');
    


    // Añade clases a los elementos para estilizarlos con CSS
    inputFeed.classList.add('input-field');

    inputFeed.placeholder = 'Ali,cuentanos tu experiencia en el lugar';

    title.textContent = 'Arequipa 360';

    const postDefect = document.createElement('div');
    postDefect.innerHTML = `
      <div class="postDefect">Juan Rocas</div>
        <img src="components/img/user2.png" class="user2" alt="photo-user2">
        <p> Me gusto la experiencia en Uchumayo...ver mas</p>
        <img src="components/img/experience1.jpg" class="exp" alt="exp-user2">
    `;


    sandwich.addEventListener('click', () => {
      const dropdownMenu = createDropdownMenu(); // Use your createDropdownMenu function here
      section3.appendChild(dropdownMenu); // Append the dropdown menu to the section
    
      // Toggle the visibility of the dropdown menu
      dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
    });
    containerHeader.appendChild(sandwich);
    section3.appendChild(containerHeader);
    // Agrega los elementos al section2
    section3.append(title,profile,inputFeed,postDefect);

    return section3;
}

export default publish;

