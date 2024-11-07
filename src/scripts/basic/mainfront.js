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
		document.head.replaceWith(HeadBlock);
		document.body.appendChild(sidebarInit());
		document.body.appendChild(mainWindowBlock);
	}
}
init();
