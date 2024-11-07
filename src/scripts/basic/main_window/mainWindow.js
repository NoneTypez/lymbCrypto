class MainWindow {
	constructor(body = null) {
		this.mainBlock = this.createMainBlock();
		this.block = this.createDivBlock();
		this.footer = this.createFooter();
	}

	createMainBlock() {
		const mainBlock = document.createElement("main");
		mainBlock.classList.add("container", "mainwindow");
		mainBlock.appendChild(this.createDivBlock());
		mainBlock.appendChild(this.createFooter());

		return mainBlock;
	}
	createDivBlock() {
		const divBlock = document.createElement("div");

		return divBlock;
	}
	createFooter() {
		const footer = document.createElement("footer");

		return footer;
	}

	init() {
		if (this.body) {
			this.body.appendChild(this.mainBlock);
		}
	}
}

export const mainWindowBlock = new MainWindow();
