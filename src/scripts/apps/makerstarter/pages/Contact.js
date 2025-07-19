import React, { useState } from "react";
import { RadioGroup, Radio } from "@headlessui/react";
import {
	EnvelopeIcon,
	PhoneIcon,
	MapPinIcon,
	ClockIcon,
	BuildingOfficeIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const ContactPage = () => {
	const [inquiryType, setInquiryType] = useState("general");

	const inquiryTypes = [
		{ id: "general", name: "General Inquiry" },
		{ id: "support", name: "Technical Support" },
		{ id: "sales", name: "Sales" },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="bg-blue-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<EnvelopeIcon className="mx-auto h-12 w-12 text-blue-600" />
						<h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
							Get in Touch
						</h1>
						<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
							We'd love to hear from you. Send us a message and we'll respond as
							soon as possible.
						</p>
					</div>
				</div>
			</div>

			{/* Contact Methods */}
			<div className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
							<PhoneIcon className="h-8 w-8 text-blue-600" />
							<h3 className="mt-4 text-lg font-medium text-gray-900">
								Call Us
							</h3>
							<p className="mt-2 text-gray-500 text-center">
								Mon-Fri from 8am to 5pm
							</p>
							<p className="mt-2 text-blue-600">(555) 123-4567</p>
						</div>

						<div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
							<MapPinIcon className="h-8 w-8 text-blue-600" />
							<h3 className="mt-4 text-lg font-medium text-gray-900">
								Visit Us
							</h3>
							<p className="mt-2 text-gray-500 text-center">
								123 Business Street
							</p>
							<p className="text-gray-500">City, State 12345</p>
						</div>

						<div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
							<ClockIcon className="h-8 w-8 text-blue-600" />
							<h3 className="mt-4 text-lg font-medium text-gray-900">
								Business Hours
							</h3>
							<p className="mt-2 text-gray-500 text-center">Monday - Friday</p>
							<p className="text-gray-500">9:00 AM - 5:00 PM</p>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Form and Map Section */}
			<div className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div className="bg-white rounded-lg shadow-sm p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Send us a Message
							</h2>
							<form onSubmit={handleSubmit}>
								<div className="space-y-6">
									{/* Inquiry Type Selection */}
									<div>
										<label className="text-sm font-medium text-gray-700">
											Type of Inquiry
										</label>
										<RadioGroup value={inquiryType} onChange={setInquiryType}>
											<div className="mt-2 grid grid-cols-3 gap-3">
												{inquiryTypes.map((type) => (
													<Radio
														key={type.id}
														value={type.id}
														className={({ checked }) =>
															`${
																checked
																	? "bg-blue-600 text-white"
																	: "bg-white text-gray-900"
															} cursor-pointer rounded-md px-3 py-2 text-sm font-medium border
                              hover:bg-blue-300 flex items-center justify-center`
														}
													>
														{type.name}
													</Radio>
												))}
											</div>
										</RadioGroup>
									</div>

									{/* Name Fields */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700">
												First Name
											</label>
											<input
												type="text"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700">
												Last Name
											</label>
											<input
												type="text"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
											/>
										</div>
									</div>

									{/* Email */}
									<div>
										<label className="block text-sm font-medium text-gray-700">
											Email
										</label>
										<input
											type="email"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										/>
									</div>

									{/* Message */}
									<div>
										<label className="block text-sm font-medium text-gray-700">
											Message
										</label>
										<textarea
											rows={4}
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										/>
									</div>

									{/* Submit Button */}
									<button
										type="submit"
										className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
									>
										Send Message
										<PaperAirplaneIcon className="ml-2 h-5 w-5" />
									</button>
								</div>
							</form>
						</div>

						{/* Office Locations */}
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Our Offices
							</h2>
							<div className="md:grid grid-cols-2 items-center gap-4">
								{[1, 2].map((office) => (
									<div
										key={office}
										className="bg-white rounded-lg shadow-sm p-6"
									>
										<div className="flex items-center">
											<BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
											<h3 className="ml-2 text-lg font-medium text-gray-900">
												Office Location {office}
											</h3>
										</div>
										<div className="text-gray-500">
											<p>123 Business Street</p>
											<p>Suite {office}00</p>
											<p>City, State 12345</p>
											<p className="mt-2">Phone: (555) 123-456{office}</p>
										</div>
									</div>
								))}

								{/* Placeholder for Map */}
								<div className="md:col-span-2 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
									<p className="text-gray-600">Map Integration Goes Here</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
