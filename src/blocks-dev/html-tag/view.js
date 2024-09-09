class HtmlTag {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTag Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTag();
});

export default HtmlTag;
