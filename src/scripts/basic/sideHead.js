import { createSvgIcon } from "../utils";
import { globalModel } from "./models";

export class SideMenuHead {
	constructor() {
		this.mainDiv = document.createElement("div");
		this.menuList = this.init();
		this.imgButton = document.createElement("li");
		this.dashboardBtn = document.createElement("a");
	}

	init() {
		this.mainDiv.classList.add("sidemenu-head");
		this.mainDiv.appendChild(this.menuList);
		// Создаем контейнер ul
		const ul = document.createElement("ul");

		// Первый пункт списка с логотипом
		const logoLink = document.createElement("a");
		logoLink.href = "#";

		const logoImg = document.createElement("img");
		logoImg.classList.add("logo");
		logoImg.src = "./public/icons/main_logo.png";
		logoImg.alt = "Logo";
		logoLink.appendChild(logoImg);
		this.imgButton.appendChild(logoLink);

		// Второй пункт списка с иконкой (SVG)
		const iconItem = document.createElement("li");
		this.dashboardBtn.href = "#";

		// Вставляем SVG иконку
		const svgPath = globalModel.body.aside.sideMenuHead[0].svgPath;
		const svgIcon = createSvgIcon(svgPath);

		this.dashboardBtn.appendChild(svgIcon);
		iconItem.appendChild(this.dashboardBtn);

		// Добавляем элементы в ul
		ul.appendChild(this.imgButton);
		ul.appendChild(iconItem);

		return ul;
	}
}
