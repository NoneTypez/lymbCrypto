import { mainValues } from "./models.js";

class Head {
	constructor(stylesPath, titleName) {
		this.stylesPath = stylesPath;
		this.title = titleName;
		this.block = document.createElement("head");
	}

	createMetaCharset() {
		// Создаем meta элемент для charset
		const metaCharset = document.createElement("meta");
		metaCharset.setAttribute("charset", "UTF-8");
		this.block.appendChild(metaCharset);
	}

	createMetaViewport() {
		// Создаем meta элемент для viewport
		const metaViewport = document.createElement("meta");
		metaViewport.name = "viewport";
		metaViewport.content = "width=device-width, initial-scale=1.0";
		this.block.appendChild(metaViewport);
	}

	createTitle() {
		// Создаем элемент <title>
		const titleElement = document.createElement("title");
		titleElement.textContent = this.title;
		this.block.appendChild(titleElement);
	}

	createStylesLink() {
		// Создаем link элемент для стилей
		const linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		linkElement.href = this.stylesPath;
		this.block.appendChild(linkElement);
	}

	init() {
		try {
			this.createMetaCharset();
			this.createMetaViewport();
			this.createTitle();
			this.createStylesLink();
			// document.head.replaceWith(this.block);
			return this.block;
		} catch (error) {
			console.error(`Ошибка инициализации блока HEAD: ${error}`);
		}
	}
}

export const HeadBlock = new Head(mainValues.stylesPath, mainValues.titleName);
