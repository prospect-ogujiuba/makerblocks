class Statica {
	constructor() {
		this.init();
	}

	init() {
		console.log("Statica Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new Statica();
});

export default Statica;
