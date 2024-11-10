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

	createSubMenu() {
		const subUl = this.buttons
			.map((btn) => buttons.sideMenu.centerBlock[btn]?.querySelector("ul"))
			.filter((ul) => ul !== null); // Исключаем null значения

		for (let [btn, subMenuItems] of Object.entries(buttons.sideMenu.subMenu)) {
			subUl.forEach((element) => {
				if (element.className.includes(btn)) {
					Object.values(subMenuItems).forEach((item) => {
						element.appendChild(item);
					});
				}
			});
		}
	}

	init() {
		const block = document.createElement("nav");
		block.classList.add("sidemenu_main");

		const ul = this.createUlWithMainButtons();
		block.appendChild(ul);
		this.createSubMenu();
		return block;
	}
}

export const centerBlock = new SideMenuNav().init();
// console.log(centerBlock.querySelector(".exchange_sub_menu"));
