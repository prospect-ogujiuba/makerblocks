import { ComboboxControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

const options = [
	{
		label: "Select Country",
		value: "-",
		disabled: true,
	},
	{
		label: "Afghanistan",
		value: "AF",
	},
	{
		label: "Åland Islands",
		value: "AX",
	},
	{
		label: "Albania",
		value: "AL",
	},
	{
		label: "Algeria",
		value: "DZ",
	},
	{
		label: "American Samoa",
		value: "AS",
	},
	{
		label: "Andorra",
		value: "AD",
	},
	{
		label: "Angola",
		value: "AO",
	},
	{
		label: "Anguilla",
		value: "AI",
	},
	{
		label: "Antarctica",
		value: "AQ",
	},
	{
		label: "Antigua and Barbuda",
		value: "AG",
	},
	{
		label: "Argentina",
		value: "AR",
	},
	{
		label: "Armenia",
		value: "AM",
	},
	{
		label: "Aruba",
		value: "AW",
	},
	{
		label: "Australia",
		value: "AU",
	},
	{
		label: "Austria",
		value: "AT",
	},
	{
		label: "Azerbaijan",
		value: "AZ",
	},
];

function MBComboboxControl() {
	const [fontSize, setFontSize] = useState();
	const [filteredOptions, setFilteredOptions] = useState(options);
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Combobox Control</h2>
			<div className="space-y-4">
				<ComboboxControl
					__nextHasNoMarginBottom
					label="Country"
					value={fontSize}
					onChange={setFontSize}
					options={filteredOptions}
					onFilterValueChange={(inputValue) =>
						setFilteredOptions(
							options.filter((option) =>
								option.label.toLowerCase().startsWith(inputValue.toLowerCase()),
							),
						)
					}
				/>
				
			</div>
		</section>
	);
}

export default MBComboboxControl;
