class MakerBlock {
	constructor() {
		this.init();
	}

	init() {
		console.log("Hey People");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new MakerBlock();
});

export default MakerBlock;
