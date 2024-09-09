class HtmlTagBase {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagBase Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagBase();
});

export default HtmlTagBase;
