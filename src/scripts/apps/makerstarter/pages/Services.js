import React from "react";
import {
	Disclosure,
	DisclosurePanel,
	DisclosureButton,
	Transition,
} from "@headlessui/react";
import {
	ChevronDownIcon,
	CheckCircleIcon,
	StarIcon,
	WrenchScrewdriverIcon,
	QuestionMarkCircleIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/outline";

const ServicesPage = () => {
	// Sample services data - can be moved to separate data file
	const services = [
		{
			id: 1,
			title: "Service One",
			description: "Description of your first service offering.",
			features: ["Feature 1", "Feature 2", "Feature 3"],
		},
		{
			id: 2,
			title: "Service Two",
			description: "Description of your second service offering.",
			features: ["Feature 1", "Feature 2", "Feature 3"],
		},
		{
			id: 3,
			title: "Service Three",
			description: "Description of your third service offering.",
			features: ["Feature 1", "Feature 2", "Feature 3"],
		},
	];

	const faqs = [
		{
			question: "Common question about your services?",
			answer: "Detailed answer about your services.",
		},
		{
			question: "Another common question?",
			answer: "Another detailed answer.",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="bg-blue-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<WrenchScrewdriverIcon className="mx-auto h-12 w-12 text-blue-600" />
						<h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
							Our Services
						</h1>
						<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
							Comprehensive solutions tailored to your needs.
						</p>
					</div>
				</div>
			</div>

			{/* Services Grid */}
			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{services.map((service) => (
							<div
								key={service.id}
								className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
							>
								<h3 className="text-xl font-bold text-gray-900">
									{service.title}
								</h3>
								<p className="mt-4 text-gray-500">{service.description}</p>
								<ul className="mt-6 space-y-4">
									{service.features.map((feature, index) => (
										<li key={index} className="flex items-start">
											<CheckCircleIcon className="h-5 w-5 text-blue-500 mt-1" />
											<span className="ml-2 text-gray-600">{feature}</span>
										</li>
									))}
								</ul>
								<button className="mt-8 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
									Learn More
									<ArrowRightIcon className="ml-2 h-5 w-5" />
								</button>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Process Section */}
			<div className="bg-gray-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						Our Process
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{[1, 2, 3, 4].map((step) => (
							<div key={step} className="text-center">
								<div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
									{step}
								</div>
								<h3 className="mt-4 text-lg font-semibold text-gray-900">
									Step {step}
								</h3>
								<p className="mt-2 text-gray-500">
									Description of process step {step}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						What Our Clients Say
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[1, 2, 3].map((testimonial) => (
							<div
								key={testimonial}
								className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
							>
								<div className="flex items-center mb-4">
									{[...Array(5)].map((_, i) => (
										<StarIcon key={i} className="h-5 w-5 text-yellow-400" />
									))}
								</div>
								<p className="text-gray-600">
									"Testimonial text goes here. Share what your clients love
									about your services."
								</p>
								<div className="mt-4">
									<p className="font-semibold text-gray-900">Client Name</p>
									<p className="text-gray-500 text-sm">Position, Company</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div className="bg-gray-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<QuestionMarkCircleIcon className="mx-auto h-12 w-12 text-blue-600" />
						<h2 className="mt-4 text-3xl font-bold text-gray-900">
							Frequently Asked Questions
						</h2>
					</div>
					<div className="max-w-3xl mx-auto">
						{faqs.map((faq, index) => (
							<Disclosure key={index} as="div" className="mt-4">
								{({ open }) => (
									<>
										<DisclosureButton className="flex w-full justify-between rounded-lg bg-white px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-blue-50">
											<span>{faq.question}</span>
											<ChevronDownIcon
												className={`${
													open ? "rotate-180 transform" : ""
												} h-5 w-5 text-blue-600`}
											/>
										</DisclosureButton>
										<Transition
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<DisclosurePanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
												{faq.answer}
											</DisclosurePanel>
										</Transition>
									</>
								)}
							</Disclosure>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
