import React from "react";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import {
	BuildingOffice2Icon,
	UserGroupIcon,
	HeartIcon,
	TrophyIcon,
	GlobeAltIcon,
	RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="relative bg-gray-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<BuildingOffice2Icon className="mx-auto h-12 w-12 text-blue-600" />
						<h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
							About Our Company
						</h1>
						<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
							Your company's mission statement or brief introduction goes here.
						</p>
					</div>
				</div>
			</div>

			{/* Story Section */}
			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
							<p className="mt-4 text-lg text-gray-500">
								Your company's story and history goes here. Share your journey,
								challenges, and how you've grown over the years.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-blue-50 p-6 rounded-lg">
								<TrophyIcon className="h-8 w-8 text-blue-600" />
								<div className="mt-4">
									<h3 className="text-xl font-semibold">Founded</h3>
									<p className="text-gray-600">2020</p>
								</div>
							</div>
							<div className="bg-blue-50 p-6 rounded-lg">
								<GlobeAltIcon className="h-8 w-8 text-blue-600" />
								<div className="mt-4">
									<h3 className="text-xl font-semibold">Global Reach</h3>
									<p className="text-gray-600">50+ Countries</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Values Section */}
			<div className="bg-gray-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<HeartIcon className="mx-auto h-12 w-12 text-blue-600" />
						<h2 className="mt-4 text-3xl font-bold text-gray-900">
							Our Values
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[1, 2, 3].map((value) => (
							<div key={value} className="bg-white p-6 rounded-lg shadow-sm">
								<RocketLaunchIcon className="h-8 w-8 text-blue-600" />
								<h3 className="mt-4 text-xl font-semibold text-gray-900">
									Value {value}
								</h3>
								<p className="mt-2 text-gray-500">
									Description of your company value and how it guides your work.
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Team Section */}
			<div className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<UserGroupIcon className="mx-auto h-12 w-12 text-blue-600" />
						<h2 className="mt-4 text-3xl font-bold text-gray-900">Our Team</h2>
					</div>
					<TabGroup>
						<TabList className="flex space-x-1 rounded-xl bg-blue-50 p-1 mb-8">
							<Tab
								className={({ selected }) =>
									`w-full rounded-lg py-2.5 text-sm font-medium leading-5
                ${
									selected
										? "bg-white text-blue-700 shadow"
										: "text-gray-600 hover:bg-white/[0.12] hover:text-blue-600"
								}`
								}
							>
								Leadership
							</Tab>
							<Tab
								className={({ selected }) =>
									`w-full rounded-lg py-2.5 text-sm font-medium leading-5
                ${
									selected
										? "bg-white text-blue-700 shadow"
										: "text-gray-600 hover:bg-white/[0.12] hover:text-blue-600"
								}`
								}
							>
								Engineering
							</Tab>
							<Tab
								className={({ selected }) =>
									`w-full rounded-lg py-2.5 text-sm font-medium leading-5
                ${
									selected
										? "bg-white text-blue-700 shadow"
										: "text-gray-600 hover:bg-white/[0.12] hover:text-blue-600"
								}`
								}
							>
								Design
							</Tab>
						</TabList>
						<TabPanels>
							{[1, 2, 3].map((tabIndex) => (
								<TabPanel key={tabIndex}>
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
										{[1, 2, 3].map((member) => (
											<div key={member} className="text-center">
												<div className="w-32 h-32 mx-auto rounded-full bg-gray-200" />
												<h3 className="mt-4 text-xl font-semibold text-gray-900">
													Team Member Name
												</h3>
												<p className="text-gray-500">Position</p>
											</div>
										))}
									</div>
								</TabPanel>
							))}
						</TabPanels>
					</TabGroup>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
