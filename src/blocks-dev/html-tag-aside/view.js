class HtmlTagAside {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagAside Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagAside();
});

export default HtmlTagAside;
