import { createIcon } from "../../utils";
import { sideBarIcons } from "../models";

export class sideMenuDown {
	constructor(asideBlock) {
		this.asideBlock = asideBlock;
		this.settingsBtn = this.createSettingsBtn();
		this.logBtn = this.createLogBtn();
		this.infoBtn = this.createInfoBtn();
		this.list = this.createList();
		this.buttons = [this.settingsBtn, this.logBtn, this.infoBtn];
		this.div = this.createDivBlock();
		this.init();
	}

	createLogBtn() {
		const logBtn = createIcon(sideBarIcons.sidemenuDown.logIcon, "Log");
		logBtn.classList.add("log_btn");
		return logBtn;
	}

	createInfoBtn() {
		const infoBtn = createIcon(sideBarIcons.sidemenuDown.infoIcon, "Info");
		infoBtn.classList.add("info_btn");

		return infoBtn;
	}

	createSettingsBtn() {
		const settingsBtn = createIcon(sideBarIcons.sidemenuDown.settingsBtn, "Settings");
		dashboardBtn.classList.add("settings_btn");

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

		// add list to <div> element
		div.appendChild(this.createList());

		return div;
	}

	init() {
		try {
			this.asideBlock.appendChild(this.div);
		} catch (error) {
			console.log(`Ошибка инициализации блока sidemenuDown: ${error}`);
		}
	}
}
