function publish(navigateTo) {
    const section2 = document.createElement('section');
    section2.style.backgroundColor = '#D9D9D9';

    const containerHeader = document.createElement('header');
    containerHeader.classList.add('header');
   

    const title = document.createElement('h2');
    const inputPublish = document.createElement('input');
    const buttonPublish = document.createElement('button');
    const buttonReturn1 = document.createElement('button'); // Declare buttonReturn1
    const sandwich=document.createElement('img');
    sandwich.src="components/img/bars-solid.svg";
    const parrafo = document.createElement('p');

    // Añade clases a los elementos para estilizarlos con CSS
    inputPublish.classList.add('input-field');
    buttonPublish.classList.add('btn');
    buttonReturn1.classList.add('btn'); // Add class to buttonReturn1
    sandwich.classList.add('icon');

    inputPublish.placeholder = 'Publicacion';

    title.textContent = 'Arequipa 360';
    buttonPublish.textContent = 'Publicar';
    buttonReturn1.textContent = 'Return to home';

    buttonReturn1.addEventListener('click', () => {
        navigateTo('/');
    });

    buttonPublish.addEventListener('click', () => {
        // Get the values entered by the user
        const publish = inputPublish.value;

        // Create an object to store the user data
        const userData = {
            publish: publish,
        };

        // Convert the userData object to a JSON string and store it in local storage
        localStorage.setItem('userData', JSON.stringify(userData));
    });
    containerHeader.appendChild(sandwich);
    section2.appendChild(containerHeader);
    // Agrega los elementos al section2
    section2.append(title, inputPublish, buttonPublish, buttonReturn1);

    return section2;
}

export default publish;
