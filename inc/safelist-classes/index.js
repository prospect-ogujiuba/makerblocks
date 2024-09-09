const safelistClasses = [
	...require("./accessibility"),
	...require("./backgrounds"),
	...require("./borders"),
	...require("./effects"),
	...require("./filters"),
	...require("./flexbox-grid"),
	...require("./interactivity"),
	...require("./layout"),
	...require("./sizing"),
	...require("./spacing"),
	...require("./svg"),
	...require("./tables"),
	...require("./transforms"),
	...require("./transitions-animations"),
	...require("./typography"),
	// Add more module names here if needed
];

module.exports = safelistClasses;
