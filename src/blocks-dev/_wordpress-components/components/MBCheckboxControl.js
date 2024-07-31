import { CheckboxControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

function MBCheckboxControl() {
	const [isChecked, setChecked] = useState(true);
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">CheckBox Controls</h2>
			<CheckboxControl
				__nextHasNoMarginBottom
				label="Is author"
				help="Is the user a author or not?"
				checked={isChecked}
				onChange={setChecked}
			/>
		</section>
	);
}

export default MBCheckboxControl;
