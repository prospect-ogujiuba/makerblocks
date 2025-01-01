import { Disabled, TextControl, TextareaControl, SelectControl } from "@wordpress/components";

function MBDisabled() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Disabled</h2>
			<div>
				<Disabled isDisabled>
					<TextControl label="TEXT CONTROL" onChange={function noRefCheck() {}} value="" />
					<TextareaControl
						help="Enter some text"
						label="TEXTAREA CONTROL"
						onChange={function noRefCheck() {}}
						value=""
					/>
					<SelectControl
					label="SELECT CONTROL"
						onBlur={function noRefCheck() {}}
						onChange={function noRefCheck() {}}
						onFocus={function noRefCheck() {}}
						options={[
							{
								disabled: true,
								label: "Select an Option",
								value: "",
							},
							{
								label: "Option A",
								value: "a",
							},
							{
								label: "Option B",
								value: "b",
							},
							{
								label: "Option C",
								value: "c",
							},
						]}
					/>
				</Disabled>
			</div>
		</section>
	);
}

export default MBDisabled;
