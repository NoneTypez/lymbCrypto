import { mainWindowBlock } from "./main_window/mainWindow.js";
import { sidebarMainBlock } from "./sidemenu/sideMenuMain.js";
import { HeadBlock } from "./head.js";

const blocks = [mainWindowBlock, sidebarMainBlock, HeadBlock];

function createTitleBar() {
	const titleBar = document.createElement("div");
	titleBar.id = "titlebar";
	titleBar.classList.add("titlebar");
	titleBar.innerText = "Lymb";

	document.body.appendChild(titleBar);
}

function init() {
	createTitleBar();
	for (let block of blocks) {
		document.body.appendChild(block.block);
	}
}
init();
