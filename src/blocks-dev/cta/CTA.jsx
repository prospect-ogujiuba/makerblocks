"use client";

export default function CTA() {
	return (
		<div className="mx-auto max-w-2xl text-center px-6 py-16">
			<hgroup>
				<h2 className="text-base/7 font-semibold text-blue-600">Get Started</h2>
				<p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
					Request a service today.
				</p>
			</hgroup>
			<p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
				Boost productivity with expert Computer, Networking, and Communication
				services.
			</p>
			<div className="mt-8 flex justify-center">
				<a
					href="#"
					className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					Get Started
				</a>
			</div>
		</div>
	);
}
