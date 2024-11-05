import { mainWindowBlock } from "./main_window/mainWindow.js";
import { sidebarMainBlock } from "./sidemenu/sideMenuMain.js";
import { HeadBlock } from "./head.js";

const blocks = [mainWindowBlock, sidebarMainBlock, HeadBlock];

function mainFront() {
	for (let block of blocks) {
		document.body.appendChild(block.block);
	}
}
