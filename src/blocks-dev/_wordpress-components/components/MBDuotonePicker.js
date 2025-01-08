import { DuotonePicker, DuotoneSwatch } from "@wordpress/components";
import { useState } from "@wordpress/element";

const DUOTONE_PALETTE = [
	{
		colors: ["#8c00b7", "#fcff41"],
		name: "Purple and yellow",
		slug: "purple-yellow",
	},
	{ colors: ["#000097", "#ff4747"], name: "Blue and red", slug: "blue-red" },
];

const COLOR_PALETTE = [
	{ color: "#ff4747", name: "Red", slug: "red" },
	{ color: "#fcff41", name: "Yellow", slug: "yellow" },
	{ color: "#000097", name: "Blue", slug: "blue" },
	{ color: "#8c00b7", name: "Purple", slug: "purple" },
];

function MBDuotonePicker() {
	const [duotone, setDuotone] = useState(["#000000", "#ffffff"]);
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Duotone Picker & Swatch</h2>
			<div>
				<DuotonePicker
					duotonePalette={DUOTONE_PALETTE}
					colorPalette={COLOR_PALETTE}
					value={duotone}
					onChange={setDuotone}
				/>
				<DuotoneSwatch values={duotone} />
			</div>
		</section>
	);
}

export default MBDuotonePicker;
