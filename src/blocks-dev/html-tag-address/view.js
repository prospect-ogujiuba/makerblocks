class HtmlTagAddress {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagAddress Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagAddress();
});

export default HtmlTagAddress;
