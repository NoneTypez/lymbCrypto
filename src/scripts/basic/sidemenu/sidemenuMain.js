import { sideHeadBlock } from "./sidemenuHead.js";
import { sideNavBlock } from "./sideMenuNav.js";
import { sideDownBlock } from "./sideMenuDown.js";

class sideMenuMain {
	constructor() {
		this.titlebar = this.createTitleBar();
		this.blocks = [this.titlebar, sideHeadBlock, sideNavBlock, sideDownBlock];
		this.aside = this.createAsideBlock();
	}

	createTitleBar() {
		const titleBar = document.createElement("div");
		titleBar.id = "titlebar";
		titleBar.classList.add("titlebar");
		titleBar.innerText = "Lymb";

		return titleBar;
	}
	createAsideBlock() {
		const aside = document.createElement("aside");
		aside.classList.add("container", "sidemenu");

		return aside;
	}

	init() {
		for (let block of this.blocks) {
			this.aside.appendChild(block);
		}
	}
}

export const sidebarMainBlock = new sideMenuMain();
