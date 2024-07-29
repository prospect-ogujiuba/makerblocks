import { Button, ButtonGroup } from "@wordpress/components";

function MBButtonGroup() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Buttons/Button Group</h2>

			<div className="space-x-4">
				<Button variant="primary">Code is poetry</Button>
				<Button variant="secondary">Code is poetry</Button>
				<Button variant="tertiary">Code is poetry</Button>
				<Button variant="link">Code is poetry</Button>
				<Button isDestructive>Code is poetry</Button>
			</div>
		</section>
	);
}

export default MBButtonGroup;
