import { sideHeadBlock } from "./sidemenuHead.js";
import { sideNavBlock } from "./sideMenuNav.js";
import { sideDownBlock } from "./sideMenuDown.js";

class sideMenuMain {
	constructor() {
		this.blocks = [sideHeadBlock.block, sideNavBlock.block, sideDownBlock.block]; // Измените, чтобы использовать свойство `block`
		this.block = this.createAsideBlock();
		this.init();
	}

	createAsideBlock() {
		const aside = document.createElement("aside");
		aside.classList.add("container", "sidemenu");
		return aside;
	}

	init() {
		for (let block of this.blocks) {
			this.block.appendChild(block); // Добавляем блоки в aside
		}
		document.body.appendChild(this.block); // Не забудьте добавить aside на страницу
	}
}

export const sidebarMainBlock = new sideMenuMain();
