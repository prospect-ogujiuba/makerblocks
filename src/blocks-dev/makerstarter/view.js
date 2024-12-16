class ATSFlow {
	constructor() {
		this.init();
	}

	init() {
		console.log("ATSFlow Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new ATSFlow();
});

export default ATSFlow;
