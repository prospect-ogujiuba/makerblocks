class HtmlTagDiv {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagDiv Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagDiv();
});

export default HtmlTagDiv;
