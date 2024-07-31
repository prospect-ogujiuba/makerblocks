import { CircularOptionPicker, DefaultOptions } from "@wordpress/components";

function MBCircularOptionPicker() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Circular Option Picker</h2>
			{/* <CircularOptionPicker
				aria-label="Circular Option Picker"
				options={<DefaultOptions />}
				/> */}
			<p className="bg-red-500 p-4 rounded-md text-white font-bold">
				Issue to fix - Causing preview error in the Editor.
			</p>
		</section>
	);
}

export default MBCircularOptionPicker;
