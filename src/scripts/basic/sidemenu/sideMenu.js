import { topBlock } from "./top.js";
import { centerBlock } from "./center.js";
import { bottomBlock } from "./bottom.js";

export function sidebarInit() {
	const aside = document.createElement("aside");
	aside.classList.add("container", "sidemenu");

	{
		aside.appendChild(topBlock);
		aside.appendChild(centerBlock);
		aside.appendChild(bottomBlock);
	}

	return aside;
}
