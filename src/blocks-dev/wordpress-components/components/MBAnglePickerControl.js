import { useState } from "react";
import { AnglePickerControl } from "@wordpress/components";

function MBAnglePickerControl() {
	const [angle, setAngle] = useState(0);

	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Angle Picker Control</h2>
			<AnglePickerControl value={angle} onChange={setAngle} />
		</section>
	);
}

export default MBAnglePickerControl;
