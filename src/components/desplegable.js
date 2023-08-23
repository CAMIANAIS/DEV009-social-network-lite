export const createDropdownMenu = () => {
  const nav = document.createElement('nav');
  nav.classList.add('menu');

  const div1 = document.createElement('div');
  div1.id = 'icon-menu';
  div1.innerHTML = '<img src="components/img/bars-solid.svg" class="img-logo" alt="desplegable">';

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
  nav.appendChild(div1);
  document.body.appendChild(nav);

  // Funcionalidad para mostrar el menu
  div1.addEventListener('click', () => {
    asideMenu.classList.toggle('open');
  });

  return {
    iconElement: div1,
    navElement: nav,
    asideMenuElement: asideMenu,
  };
};

