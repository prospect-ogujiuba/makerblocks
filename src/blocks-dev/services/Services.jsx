import {
	PhoneIcon,
	VideoCameraIcon,
	KeyIcon,
	WifiIcon,
	CogIcon,
	ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const services = [
	{
		name: "VoIP Phone System",
		description: "Complete VoIP phone system solutions.",
		icon: PhoneIcon,
	},
	{
		name: "Camera System",
		description: "Professional security camera systems",
		icon: VideoCameraIcon,
	},
	{
		name: "Access Control",
		description: "Secure and controlled personnel authorization.",
		icon: KeyIcon,
	},
	{
		name: "Network Cabling",
		description: "Professional network infrastructure installation.",
		icon: WifiIcon,
	},
	{
		name: "Managed Services",
		description: "IT management and support services.",
		icon: CogIcon,
	},
	{
		name: "IT Consulting",
		description: "Expert IT consulting and custom solutions.",
		icon: ComputerDesktopIcon,
	},
];

export default function Services() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto relative grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="col-span-2 ">
						<h2 className="sticky top-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
							<span className="text-blue-500 italic font-bold">Complete</span>{" "}
							IT solutions for your business.
						</h2>
					</div>
					<dl className="col-span-3 grid md:grid-cols-2 gap-x-4 gap-y-8">
						{services.map((service) => (
							<div
								key={service.name}
								className="hover:bg-blue-50 transition:color duration-300 rounded-sm shadow-blue-100 shadow-sm p-4"
							>
								<dt className="text-base/7 font-semibold text-gray-900">
									<div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-600">
										<service.icon
											aria-hidden="true"
											className="size-6 text-white"
										/>
									</div>
									<a href="" className="text-blue-800 underline">
										{service.name}
									</a>
								</dt>
								<dd className="my-1 text-base/7 text-gray-600">
									{service.description}
								</dd>
								<a href="#" className="text-sm/6 font-semibold text-stone-500">
									Learn more{" "}
									<span aria-hidden="true">
										<i className="font-bold text-blue-600 bi bi-arrow-right"></i>
									</span>
								</a>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
