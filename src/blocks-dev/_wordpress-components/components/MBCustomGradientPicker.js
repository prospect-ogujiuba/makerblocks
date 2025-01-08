import { CustomGradientPicker } from "@wordpress/components";
import { useState } from "@wordpress/element";

function MBCustomGradientPicker() {

	const [gradient, setGradient] = useState();
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Custom Gradient Picker</h2>
			<div>
				<CustomGradientPicker value={gradient} onChange={setGradient} />
			</div>
		</section>
	);
}

export default MBCustomGradientPicker;
