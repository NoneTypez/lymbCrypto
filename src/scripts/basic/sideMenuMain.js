import { sideBarIcons } from "./models";
import { createIcon } from "../utils";

class SideMenuMain {
	constructor(asideElement) {
		this.asideElement = asideElement;
		this.exchangeBtn = this.createExchangeBtn();
		this.projectsBtn = this.createProjectsBtn();
		this.scriptsBtn = this.createScriptsBtn();
		this.tableBtn = this.createTableBtn();
		this.navElement = this.createNav();
		this.buttons = [this.exchangeBtn, this.projectsBtn, this.scriptsBtn, this.tableBtn];
	}

	createNav() {
		// create a <nav> element

		const navElement = document.createElement("nav");
		navElement.classList.add("sidemenu_main");
		navElement.appendChild(this.createListWithButtons());
		return navElement;
	}

	createListWithButtons() {
		// Создаем <ul> элемент
		const uList = document.createElement("ul");

		// Оборачиваем Btn в <li> и добавляем в список
		for (let btn of this.buttons) {
			let li = document.createElement("li");
			li.appendChild(btn);
			uList.appendChild(li);
		}

		return uList;
	}

	createExchangeBtn() {
		const exchangeBtn = createIcon(sideBarIcons.sideMenuMain.exchangeIcon, "Exchange");
		exchangeBtn.classList.add("exchange_btn");
		return exchangeBtn;
	}

	createProjectsBtn() {
		const projectsBtn = createIcon(sideBarIcons.sideMenuMain.projectsIcon, "Projects");
		projectsBtn.classList.add("projects_btn");
		return projectsBtn;
	}

	createScriptsBtn() {
		const scriptsBtn = createIcon(sideBarIcons.sideMenuMain.scriptsIcon, "Scripts");
		scriptsBtn.classList.add("scripts_btn");
		return scriptsBtn;
	}

	createTableBtn() {
		const tableBtn = createIcon(sideBarIcons.sideMenuMain.tableIcon, "Table");
		tableBtn.classList.add("table_btn");
		return tableBtn;
	}

	init() {
		try {
			this.asideElement.appendChild(this.navElement);
		} catch (error) {
			console.log(`Ошибка инициализации блока <nav>: ${error}`);
		}
	}
}
