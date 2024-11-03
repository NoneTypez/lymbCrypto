export function createSvgIcon(svgPath) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("class", "main_icons");
	svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svg.setAttribute("height", "24px");
	svg.setAttribute("width", "24px");
	svg.setAttribute("viewBox", "0 -960 960 960");
	svg.setAttribute("fill", "#5f6368");

	const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute("d", svgPath);

	svg.appendChild(path);
	return svg;
}
