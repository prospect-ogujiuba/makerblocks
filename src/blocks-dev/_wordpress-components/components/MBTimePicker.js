import { TimePicker } from "@wordpress/components";

function MBTimePicker() {
	
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Time Picker</h2>
			<div>
				<TimePicker
					dateOrder="dmy"
					is12Hour
					onChange={function noRefCheck() {}}
				/>
			</div>
		</section>
	);
}

export default MBTimePicker;
