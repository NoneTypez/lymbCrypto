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
		const dashboardSubMenu = document.querySelector(".dashboard_sub_menu");
		const exchangeSubMenu = document.querySelector(".exchange_sub_menu");
		const projectsSubMenu = document.querySelector(".projects_sub_menu");
		const scriptsSubMenu = document.querySelector(".scripts_sub_menu");
		const tableSubMenu = document.querySelector(".table_sub_menu");
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
