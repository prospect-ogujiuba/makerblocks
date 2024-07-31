import { ExternalLink } from "@wordpress/components";

function MBExternalLink() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">External Link</h2>
			<div>
				<ExternalLink href="https://wordpress.org">WordPress</ExternalLink>
			</div>
		</section>
	);
}

export default MBExternalLink;
