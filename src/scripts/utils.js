import { sideBarIcons } from "./basic/models.js";

export function createIcon(svgPathData, size = sideBarIcons.iconsSize, fill = "#5f6368") {
	const anchor = document.createElement("a");
	anchor.href = "#";

	// Создаем SVG иконку
	const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgIcon.setAttribute("class", "main_icons");
	svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgIcon.setAttribute("height", size);
	svgIcon.setAttribute("width", size);
	svgIcon.setAttribute("viewBox", "0 -960 960 960");
	svgIcon.setAttribute("fill", fill); // Можно задать кастомный цвет для SVG

	const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute("d", svgPathData);

	svgIcon.appendChild(path);
	anchor.appendChild(svgIcon);

	return anchor;
}
