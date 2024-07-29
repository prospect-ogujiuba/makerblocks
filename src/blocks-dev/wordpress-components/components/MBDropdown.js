import { Button, Dropdown } from "@wordpress/components";

function MBDropdown() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Dropdown </h2>
			<div>
				<Dropdown
					className="my-container-class-name"
					contentClassName="my-dropdown-content-classname"
					popoverProps={{ placement: "bottom-start" }}
					renderToggle={({ isOpen, onToggle }) => (
						<Button variant="primary" onClick={onToggle} aria-expanded={isOpen}>
							Toggle Dropdown!
						</Button>
					)}
					renderContent={() => <div>This is the content of the dropdown.</div>}
				/>
			</div>
		</section>
	);
}

export default MBDropdown;
