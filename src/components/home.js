function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  const description = document.createElement('p');
  const containerBtn = document.createElement('div');
  const background = document.createElement('img');
  background.src = 'components/img/fondo.jpg';

  button.textContent = 'Login';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });
  button2.textContent = 'Register';
  button2.addEventListener('click', () => {
    navigateTo('/register');
  });
  title.textContent = 'Welcome to Arequipa 360';
  description.innerHTML = `
  <p class="stroked-text"> Arequipa has it all. Yes, absolutely everything you can imagine, you find on the territory of the "White City". History, adventure, fabulous landscapes, wildlife, gastronomy, art and much more.Join us and discover it.</p>
  `;

  containerBtn.classList.add('container-btn');
  description.classList.add('description');
  button.classList.add('btn1');
  button2.classList.add('btn1');
  background.classList.add('img');

  containerBtn.appendChild(button);
  containerBtn.appendChild(button2);
  section.append(title, description, containerBtn, background);
  return section;
}
export default home;
