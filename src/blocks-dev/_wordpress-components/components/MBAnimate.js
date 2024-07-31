import { Animate, Notice } from "@wordpress/components";

function MBAnimate() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Animate</h2>

			<div className="space-y-2">
				<Animate type="appear" options={{ origin: "top left" }}>
					{({ className }) => (
						<Notice className={className} status="success">
							<p className="text-stone-900">Appear Top Left.</p>
						</Notice>
					)}
				</Animate>
				<Animate type="appear" options={{ origin: "top right" }}>
					{({ className }) => (
						<Notice className={className} status="success">
							<p className="text-stone-900">Appear Top Right.</p>
						</Notice>
					)}
				</Animate>
				<Animate type="appear" options={{ origin: "bottom left" }}>
					{({ className }) => (
						<Notice className={className} status="success">
							<p className="text-stone-900">Appear Bottom Left.</p>
						</Notice>
					)}
				</Animate>
				<Animate type="appear" options={{ origin: "bottom right" }}>
					{({ className }) => (
						<Notice className={className} status="success">
							<p className="text-stone-900">Appear Bottom Right.</p>
						</Notice>
					)}
				</Animate>
				<Animate type="loading" options={{ origin: "left" }}>
					{({ className }) => (
						<Notice className={className} status="success">
							<p className="text-stone-900">Animation Loading.</p>
						</Notice>
					)}
				</Animate>
			</div>
		</section>
	);
}

export default MBAnimate;
