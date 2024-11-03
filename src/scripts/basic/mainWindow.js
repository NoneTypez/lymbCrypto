export class MainWindow {
	constructor() {}
}

{
	/* <div class="sidemenu_head">
      <ul>
        <li>
          <a href="#">
            <img class="logo" src="./public/icons/main_logo.png" alt="Logo" >
          </a>
        </li>
        <li><a href="#">
          <!-- <img class="main_icons" src="./public/icons/home.svg" alt="Home" > -->
          <svg class="main_icons" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
          </svg>
        </a></li>
      </ul>   
    </div> */
}
export class SideMenu {
	constructor() {
		this.mainContainer = document.createElement("aside");
		this.head = new SideMenuHead();
		this.main;
		this.down;
	}
}
