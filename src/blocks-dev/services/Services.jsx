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
		description:
			"Complete VoIP phone system solutions for seamless business communications.",
		icon: PhoneIcon,
	},
	{
		name: "Camera System",
		description:
			"Professional security camera system to secure and monitored your business 24/7.",
		icon: VideoCameraIcon,
	},
	{
		name: "Card Access Control",
		description:
			"Secure card access systems for controlled entry of authorized personnel.",
		icon: KeyIcon,
	},
	{
		name: "Network Cabling",
		description:
			"Professional network infrastructure installation for high-speed connectivity.",
		icon: WifiIcon,
	},
	{
		name: "Managed Services",
		description:
			"IT management and support services to keep your technology running smoothly.",
		icon: CogIcon,
	},
	{
		name: "IT Consulting",
		description:
			"Expert IT consulting and custom solutions tailored to your business needs.",
		icon: ComputerDesktopIcon,
	},
];

export default function Services() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<h2 className="col-span-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Complete IT Solutions for Your Business
					</h2>
					<dl className="col-span-3 grid grid-cols-2 gap-x-8 gap-y-16">
						{services.map((service) => (
							<div key={service.name}>
								<dt className="text-base/7 font-semibold text-gray-900">
									<div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-600">
										<service.icon
											aria-hidden="true"
											className="size-6 text-white"
										/>
									</div>
									{service.name}
								</dt>
								<dd className="mt-1 text-base/7 text-gray-600">
									{service.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
