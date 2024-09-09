class HtmlTagA {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagA Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagA();
});

export default HtmlTagA;
