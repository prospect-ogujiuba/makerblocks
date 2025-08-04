import React, { useState, useEffect } from "react";
import {
	PhoneIcon,
	VideoCameraIcon,
	KeyIcon,
	WifiIcon,
	CogIcon,
	ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

// Icon mapping based on the API's icon field
const iconMap = {
	phone: PhoneIcon,
	camera: VideoCameraIcon,
	key: KeyIcon,
	wifi: WifiIcon,
	gear: CogIcon,
	desktop: ComputerDesktopIcon,
};

export default function Services() {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch services from API
	const fetchServices = async () => {
		try {
			setLoading(true);
			setError(null);

			const response = await fetch("https://b2bcnc.test/api/v1/services?limit=6", {
				method: "GET",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"X-Requested-With": "XMLHttpRequest",
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP ${response.status}: ${response.statusText}`);
			}

			const result = await response.json();

			// Simple validation and direct assignment
			if (result.data?.services) {
				const transformedServices = result.data.services
					.filter(service => service.active && !service.deleted_at)
					.map(service => ({
						...service,
						IconComponent: iconMap[service.icon] || ComputerDesktopIcon
					}));
				setServices(transformedServices);
			} else {
				throw new Error("Invalid response structure");
			}
		} catch (err) {
			console.error("Failed to fetch services:", err);
			setError(err.message);
			setServices([]);
		} finally {
			setLoading(false);
		}
	};

	// Load services on component mount
	useEffect(() => {
		fetchServices();
	}, []);

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto relative grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="col-span-2">
						<h2 className="sticky top-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
							<span className="text-blue-500 italic font-bold">Complete</span>{" "}
							IT solutions for your business.
						</h2>

						{/* Loading/Error indicators */}
						{loading && (
							<div className="mt-4 text-sm text-gray-500">
								Loading services...
							</div>
						)}

						{error && (
							<div className="mt-4 text-sm text-red-600">
								Failed to load services
							</div>
						)}
					</div>

					<dl className="col-span-3 grid md:grid-cols-2 gap-x-4 gap-y-8">
						{services.length === 0 && !loading ? (
							<div className="col-span-2 text-center py-12">
								<div className="text-gray-400 mb-4">
									<ComputerDesktopIcon className="mx-auto h-12 w-12" />
								</div>
								<h3 className="text-lg font-medium text-gray-900 mb-2">
									No Services Available
								</h3>
								<p className="text-gray-500">
									{error
										? "Unable to load services at this time. Please try again later."
										: "Services are being updated. Please check back soon."}
								</p>
							</div>
						) : (
							services.map((service) => {
								const IconComponent = service.IconComponent;
								return (
									<div
										key={service.id || service.name}
										className="hover:bg-blue-50 transition-colors duration-300 rounded-sm shadow-blue-100 shadow-sm p-4"
									>
										<dt className="text-base/7 font-semibold text-gray-900">
											<div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-600">
												<IconComponent
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
											{service.base_price && (
												<div className="mt-2 text-sm font-medium text-green-600">
													Starting at ${service.base_price}
												</div>
											)}
										</dd>
										<a
											href="#"
											className="text-sm/6 font-semibold text-stone-500"
										>
											Learn more{" "}
											<span aria-hidden="true">
												<i className="font-bold text-blue-600 bi bi-arrow-right"></i>
											</span>
										</a>
									</div>
								);
							})
						)}
					</dl>
				</div>
			</div>
		</div>
	);
}
