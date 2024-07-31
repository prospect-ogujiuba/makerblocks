class Starter {
	constructor() {
		this.init();
	}

	init() {
		console.log("Starter Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new Starter();
});

export default Starter;
