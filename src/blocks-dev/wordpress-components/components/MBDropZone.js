import { DropZone } from "@wordpress/components";
import { useState } from "@wordpress/element";

function MBDropZone() {
	const [hasDropped, setHasDropped] = useState(false);
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">DropZone</h2>
			<div className="bg-stone-200 p-6">
				{hasDropped ? "Dropped!" : "Drop something here"}
				<DropZone
					onFilesDrop={() => setHasDropped(true)}
					onHTMLDrop={() => setHasDropped(true)}
					onDrop={() => setHasDropped(true)}
				/>
			</div>
		</section>
	);
}

export default MBDropZone;
