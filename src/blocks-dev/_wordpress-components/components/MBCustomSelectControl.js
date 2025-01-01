import { CustomSelectControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

function MBCustomSelectControl() {

	const [value, setValue] = useState("Small");
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Custom Select Control</h2>
			<div className="grid gap-4">
				<CustomSelectControl
					label="Default"
					onChange={function noRefCheck() {}}
					options={[
						{
							key: "small",
							name: "Small",
							style: {
								fontSize: "50%",
							},
						},
						{
							className: "can-apply-custom-class-to-option",
							key: "normal",
							name: "Normal",
							style: {
								fontSize: "100%",
							},
						},
						{
							key: "large",
							name: "Large",
							style: {
								fontSize: "200%",
							},
						},
						{
							key: "huge",
							name: "Huge",
							style: {
								fontSize: "300%",
							},
						},
					]}
					value={{
						key: "small",
						name: "Small",
						style: {
							fontSize: "50%",
						},
					}}
				/>

				<CustomSelectControl
					label="Really Long Lables"
					onChange={function noRefCheck() {}}
					options={[
						{
							key: "reallylonglabel1",
							name: "Really long labels are good for stress testing",
						},
						{
							key: "reallylonglabel2",
							name: "But they can take a long time to type.",
						},
						{
							key: "reallylonglabel3",
							name: "That really is ok though because you should stress test your UIs.",
						},
					]}
					value={{
						key: "reallylonglabel1",
						name: "Really long labels are good for stress testing",
					}}
				/>

				<CustomSelectControl
					label="With Hints"
					onChange={function noRefCheck() {}}
					options={[
						{
							hint: "150x150",
							key: "thumbnail",
							name: "Thumbnail",
						},
						{
							hint: "250x250",
							key: "medium",
							name: "Medium",
						},
						{
							hint: "1024x1024",
							key: "large",
							name: "Large",
						},
						{
							hint: "1600x1600",
							key: "full",
							name: "Full Size",
						},
					]}
					value={{
						hint: "150x150",
						key: "thumbnail",
						name: "Thumbnail",
					}}
				/>
			</div>
		</section>
	);
}

export default MBCustomSelectControl;
