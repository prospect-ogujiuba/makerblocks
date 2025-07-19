import React from "react";
import { Menu } from "@headlessui/react";
import {
	HomeIcon,
	ChevronDownIcon,
	ArrowRightIcon,
	UserGroupIcon,
	SparklesIcon,
	ChartBarIcon,
} from "@heroicons/react/24/outline";

const HomePage = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<nav className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="flex-shrink-0 flex items-center">
								<HomeIcon className="h-8 w-8 text-blue-600" />
								<span className="ml-2 text-xl font-bold text-gray-900">
									Home
								</span>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<div className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
						<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
							<div className="text-center">
								<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
									<span className="block">Your Amazing</span>
									<span className="block text-blue-600">Product Title</span>
								</h1>
								<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
									A compelling description of your product or service that
									captures attention and drives action.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
									<div className="rounded-md shadow">
										<button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
											Get Started
											<ArrowRightIcon className="ml-2 h-5 w-5" />
										</button>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="py-12 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{/* Feature 1 */}
						<div className="p-6 bg-white rounded-lg shadow">
							<UserGroupIcon className="h-8 w-8 text-blue-600" />
							<h3 className="mt-4 text-lg font-medium text-gray-900">
								Feature One
							</h3>
							<p className="mt-2 text-gray-500">
								Description of your first amazing feature.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="p-6 bg-white rounded-lg shadow">
							<SparklesIcon className="h-8 w-8 text-blue-600" />
							<h3 className="mt-4 text-lg font-medium text-gray-900">
								Feature Two
							</h3>
							<p className="mt-2 text-gray-500">
								Description of your second amazing feature.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="p-6 bg-white rounded-lg shadow">
							<ChartBarIcon className="h-8 w-8 text-blue-600" />
							<h3 className="mt-4 text-lg font-medium text-gray-900">
								Feature Three
							</h3>
							<p className="mt-2 text-gray-500">
								Description of your third amazing feature.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-blue-700">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
							Ready to get started?
						</h2>
						<p className="mt-4 text-lg leading-6 text-blue-100">
							Join thousands of satisfied customers using our product.
						</p>
						<div className="mt-8">
							<button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
								Sign up now
								<ArrowRightIcon className="ml-2 h-5 w-5" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
