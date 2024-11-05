import { createIcon } from "../../utils.js";
import { sideBarIcons } from "../models.js";

class sideMenuDown {
	constructor() {
		this.settingsBtn = this.createSettingsBtn();
		this.logBtn = this.createLogBtn();
		this.infoBtn = this.createInfoBtn();
		this.buttons = [this.settingsBtn, this.logBtn, this.infoBtn];
		this.list = this.createList();
		this.block = this.createDivBlock();
	}

	createLogBtn() {
		const logBtn = createIcon(sideBarIcons.sidemenuDown.logIcon);
		logBtn.classList.add("log_btn");
		return logBtn;
	}

	createInfoBtn() {
		const infoBtn = createIcon(sideBarIcons.sidemenuDown.infoIcon);
		infoBtn.classList.add("info_btn");

		return infoBtn;
	}

	createSettingsBtn() {
		const settingsBtn = createIcon(sideBarIcons.sidemenuDown.settingsIcon);
		settingsBtn.classList.add("settings_btn");

		return settingsBtn;
	}

	createList() {
		const uList = document.createElement("ul");

		for (let btn of this.buttons) {
			let li = document.createElement("li");
			li.appendChild(btn);
			uList.appendChild(li);
		}

		return uList;
	}

	createDivBlock() {
		// create an element <div> with class "sidemenu_down"
		const div = document.createElement("div");
		div.classList.add("sidemenu_down");

		// add the already created list to <div> element
		div.appendChild(this.list);

		return div;
	}
}

export const sideDownBlock = new sideMenuDown();
