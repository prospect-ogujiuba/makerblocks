import React from "react";
import { Disclosure, DisclosurePanel, DisclosureButton } from "@headlessui/react";
import {
	ChartBarIcon,
	RocketLaunchIcon,
	ChevronRightIcon,
	ArrowRightIcon,
	ClockIcon,
	UserGroupIcon,
	CheckCircleIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/outline";

const CaseStudiesPage = () => {
	const caseStudies = [
		{
			id: 1,
			title: "Client Success Story",
			category: "Digital Transformation",
			image: "/api/placeholder/800/400",
			summary:
				"How we helped a leading company transform their digital presence",
			metrics: [
				{ label: "Increase in Revenue", value: "150%" },
				{ label: "User Growth", value: "2.5x" },
				{ label: "ROI", value: "300%" },
			],
			duration: "6 months",
			industry: "Technology",
			results: [
				"Increased user engagement by 200%",
				"Reduced operational costs by 40%",
				"Improved customer satisfaction score to 95%",
			],
		},
		// Add more case studies as needed
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="bg-green-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<ChartBarIcon className="mx-auto h-12 w-12 text-green-600" />
						<h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
							Case Studies
						</h1>
						<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
							Real results and success stories from our client partnerships.
						</p>
					</div>
				</div>
			</div>

			{/* Featured Case Study */}
			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-xl shadow-lg overflow-hidden">
						<div className="grid grid-cols-1 lg:grid-cols-2">
							<div className="relative">
								<img
									src={`${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/Placeholder-Image---Landscape.svg`}
									alt="Featured case study"
									className="h-full w-full object-cover"
								/>
								<div className="absolute inset-0 bg-green-600 mix-blend-multiply" />
							</div>
							<div className="p-8 lg:p-12">
								<div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
									Featured Study
								</div>
								<h2 className="mt-4 text-3xl font-bold text-gray-900">
									Transform & Scale
								</h2>
								<p className="mt-4 text-lg text-gray-500">
									How we helped a global enterprise achieve digital
									transformation and scale their operations.
								</p>
								<div className="mt-8 grid grid-cols-2 gap-4">
									<div className="bg-gray-50 p-4 rounded-lg">
										<RocketLaunchIcon className="h-6 w-6 text-green-600" />
										<p className="mt-2 text-2xl font-bold text-gray-900">
											250%
										</p>
										<p className="text-sm text-gray-500">Growth in Revenue</p>
									</div>
									<div className="bg-gray-50 p-4 rounded-lg">
										<UserGroupIcon className="h-6 w-6 text-green-600" />
										<p className="mt-2 text-2xl font-bold text-gray-900">1M+</p>
										<p className="text-sm text-gray-500">New Users</p>
									</div>
								</div>
								<button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
									Read Case Study
									<ArrowRightIcon className="ml-2 h-5 w-5" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Case Studies Grid */}
			<div className="bg-gray-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{caseStudies.map((study) => (
							<div
								key={study.id}
								className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
							>
								<img
									src={`${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/Placeholder-Image---Landscape.svg`}
									alt={study.title}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
										{study.category}
									</div>
									<h3 className="mt-4 text-xl font-semibold text-gray-900">
										{study.title}
									</h3>
									<p className="mt-2 text-gray-500">{study.summary}</p>

									{/* Key Metrics */}
									<div className="mt-6 grid grid-cols-3 gap-4">
										{study.metrics.map((metric, index) => (
											<div key={index} className="text-center">
												<p className="text-2xl font-bold text-green-600">
													{metric.value}
												</p>
												<p className="text-xs text-gray-500">{metric.label}</p>
											</div>
										))}
									</div>

									{/* Project Details */}
									<div className="mt-6 pt-6 border-t border-gray-200">
										<div className="flex items-center text-sm text-gray-500">
											<ClockIcon className="h-4 w-4 mr-1" />
											Duration: {study.duration}
										</div>
										<button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
											View Case Study
											<ChevronRightIcon className="ml-2 h-4 w-4" />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Results Section */}
			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Key Results
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{caseStudies[0].results.map((result, index) => (
							<div key={index} className="flex items-start">
								<CheckCircleIcon className="h-6 w-6 text-green-500 mt-1" />
								<p className="ml-3 text-lg text-gray-600">{result}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div className="bg-gray-50 py-16">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Common Questions
					</h2>
					{[1, 2, 3].map((item) => (
						<Disclosure key={item} as="div" className="mt-4">
							{({ open }) => (
								<>
									<DisclosureButton className="flex w-full justify-between rounded-lg bg-white px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-green-50">
										<span>Frequently asked question {item}?</span>
										<ChevronDownIcon
											className={`${
												open ? "rotate-180 transform" : ""
											} h-5 w-5 text-green-600`}
										/>
									</DisclosureButton>
									<DisclosurePanel className="px-4 pt-4 pb-2 text-sm text-gray-500">
										Detailed answer to the frequently asked question goes here.
									</DisclosurePanel>
								</>
							)}
						</Disclosure>
					))}
				</div>
			</div>
		</div>
	);
};

export default CaseStudiesPage;
