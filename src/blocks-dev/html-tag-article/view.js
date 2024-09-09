class HtmlTagArticle {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagArticle Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagArticle();
});

export default HtmlTagArticle;
