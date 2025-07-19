import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import {
	FolderIcon,
	ArrowTopRightOnSquareIcon,
	TagIcon,
	StarIcon,
	EyeIcon,
	CalendarIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/outline";

const PortfolioPage = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Web Design", "Mobile Apps", "Branding", "UI/UX"];

	const projects = [
		{
			id: 1,
			title: "Project One",
			category: "Web Design",
			image: `${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/Placeholder-Image---Landscape.svg`,
			description: "Description of the project and its key features.",
			tags: ["React", "Tailwind", "Node.js"],
			year: "2024",
			client: "Client Name",
			link: "#",
		},
		// Add more projects as needed
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="bg-blue-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<FolderIcon className="mx-auto h-12 w-12 text-blue-600" />
						<h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
							Our Portfolio
						</h1>
						<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
							Showcasing our best work and creative solutions.
						</p>
					</div>
				</div>
			</div>

			{/* Featured Project */}
			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative overflow-hidden rounded-xl bg-blue-600">
						<div className="absolute inset-0">
							<img
								src={`${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/Placeholder-Image---Landscape.svg`}
								alt="Featured project"
								className="h-full w-full object-cover opacity-20"
							/>
						</div>
						<div className="relative px-8 py-16 sm:px-12 sm:py-24">
							<div className="max-w-2xl">
								<h2 className="text-3xl font-bold text-white sm:text-4xl">
									Featured Project
								</h2>
								<p className="mt-4 text-lg text-blue-100">
									Highlight of our most impactful and innovative work.
								</p>
								<button className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50">
									View Project
									<ArrowRightIcon className="ml-2 h-5 w-5" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Portfolio Grid */}
			<div className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Category Tabs */}
					<TabGroup>
						<TabList className="flex space-x-2 rounded-xl bg-white p-1 shadow-sm mb-12">
							{categories.map((category) => (
								<Tab
									key={category}
									className={({ selected }) =>
										`${
											selected
												? "bg-blue-600 text-white"
												: "text-gray-600 hover:bg-gray-100"
										} w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2`
									}
								>
									{category}
								</Tab>
							))}
						</TabList>
						<TabPanels>
							{categories.map((category, idx) => (
								<TabPanel
									key={idx}
									className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
								>
									{projects.map((project) => (
										<div
											key={project.id}
											className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
										>
											{/* Project Image */}
											<div className="relative">
												<img
													src={project.image}
													alt={project.title}
													className="w-full h-48 object-cover"
												/>
												<div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
													<EyeIcon className="h-12 w-12 text-white" />
												</div>
											</div>

											{/* Project Info */}
											<div className="p-6">
												<div className="flex items-center justify-between">
													<h3 className="text-lg font-semibold text-gray-900">
														{project.title}
													</h3>
													<button className="text-blue-600 hover:text-blue-500">
														<ArrowTopRightOnSquareIcon className="h-5 w-5" />
													</button>
												</div>
												<p className="mt-2 text-gray-500">
													{project.description}
												</p>

												{/* Tags */}
												<div className="mt-4 flex flex-wrap gap-2">
													{project.tags.map((tag) => (
														<span
															key={tag}
															className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
														>
															<TagIcon className="h-3 w-3 mr-1" />
															{tag}
														</span>
													))}
												</div>

												{/* Project Details */}
												<div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm text-gray-500">
													<div className="flex items-center">
														<CalendarIcon className="h-4 w-4 mr-1" />
														{project.year}
													</div>
													<div className="flex items-center">
														<StarIcon className="h-4 w-4 mr-1" />
														{project.client}
													</div>
												</div>
											</div>
										</div>
									))}
								</TabPanel>
							))}
						</TabPanels>
					</TabGroup>
				</div>
			</div>

			{/* Call to Action */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold text-gray-900">
							Ready to Start Your Project?
						</h2>
						<p className="mt-4 text-xl text-gray-500">
							Let's work together to bring your ideas to life.
						</p>
						<button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
							Get in Touch
							<ArrowRightIcon className="ml-2 h-5 w-5" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioPage;
