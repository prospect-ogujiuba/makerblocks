class MakerStarterApp {
	constructor() {
		this.init();
	}

	init() {
		console.log("MakerStarterApp Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new MakerStarterApp();
});

export default MakerStarterApp;
