class HtmlTagAudio {
	constructor() {
		this.init();
	}

	init() {
		console.log("HtmlTagAudio Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new HtmlTagAudio();
});

export default HtmlTagAudio;
