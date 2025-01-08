import {
	CompositeGroup,
	Component,
    useCompositeState
} from "@wordpress/components";

function MBComposite() {

	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">MB Composite</h2>
			<div>
				{/* <Component
					aria-label="Legacy Composite with state prop (two dimensions)"
					role="grid"
					state={state}
				>
					<CompositeGroup role="row" state={state}>
						<Component role="gridcell" state={state}>
							Item A1
						</Component>
						<Component role="gridcell" state={state}>
							Item A2
						</Component>
						<Component role="gridcell" state={state}>
							Item A3
						</Component>
					</CompositeGroup>
					<CompositeGroup role="row" state={state}>
						<Component role="gridcell" state={state}>
							Item B1
						</Component>
						<Component role="gridcell" state={state}>
							Item B2
						</Component>
						<Component role="gridcell" state={state}>
							Item B3
						</Component>
					</CompositeGroup>
					<CompositeGroup role="row" state={state}>
						<Component role="gridcell" state={state}>
							Item C1
						</Component>
						<Component role="gridcell" state={state}>
							Item C2
						</Component>
						<Component role="gridcell" state={state}>
							Item C3
						</Component>
					</CompositeGroup>
				</Component> */}
				<p className="bg-red-500 p-4 rounded-md text-white font-bold">
					Issue to fix - Causing blank screen
				</p>
			</div>
		</section>
	);
}

export default MBComposite;
