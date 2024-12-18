import { sideBarIcons } from "./basic/models.js";

export function createMainButton(svgPathData, buttonClassName = null, subMenuUlClassName = null) {
	/*Function is create a <a> element with button, wrap this element 
	in <li> and add an elment <ul> with custom classname for submenu
	*/
	const anchor = document.createElement("a");
	anchor.href = "#";

	anchor.appendChild(createSvgIcon(svgPathData));
	if (buttonClassName) {
		anchor.classList.add(buttonClassName);
	}
	const li = document.createElement("li");

	{
		if (subMenuUlClassName) {
			const subUl = document.createElement("ul");
			subUl.classList.add(subMenuUlClassName);
			li.appendChild(subUl);
			const subli = document.createElement("li");

			const subanchor = document.createElement("a");
			subanchor.href = "#";
			// subanchor.text = text;
			// subanchor.classList.add(className);
			// subli.appendChild(anchor);
		}
	}
	li.appendChild(anchor);
	return li;
}

export function createSvgIcon(svgPathData) {
	// Создаем SVG иконку
	const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgIcon.setAttribute("class", "main_icons");
	svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgIcon.setAttribute("height", sideBarIcons.iconsSize);
	svgIcon.setAttribute("width", sideBarIcons.iconsSize);
	svgIcon.setAttribute("viewBox", "0 -960 960 960");
	svgIcon.setAttribute("fill", "5f6368"); // Можно задать кастомный цвет для SVG

	const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute("d", svgPathData);

	svgIcon.appendChild(path);
	return svgIcon;
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

export function createLogoItem(src) {
	// Создаем элемент списка для логотипа
	const li = document.createElement("li");
	const anchor = document.createElement("a");
	anchor.href = "#";

	const img = document.createElement("img");
	img.classList.add("logo");
	img.src = src;
	img.alt = "Logo";

	anchor.appendChild(img);
	li.appendChild(anchor);

	return li;
}

export function createliWithUl(className = null) {}
export function createList(className = null) {
	const ul = document.createElement("ul");
	ul.classList.add(className);
}
export function createButton() {}
