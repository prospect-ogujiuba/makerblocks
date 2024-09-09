class HtmlTagAbbr {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagAbbr Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagAbbr();
});

export default HtmlTagAbbr;
