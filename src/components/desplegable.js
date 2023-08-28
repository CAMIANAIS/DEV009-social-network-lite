export const createDropdownMenu = () => {
  // Crea el elemento de navegación principal
  const nav = document.createElement('nav');
  nav.classList.add('menu');

  // Crea el menú desplegable (sidebar) con los ítems
  const asideMenu = document.createElement('aside');
  asideMenu.classList.add('sidebar-menu');
  asideMenu.innerHTML = `
    <div class="menu-title">Menu</div>
    <ul>
      <li id='home' class='home'>Home</li>
      <li id='search' class='search'>Search</li>
      <li id='notifications' class='notifications'>Notifications</li>
      <li id='profile' class='profile'>Profile</li>
      <li id='configuration' class='configuration'>Configuration</li>
    </ul>
  `;

  // Agrega el menú desplegable al elemento de navegación
  nav.appendChild(asideMenu);

  // Agrega el elemento de navegación al cuerpo del documento
  document.body.appendChild(nav);

  // Maneja el evento de clic en el ícono de hamburguesa para mostrar/ocultar el menú
  const menuTitle = asideMenu.querySelector('.menu-title');
  menuTitle.addEventListener('click', () => {
    asideMenu.classList.toggle('active');
  });

  return {
    navElement: nav,
    asideMenuElement: asideMenu,
  };
};
