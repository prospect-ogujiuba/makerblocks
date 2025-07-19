import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
	DocumentTextIcon,
	DocumentArrowDownIcon,
	PlayCircleIcon,
	BookOpenIcon,
	MagnifyingGlassIcon,
	ArrowDownTrayIcon,
	ArrowTopRightOnSquareIcon,
	TagIcon,
} from "@heroicons/react/24/outline";

const ResourcesPage = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const categories = [
		{ name: "All Resources", count: 12 },
		{ name: "Documentation", count: 4 },
		{ name: "Tutorials", count: 3 },
		{ name: "Downloads", count: 5 },
	];

	const resources = [
		{
			id: 1,
			title: "Getting Started Guide",
			description: "Learn the basics of our platform",
			type: "Documentation",
			icon: BookOpenIcon,
			tags: ["Beginner", "Guide"],
			downloadUrl: "#",
		},
		// Add more resources as needed
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="bg-blue-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<DocumentTextIcon className="mx-auto h-12 w-12 text-blue-600" />
						<h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
							Resources
						</h1>
						<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
							Everything you need to get started and be successful with our
							platform.
						</p>
					</div>
				</div>
			</div>

			{/* Search and Filter Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="relative">
					<MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
					<input
						type="text"
						placeholder="Search resources..."
						className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<TabGroup>
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						{/* Sidebar */}
						<div className="lg:col-span-3">
							<TabList className="flex flex-col space-y-1">
								{categories.map((category) => (
									<Tab
										key={category.name}
										className={({ selected }) =>
											`${
												selected
													? "bg-blue-50 text-blue-600"
													: "text-gray-600 hover:bg-gray-50"
											} flex justify-between items-center px-3 py-2 text-sm font-medium rounded-lg`
										}
									>
										<span>{category.name}</span>
										<span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
											{category.count}
										</span>
									</Tab>
								))}
							</TabList>
						</div>

						{/* Content Area */}
						<div className="mt-6 lg:mt-0 lg:col-span-9">
							<TabPanels>
								{categories.map((category, idx) => (
									<TabPanel
										key={idx}
										className="grid grid-cols-1 md:grid-cols-2 gap-6"
									>
										{resources.map((resource) => (
											<div
												key={resource.id}
												className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
											>
												<div className="flex items-start">
													<resource.icon className="h-8 w-8 text-blue-600" />
													<div className="ml-4 flex-1">
														<h3 className="text-lg font-semibold text-gray-900">
															{resource.title}
														</h3>
														<p className="mt-1 text-gray-500">
															{resource.description}
														</p>
														<div className="mt-4 flex flex-wrap gap-2">
															{resource.tags.map((tag) => (
																<span
																	key={tag}
																	className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
																>
																	<TagIcon className="h-3 w-3 mr-1" />
																	{tag}
																</span>
															))}
														</div>
														<div className="mt-4 flex items-center space-x-4">
															{resource.downloadUrl && (
																<button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500">
																	<ArrowDownTrayIcon className="h-4 w-4 mr-1" />
																	Download
																</button>
															)}
															<button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500">
																<ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
																Learn More
															</button>
														</div>
													</div>
												</div>
											</div>
										))}
									</TabPanel>
								))}
							</TabPanels>
						</div>
					</div>
				</TabGroup>
			</div>

			{/* Featured Resources */}
			<div className="bg-gray-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">
						Featured Resources
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Documentation Card */}
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<DocumentTextIcon className="h-8 w-8 text-blue-600" />
							<h3 className="mt-4 text-lg font-semibold text-gray-900">
								Documentation
							</h3>
							<p className="mt-2 text-gray-500">
								Comprehensive guides and API references
							</p>
							<button className="mt-4 text-blue-600 hover:text-blue-500">
								Browse Docs →
							</button>
						</div>

						{/* Video Tutorials Card */}
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<PlayCircleIcon className="h-8 w-8 text-blue-600" />
							<h3 className="mt-4 text-lg font-semibold text-gray-900">
								Video Tutorials
							</h3>
							<p className="mt-2 text-gray-500">
								Step-by-step video guides and tutorials
							</p>
							<button className="mt-4 text-blue-600 hover:text-blue-500">
								Watch Now →
							</button>
						</div>

						{/* Downloads Card */}
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<DocumentArrowDownIcon className="h-8 w-8 text-blue-600" />
							<h3 className="mt-4 text-lg font-semibold text-gray-900">
								Downloads
							</h3>
							<p className="mt-2 text-gray-500">
								Templates, tools, and other resources
							</p>
							<button className="mt-4 text-blue-600 hover:text-blue-500">
								Download →
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourcesPage;
