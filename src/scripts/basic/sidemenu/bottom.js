import { buttons } from "../models.js";

class sideMenuDown {
	constructor() {
		this.buttons = Object.keys(buttons.sideMenu.bottomBlock);
		this.dropButtons = buttons.sideMenu.subMenu;
		// this.init();
	}

	createUlWithMainButtons() {
		const ul = document.createElement("ul");

		this.buttons.forEach((buttonKey) => {
			const element = buttons.sideMenu.bottomBlock[buttonKey];
			ul.appendChild(element);
		});

		return ul;
	}

	init() {
		const block = document.createElement("div");
		block.classList.add("sidemenu_down");

		const ul = this.createUlWithMainButtons();
		block.appendChild(ul);

		return block;
	}
}

export const bottomBlock = new sideMenuDown().init();
