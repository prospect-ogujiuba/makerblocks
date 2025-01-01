import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardDivider,
	CardMedia,
	__experimentalText as Text,
	__experimentalHeading as Heading,
	Button,
} from "@wordpress/components";

function MBCard() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Card</h2>
			<div className="grid md:grid-cols-2 gap-4">
				<Card>
					<React.Fragment key=".0">
						<CardHeader>
							<Heading>CardHeader</Heading>
						</CardHeader>
						<CardBody>
							<Text>CardBody</Text>
						</CardBody>
						<CardBody>
							<Text>CardBody (before CardDivider)</Text>
						</CardBody>
						<CardDivider />
						<CardBody>
							<Text>CardBody (after CardDivider)</Text>
						</CardBody>
						<CardMedia>
							<img
								alt="Card Media"
								src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80"
							/>
						</CardMedia>
						<CardFooter>
							<Text>CardFooter</Text>
							<Button variant="secondary">Action Button</Button>
						</CardFooter>
					</React.Fragment>
				</Card>
				<Card>
					<CardMedia>
						<div
							style={{
								background: "beige",
								padding: 16,
							}}
						>
							Some full bleed content
						</div>
					</CardMedia>
				</Card>
			</div>
		</section>
	);
}

export default MBCard;
