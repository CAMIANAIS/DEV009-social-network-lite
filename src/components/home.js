function home(navigateTo){

    const section =document.createElement('section');
    const containerHeader =document.createElement('header');
    containerHeader.classList.add('header');

    const title =document.createElement('h1');
    const button =document.createElement('button');
    const button2 =document.createElement('button');
    const background=document.createElement('img');
    background.src="components/img/fondo.jpg";
    
    button.textContent='Ingresar';
    button.addEventListener('click',()=>{
        navigateTo('/login');
    });
    button2.textContent='Registrar';
    button2.addEventListener('click',()=>{
        navigateTo('/register');
    });    
    title.textContent='Bienvenidx';

    button.classList.add('btn1');
    button2.classList.add('btn1');
    background.classList.add('img');

    containerHeader.appendChild(button);
    containerHeader.appendChild(button2);
    section.appendChild(containerHeader);
    section.append(title,background);
    return section;
   
    
}

export default home;