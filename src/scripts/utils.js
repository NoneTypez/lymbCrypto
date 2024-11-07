import { sideBarIcons } from "./basic/models.js";

export function createMainButton(
	svgPathData,
	size = sideBarIcons.iconsSize,
	fill = "#5f6368",
	buttonClassName = null,
	subMenuUlClassName = null
) {
	/*Function is create a <a> element with button, wrap this element 
	in <li> and add an elment <ul> with custom classname for submenu
	*/
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
	if (buttonClassName) {
		anchor.classList.add(buttonClassName);
	}
	const li = document.createElement("li");

	if (subMenuUlClassName) {
		const subUl = document.createElement("ul");
		subUl.classList.add(subMenuUlClassName);
		li.appendChild(subUl);
	}
	li.appendChild(anchor);

	return li;
}

export function createSubButton(text, className) {
	const li = document.createElement("li");

	const anchor = document.createElement("a");
	anchor.href = "#";
	anchor.text = text;
	anchor.classList.add(className);
	li.appendChild(anchor);

	return li;
}

export function createliWithUl(className = null) {}
export function createList(className = null) {
	const ul = document.createElement("ul");
	ul.classList.add(className);
}
export function createButton() {}
