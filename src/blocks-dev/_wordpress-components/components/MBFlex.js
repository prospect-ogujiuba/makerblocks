import { Flex, FlexBlock, FlexItem, GrayBox } from "@wordpress/components";

function MBFlex() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Flex</h2>
			<div>
				<Flex align="center" direction={{}} justify="center">
					<FlexItem>
						<p>Code</p>
					</FlexItem>
					<FlexItem>
						<p>Is</p>
					</FlexItem>
					<FlexItem>
						<p>Poetry</p>
					</FlexItem>
				</Flex>
			</div>
		</section>
	);
}

export default MBFlex;
