import { sideBarIcons } from "../models.js";
import { buttons } from "../models.js";

class SideMenuHead {
	constructor() {
		// this.init();
	}

	init() {
		const block = document.createElement("div");
		block.classList.add("sidemenu_head");

		const ul = document.createElement("ul");
		ul.classList.add("dashboardUl");

		ul.appendChild(sideBarIcons.top.logo);
		ul.appendChild(buttons.sideMenu.topBlock.dashboardBtn);
		block.appendChild(ul);
		return block;
	}
}

export const topBlock = new SideMenuHead().init();
