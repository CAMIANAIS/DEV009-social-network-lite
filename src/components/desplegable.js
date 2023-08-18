import createRegisterForm from './createRegisterForm';
import publishIcon from './components/img/'; // Reemplaza con la ruta correcta

// ... Código anterior ...

const nav = document.createElement('nav');
const dropdownButton = document.createElement('button');
dropdownButton.innerHTML = `<img src="${publishIcon}" alt="Publish Icon"> Menú`; // Agrega el ícono
dropdownButton.classList.add('dropdown-button'); // Agrega una clase para estilos

// ... Código anterior ...

document.body.appendChild(header);
document.body.appendChild(mainContent);
