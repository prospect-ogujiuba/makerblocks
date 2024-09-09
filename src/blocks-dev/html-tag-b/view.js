class HtmlTagB {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagB Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagB();
});

export default HtmlTagB;
