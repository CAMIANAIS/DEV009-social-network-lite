function createLogin(navigateTo){
    const section =document.createElement('section');
    const formContainer =document.createElement('section');
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


    inputEmail.classList.add('input-field');
    inputPass.classList.add('input-field');
    buttonLogin.classList.add('btn');
    buttonReturn.classList.add('btn');
    buttonForgotPass.classList.add('btn');
    background.classList.add('img');
    logo.classList.add('logo');
    formContainer.classList.add('container');
    
    inputEmail.placeholder='Email';
    inputPass.placeholder='Contraseña';

    title.textContent='Bienvenidx a Arequipa 360';
    buttonLogin.textContent='Ingresar';
    buttonLogin.addEventListener('click',()=>{
        navigateTo('/publish');
    });
    buttonReturn.textContent='Return to home';
    buttonReturn.addEventListener('click',()=>{
        navigateTo('/');
    });
    buttonForgotPass.textContent='Olvidaste tu contraseña'
    
    buttonLogin.addEventListener('click', () => {
        // Obtener los valores del email y la contraseña
        const email = inputEmail.value;
        const password = inputPass.value;

        // Create an object to store the user data
        const userData = {
            email: email,
            password: password
        };

        // Convert the userData object to a JSON string and store it in local storage
        localStorage.setItem('userData', JSON.stringify(userData));
    });

   
    section.appendChild(formContainer);
    section.append(title,logo,inputEmail,inputPass,buttonLogin,buttonReturn,buttonForgotPass,background);
    return section;

}

export default createLogin;