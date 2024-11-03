import { sideBarIcons } from "./iconsModel";
import { createIcon } from "../utils";

class SideMenuHead {
	constructor(asideBlock) {
		this.asideBlock = asideBlock;
		this.div = this.createDivBlock();
		this.logo = sideBarIcons.sidemenu_head.logo;
		this.dashboardBtn = this.createDashboardButton();
		try {
			this.init();
		} catch (error) {
			console.log(`Ошибка инициализации блока sidemenuHead: ${error}`);
		}
	}

	createDivBlock() {
		// Создаем элемент <div> с классом "sidemenu_head"
		const div = document.createElement("div");
		div.classList.add("sidemenu_head");

		// Добавляем список в элемент div
		div.appendChild(this.createList());

		return div;
	}

	createList() {
		// Создаем <ul> элемент
		const uList = document.createElement("ul");

		// Добавляем элементы списка в ul
		uList.appendChild(this.createLogoItem());

		// Оборачиваем dashboardBtn в <li> и добавляем в список
		const dashboardItem = document.createElement("li");
		dashboardItem.appendChild(this.dashboardBtn);
		uList.appendChild(dashboardItem);

		return uList;
	}

	createLogoItem() {
		// Создаем элемент списка для логотипа
		const listItem = document.createElement("li");
		const anchor = document.createElement("a");
		anchor.href = "#";

		const img = document.createElement("img");
		img.classList.add("logo");
		img.src = this.logo;
		img.alt = "Logo";

		anchor.appendChild(img);
		listItem.appendChild(anchor);

		return listItem;
	}

	createDashboardButton() {
		// Создаем иконку для кнопки Dashboard с необходимыми классами
		const dashboardBtn = createIcon(sideBarIcons.sidemenu_head.dashboardIcon, "Dashboard");
		dashboardBtn.classList.add("dashboard_btn");
		return dashboardBtn;
	}

	init() {
		// Добавляем созданный div элемент в asideBlock
		this.asideBlock.appendChild(this.div);
	}
}
