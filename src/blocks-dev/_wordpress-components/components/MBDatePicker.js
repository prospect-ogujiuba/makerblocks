import { DatePicker } from "@wordpress/components";
import { useState } from "@wordpress/element";

function MBDatePicker() {
	const [date1, setDate1] = useState(new Date()); // State for the first DatePicker
	const [date2, setDate2] = useState(new Date()); // State for the second DatePicker
	const [date3, setDate3] = useState(new Date()); // State for the third DatePicker

	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Date Picker</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 items-start gap-16">
				<DatePicker
					currentDate={date1}
					onChange={(newDate) => setDate1(newDate)}
				/>
				<DatePicker
					currentDate={date2}
					events={[
						{
							date: new Date("2024-07-28T05:22:50.292Z"),
						},
						{
							date: new Date("2024-07-30T05:22:50.292Z"),
						},
						{
							date: new Date("2024-08-01T05:22:50.292Z"),
						},
						{
							date: new Date("2024-08-03T05:22:50.292Z"),
						},
					]}
					onChange={(newDate) => setDate2(newDate)}
				/>
				<DatePicker
					currentDate={date3}
					isInvalidDate={(date) => date.getDay() === 0}
					onChange={(newDate) => setDate3(newDate)} // Update
				/>
			</div>
		</section>
	);
}

export default MBDatePicker;
