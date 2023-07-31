function register(navigateTo){
    const section1 =document.createElement('section');
    const title=document.createElement('h2');
    const inputName=document.createElement('input');
    const inputApellidos=document.createElement('input');
    const inputNacimiento=document.createElement('input');
    const inputEmail=document.createElement('input');
    const inputPass=document.createElement('input');
    const inputconfirmPass=document.createElement('input');
    const buttonRegister= document.createElement('button');
    const buttonReturn1 =document.createElement('button');

    // Añade clases a los elementos para estilizarlos con CSS
    inputName.classList.add('input-field');
    inputApellidos.classList.add('input-field');
    inputNacimiento.classList.add('input-field');
    inputEmail.classList.add('input-field');
    inputPass.classList.add('input-field');
    inputconfirmPass.classList.add('input-field');
    buttonRegister.classList.add('btn');
    buttonReturn1.classList.add('btn');

    inputName.placeholder='Nombres';
    inputApellidos.placeholder='Apellidos';
    inputNacimiento.placeholder='Fecha de Nacimiento dd/mm/aaaa';
    inputEmail.placeholder='Email';
    inputPass.placeholder='Contraseña';
    inputconfirmPass.placeholder='Confirmar Contraseña';

    title.textContent='Bienvenidx a Arequipa 360';
    buttonRegister.textContent='Registrarse';
    buttonReturn1.textContent='Return to home';
    buttonReturn1.addEventListener('click',()=>{
        navigateTo('/');
    });

    
    buttonRegister.addEventListener('click', () => {
        // Get the values entered by the user
        const name = inputName.value;
        const apellidos = inputApellidos.value;
        const nacimiento = inputNacimiento.value;
        const email = inputEmail.value;
        const password = inputPass.value;

        // Create an object to store the user data
        const userData = {
            name: name,
            apellidos: apellidos,
            nacimiento: nacimiento,
            email: email,
            password: password
        };
    
        // Convert the userData object to a JSON string and store it in local storage
        localStorage.setItem('userData', JSON.stringify(userData));
    });
    section1.append(title,inputName,inputApellidos,inputNacimiento,inputEmail,inputPass,inputconfirmPass,buttonRegister,buttonReturn1);
    return section1;
}

export default register;