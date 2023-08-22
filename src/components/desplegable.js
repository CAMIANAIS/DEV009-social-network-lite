export const createDropdownMenu = () => {
    const asideMenu = document.createElement('aside');
    asideMenu.classList.add('sidebar-menu');
    /*const sandwich=document.createElement('img');
    sandwich.src="components/img/bars-solid.svg";
    sandwich.classList.add('img-logo');*/
  
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
   return asideMenu;
}
export default createDropdownMenu;