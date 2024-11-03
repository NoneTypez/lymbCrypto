class Head {
	constructor(stylesPath, titleName) {
		this.stylesPath = stylesPath;
		this.title = titleName;
		this.HEAD = this.createHeadBlock(); // Создаем и сохраняем <head> элемент

		try {
			this.init();
		} catch (error) {
			console.error(`Ошибка инициализации блока HEAD: ${error}`);
		}
	}

	createHeadBlock() {
		// Создаем элемент <head>
		const headElement = document.createElement("head");
		return headElement;
	}

	createMetaCharset() {
		// Создаем meta элемент для charset
		const metaCharset = document.createElement("meta");
		metaCharset.setAttribute("charset", "UTF-8");
		this.HEAD.appendChild(metaCharset);
	}

	createMetaViewport() {
		// Создаем meta элемент для viewport
		const metaViewport = document.createElement("meta");
		metaViewport.name = "viewport";
		metaViewport.content = "width=device-width, initial-scale=1.0";
		this.HEAD.appendChild(metaViewport);
	}

	createTitle() {
		// Создаем элемент <title>
		const titleElement = document.createElement("title");
		titleElement.textContent = this.title;
		this.HEAD.appendChild(titleElement);
	}

	createStylesLink() {
		// Создаем link элемент для стилей
		const linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		linkElement.href = this.stylesPath;
		this.HEAD.appendChild(linkElement);
	}

	init() {
		// Добавляем все элементы в контейнер head
		this.createMetaCharset();
		this.createMetaViewport();
		this.createTitle();
		this.createStylesLink();

		// Добавляем созданный элемент head в документ
		document.head.replaceWith(this.HEAD);
	}
}

// Использование:
const stylesPath = "styles/main.css";
const titleName = "Lymb";

export const HeadBlock = new Head(stylesPath, titleName);
