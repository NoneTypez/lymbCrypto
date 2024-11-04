import { sideBarIcons } from "./basic/models";

export function createIcon(iconPath, altText, svgPathData) {
	const anchor = document.createElement("a");
	anchor.href = "#";

	if (svgPathData) {
		// Создаем SVG иконку
		const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svgIcon.setAttribute("class", "main_icons");
		svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		svgIcon.setAttribute("height", sideBarIcons.iconsSize);
		svgIcon.setAttribute("width", sideBarIcons.iconsSize);
		svgIcon.setAttribute("viewBox", "0 -960 960 960");
		svgIcon.setAttribute("fill", "#5f6368");

		const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", svgPathData);

		svgIcon.appendChild(path);
		anchor.appendChild(svgIcon);
	} else if (iconPath) {
		// Создаем <img> иконку
		const img = document.createElement("img");
		img.classList.add("main_icons");
		img.src = iconPath;
		img.alt = altText;
		anchor.appendChild(img);
	}

	return anchor;
}
