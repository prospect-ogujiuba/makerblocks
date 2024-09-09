class HtmlTagSection {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagSection Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagSection();
});

export default HtmlTagSection;
