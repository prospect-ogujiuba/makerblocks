import { ColorPalette } from "@wordpress/components";
import { useState } from "@wordpress/element";

function MBColorPalette() {
	
	const [selectedColor1, setSelectedColor1] = useState("#ffcc33");
	const [selectedColor2, setSelectedColor2] = useState("#f00");

	// Color options for the palettes
	const colors1 = [
		{ name: "red", color: "#f00" },
		{ name: "white", color: "#fff" },
		{ name: "blue", color: "#00f" },
	];

	const colors2 = [
		{
			colors: [
				{ color: "#f00", name: "Red" },
				{ color: "#ff0", name: "Yellow" },
				{ color: "#00f", name: "Blue" },
			],
			name: "Primary colors",
		},
		{
			colors: [
				{ color: "#f60", name: "Orange" },
				{ color: "#0f0", name: "Green" },
				{ color: "#60f", name: "Purple" },
			],
			name: "Secondary colors",
		},
	];

	return (
		<div>
			<h2 className="text-2xl md:text-4xl mb-4">Color Palette</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
				<div>
					<h3 className="text-xl mb-2">Simple Palette</h3>
					<ColorPalette
						colors={colors1}
						value={selectedColor1}
						onChange={(color) => setSelectedColor1(color)}
					/>
				</div>
				<div>
					<h3 className="text-xl mb-2">Categorized Palette</h3>
					<ColorPalette
						colors={colors2}
						value={selectedColor2}
						onChange={(color) => setSelectedColor2(color)}
					/>
				</div>
			</div>
		</div>
	);
}

export default MBColorPalette;
