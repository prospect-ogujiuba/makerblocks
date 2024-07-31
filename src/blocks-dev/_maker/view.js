class MakerBlock {
	constructor() {
		this.init();
	}

	init() {
		console.log("Maker Block Initialized");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new MakerBlock();
});

export default MakerBlock;
