import { SidemenuHead } from "./sidemenuHead";
import { SideMenuNav } from "./sideMenuNav";
import { SideMenuDown } from "./sideMenuDown";

class sideMenuMain {
	constructor(bodyBlock, sideHead, sideNav, sideDown) {
		this.blocks = [SidemenuHead, SideMenuNav, SideMenuDown];
		this.aside = this.createAsideBlock();
	}

	createTitleBar() {
		const titleBar = document.createElement("div");
		titleBar.id.add("titlebar");
		titleBar.classList.add("titlebar");
		titleBar.innerText("Lymb");
	}
	createAsideBlock() {
		const aside = document.createElement("aside");
		aside.classList.add("container", "sidemenu");
	}

	init() {}
}
