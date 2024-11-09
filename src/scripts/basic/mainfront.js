import { mainWindowBlock } from "./main_window/mainWindow.js";
import { sidebarInit } from "./sidemenu/sideMenu.js";
import { HeadBlock } from "./head.js";

function createTitleBar() {
	const titleBar = document.createElement("div");
	titleBar.id = "titlebar";
	titleBar.classList.add("titlebar");
	titleBar.innerText = "Lymb";

	document.body.appendChild(titleBar);
}

function init() {
	{
		createTitleBar();
		document.head.replaceWith(HeadBlock.init());
		document.body.appendChild(sidebarInit());
		document.body.appendChild(mainWindowBlock);
	}
	// document.addEventListener("DOMContentLoaded", function () {
	// 	const dashboardSubMenu = document.querySelector(".dashboard_sub_menu");
	// 	console.log(dashboardSubMenu); // Должен вернуть элемент или `null` при отсутствии
	// });

	const dashboardSubMenu = document.querySelector(".dashboard_sub_menu");
	console.log(dashboardSubMenu);
}
init();
