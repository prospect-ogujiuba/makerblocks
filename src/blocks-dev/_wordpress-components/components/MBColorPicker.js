import { ColorPicker } from "@wordpress/components";
import { useState } from "@wordpress/element";

function MBColorPicker() {
	const [color, setColor] = useState("#ffffff"); 

	const handleColorChange = (newColor) => {
		setColor(newColor);
		console.log("Selected color:", newColor);
	};

	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Color Picker</h2>
			{/* <ColorPicker color={color} onChange={handleColorChange} /> */}
			<p className="bg-red-500 p-4 rounded-md text-white font-bold">
				Issue to fix - Causing blank screen on backend/Editor
			</p>
		</section>
	);
}

export default MBColorPicker;
