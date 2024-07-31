import { Draggable, Panel, PanelBody } from "@wordpress/components";
import { Icon, more } from "@wordpress/icons";

function MBDraggable() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Draggable</h2>
			<div id="draggable-panel">
				<Panel header="Draggable panel">
					<PanelBody>
						<Draggable elementId="draggable-panel" transferData={{}}>
							{({ onDraggableStart, onDraggableEnd }) => (
								<div
									className="example-drag-handle"
									draggable
									onDragStart={onDraggableStart}
									onDragEnd={onDraggableEnd}
								>
									<Icon icon={more} />
								</div>
							)}
						</Draggable>
					</PanelBody>
				</Panel>
			</div>
		</section>
	);
}

export default MBDraggable;
