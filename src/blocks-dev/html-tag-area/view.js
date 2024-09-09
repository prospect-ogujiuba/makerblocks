class HtmlTagArea {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagArea Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagArea();
});

export default HtmlTagArea;
