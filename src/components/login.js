function login(navigateTo){
    const section =document.createElement('section');
    const title=document.createElement('h2');
    const inputEmail=document.createElement('input');
    const inputPass=document.createElement('input');
    const buttonForgotPass=document.createElement('button')
    const buttonLogin= document.createElement('button');
    const buttonReturn =document.createElement('button');


    inputEmail.classList.add('input-field');
    inputPass.classList.add('input-field');
    buttonLogin.classList.add('btn');
    buttonReturn.classList.add('btn');
    buttonForgotPass.classList.add('btn');

    inputEmail.placeholder='Email';
    inputPass.placeholder='Contraseña'

    title.textContent='Bienvenidx a Arequipa 360';
    buttonLogin.textContent='Ingresar';
    buttonReturn.textContent='Return to home';
    buttonReturn.addEventListener('click',()=>{
        navigateTo('/');
    });
    buttonForgotPass.textContent='Olvidaste tu contraseña'
    
    buttonLogin.addEventListener('click', () => {
        // Obtener los valores del email y la contraseña
        const emailValue = inputEmail.value;
        const passValue = inputPass.value;

        // Guardar los valores en el local storage
        localStorage.setItem('email', emailValue);
        localStorage.setItem('password', passValue);

        // Aquí puedes hacer el proceso de inicio de sesión o lo que necesites con los datos ingresados
    });
    
    section.append(title,inputEmail,inputPass,buttonLogin,buttonReturn,buttonForgotPass);
    return section;

}

export default login;