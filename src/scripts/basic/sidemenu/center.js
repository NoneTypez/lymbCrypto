import { buttons } from "../models.js";

class SideMenuNav {
	constructor() {
		this.buttons = Object.keys(buttons.sideMenu.centerBlock);
		this.dropButtons = buttons.sideMenu.subMenu;
		// this.init();
	}

	createUlWithMainButtons() {
		const ul = document.createElement("ul");

		this.buttons.forEach((buttonKey) => {
			const element = buttons.sideMenu.centerBlock[buttonKey];
			ul.appendChild(element);
		});

		return ul;
	}

	init() {
		const block = document.createElement("nav");
		block.classList.add("sidemenu_main");

		const ul = this.createUlWithMainButtons();
		block.appendChild(ul);

		return block;
	}
}

export const centerBlock = new SideMenuNav().init();
