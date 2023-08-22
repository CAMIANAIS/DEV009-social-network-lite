import { login } from "../lib/index.js";
function createLogin(navigateTo){
    const section =document.createElement('section');
    const title=document.createElement('h2');
    const inputEmail=document.createElement('input');
    const inputPass=document.createElement('input');
    const buttonForgotPass=document.createElement('button')
    const buttonLogin= document.createElement('button');
    const buttonReturn =document.createElement('button');
    const background=document.createElement('img');
    background.src="components/img/fondo.jpg";
    const logo=document.createElement('img');
    logo.src="components/img/logo.png";


    inputEmail.classList.add('input-fieldEmail');
    inputPass.classList.add('input-fieldPassword');
    buttonLogin.classList.add('btn');
    buttonReturn.classList.add('btn');
    buttonForgotPass.classList.add('btn');
    background.classList.add('img');
    logo.classList.add('logo');
    
    inputEmail.placeholder='Email';
    inputPass.placeholder='Contraseña';

    title.textContent='Bienvenidx a Arequipa 360';
    buttonLogin.textContent='Ingresar';
    buttonForgotPass.textContent='Olvidaste tu contraseña';
    buttonReturn.textContent='Return to home';

    buttonReturn.addEventListener('click',()=>{
        navigateTo('/');
    });
    
    buttonLogin.addEventListener('click', () => {
        // Obtener los valores del email y la contraseña
        const email = document.querySelector(".input-fieldEmail").value;
        const password = document.querySelector(".input-fieldPassword").value;
  
            const success1 = login(email, password); // Llama a la función de login
              if (success1) {
                alert('Cargando tus preferencias');
                navigateTo('/publish'); // Navegar al muro
              }
             else {
              alert('Error. Verifique su correo o contraseña, por favor');
            }
          });
      
    section.append(title,logo,inputEmail,inputPass,buttonLogin,buttonReturn,buttonForgotPass,background);
    return section;
};
export default createLogin;