import { EmptyWindow } from "./empty_window";

const db = false;

class Logic {
	constructor() {
		this.empty_window = new EmptyWindow(db);
	}
}
