import React from "react";

function MBComponent() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Component</h2>
			<div>
				<div className="flex space-x-4 bg-green-400 p-4 text-white">
					<i className="bi-bounding-box"></i>
					<p className="font-bold">Component Template</p>
				</div>
			</div>
		</section>
	);
}

export default MBComponent;
