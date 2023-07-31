import { createPost, deletePost, editPost, getPosts, init, login, register } from "./services";

export const myFunction = () => {
    const loginButton = document.getElementById('btn-login'); // Asigna el ID 'btn-login' al botón de inicio de sesión en tu HTML
    loginButton.addEventListener('click', handleLogin);
    
    function handleLogin() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
    
      // Lógica de inicio de sesión utilizando la función login de services.js
      const loginSuccessful = login(email, password);
    
      if (loginSuccessful) {
        console.log('Inicio de sesión exitoso. Usuario:', JSON.parse(localStorage.getItem('user')));
        // Aquí puedes redirigir al usuario a la página de inicio después del inicio de sesión exitoso
        navigateTo('/inicio'); // Reemplaza '/inicio' con la ruta de la página a la que deseas redirigir al usuario
      } else {
        console.log('Inicio de sesión fallido. El usuario no existe o la contraseña es inválida.');
        // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones en caso de inicio de sesión fallido
      }
    }
  
};