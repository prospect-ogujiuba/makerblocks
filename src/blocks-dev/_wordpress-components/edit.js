import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

import TestComponent from "./components/TestComponent";
import MBComponent from "./components/_MBComponent";

import MBAnglePickerControl from "./components/MBAnglePickerControl";
import MBAnimate from "./components/MBAnimate";
import MBBaseControl from "./components/MBBaseControl";
import MBButton from "./components/MBButton";
import MBCard from "./components/MBCard";
import MBCheckboxControl from "./components/MBCheckboxControl";
import MBCircularOptionPicker from "./components/MBCircularOptionPicker";
import MBColorIndicator from "./components/MBColorIndicator";
import MBColorPalette from "./components/MBColorPalette";
import MBColorPicker from "./components/MBColorPicker";
import MBComboboxControl from "./components/MBComboboxControl";
import MBComposite from "./components/MBComposite";
import MBCustomGradientPicker from "./components/MBCustomGradientPicker";
import MBCustomSelectControl from "./components/MBCustomSelectControl";
import MBDateTimePicker from "./components/MBDateTimePicker";
import MBDatePicker from "./components/MBDatePicker";
import MBTimePicker from "./components/MBTimePicker";
import MBDisabled from "./components/MBDisabled";
import MBDraggable from "./components/MBDraggable";
import MBDropZone from "./components/MBDropZone";
import MBDropdownMenu from "./components/MBDropdownMenu";
import MBDropdown from "./components/MBDropdown";
import MBDuotonePicker from "./components/MBDuotonePicker";
import MBExternalLink from "./components/MBExternalLink";
import MBFlex from "./components/MBFlex";

/**
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	return (
		<div {...useBlockProps()}>
			<section className="px-4 py-8 lg:py-16 max-w-7xl mx-auto">
				<h1 className="mb-8 text-4xl text-center">WordPress Components</h1>
				<p className="mb-8 text-xl text-center">
					This Block shows WordPress Components.
				</p>

				<div className="space-y-8">
					<TestComponent />
					<MBComponent />
					<MBAnglePickerControl />
					<MBAnimate />
					<MBBaseControl />
					<MBButton />
					<MBCard />
					<MBCheckboxControl />
					<MBCircularOptionPicker />
					<MBColorIndicator />
					<MBColorPalette />
					<MBColorPicker />
					<MBComboboxControl />
					<MBComposite />
					<MBCustomGradientPicker />
					<MBCustomSelectControl />
					<MBDateTimePicker />
					<MBDatePicker />
					<MBTimePicker />
					<MBDisabled />
					<MBDraggable />
					<MBDropZone />
					<MBDropdownMenu />
					<MBDropdown />
					<MBDuotonePicker />
					<MBExternalLink />
					<MBFlex />
				</div>
			</section>
		</div>
	);
}
