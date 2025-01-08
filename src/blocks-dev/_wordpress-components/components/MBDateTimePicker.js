import { DateTimePicker } from "@wordpress/components";
import { useState } from "@wordpress/element";

function MBDateTimePicker() {
	const [dateTime1, setDateTime1] = useState(new Date()); // State for the first DateTimePicker
	const [dateTime2, setDateTime2] = useState(new Date()); // State for the second DateTimePicker
	const [date3, setDate3] = useState(new Date()); // State for the third DateTimePicker

	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Date Time Picker</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 items-start gap-16">
				<DateTimePicker
					currentDate={dateTime1}
					onChange={(newDate) => setDateTime1(newDate)} // Update state for the first picker
					is12Hour
				/>

				<DateTimePicker
					currentDate={dateTime2}
					events={[
						{
							date: new Date("2024-07-28T01:12:49.873Z"),
						},
						{
							date: new Date("2024-07-30T01:12:49.873Z"),
						},
						{
							date: new Date("2024-08-01T01:12:49.873Z"),
						},
						{
							date: new Date("2024-08-03T01:12:49.873Z"),
						},
					]}
					onChange={(newDate) => setDateTime2(newDate)} // Update state for the second picker
					is12Hour
				/>

				<DateTimePicker
					currentDate={date3}
					isInvalidDate={(date) => date.getDay() === 0 || date.getDay() === 6} // Example: Disable Sundays
					onChange={(newDate) => setDate3(newDate)} // Update state for the third picker
				/>
			</div>
		</section>
	);
}

export default MBDateTimePicker;
