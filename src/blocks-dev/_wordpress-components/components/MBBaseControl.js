import { BaseControl, Button } from "@wordpress/components";

function MBBaseControl() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Base Control</h2>
			<div className="grid grid-cols-1 md:grid-cols-3">
				<BaseControl
					__nextHasNoMarginBottom
					id="wp-components-base-control-4"
					label="Label text"
				>
					<textarea
						id="wp-components-base-control-4"
						style={{
							display: "block",
						}}
					/>
				</BaseControl>

				<BaseControl
					__nextHasNoMarginBottom
					help="Help text adds more explanation."
					id="wp-components-base-control-11"
					label="Label text"
				>
					<textarea
						aria-describedby="wp-components-base-control-11__help"
						id="wp-components-base-control-11"
						style={{
							display: "block",
						}}
					/>
				</BaseControl>

				<BaseControl
					__nextHasNoMarginBottom
					help="This button is already accessibly labeled."
				>
					<BaseControl.VisualLabel>Visual label</BaseControl.VisualLabel>
					<div>
						<Button variant="secondary">Select an author</Button>
					</div>
				</BaseControl>
			</div>
		</section>
	);
}

export default MBBaseControl;
