import React, { useState } from "react";
import {
	Disclosure,
	DisclosurePanel,
	DisclosureButton,
	Popover,
	PopoverPanel,
	PopoverButton,
} from "@headlessui/react";
import {
	ShoppingBagIcon,
	FunnelIcon,
	ChevronDownIcon,
	StarIcon,
	AdjustmentsHorizontalIcon,
	XMarkIcon,
	PlusIcon,
	MinusIcon,
} from "@heroicons/react/24/outline";

const ShopPage = () => {
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const categories = ["All", "New Arrivals", "Featured", "Sale"];
	const filters = [
		{
			id: "category",
			name: "Category",
			options: ["Electronics", "Clothing", "Accessories", "Home"],
		},
		{
			id: "price",
			name: "Price Range",
			options: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"],
		},
	];

	const products = [
		{
			id: 1,
			name: "Product One",
			price: 99.99,
			rating: 4.5,
			image: "/api/placeholder/300/300",
			category: "Electronics",
			description: "Product description goes here.",
		},
		// Add more products as needed
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<div className="bg-blue-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<ShoppingBagIcon className="mx-auto h-12 w-12 text-blue-600" />
						<h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
							Shop
						</h1>
						<p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
							Discover our collection of premium products.
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="lg:grid lg:grid-cols-12 lg:gap-8">
					{/* Sidebar Filters */}
					<div className="hidden lg:block lg:col-span-3">
						<div className="sticky top-4">
							<h2 className="text-lg font-medium text-gray-900 mb-4">
								Filters
							</h2>
							{filters.map((filter) => (
								<Disclosure key={filter.id} as="div" className="mb-4">
									{({ open }) => (
										<>
											<DisclosureButton className="flex w-full justify-between items-center bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg">
												<span>{filter.name}</span>
												<ChevronDownIcon
													className={`${
														open ? "rotate-180 transform" : ""
													} h-5 w-5 text-gray-500`}
												/>
											</DisclosureButton>
											<DisclosurePanel className="px-4 pt-4 pb-2">
												<div className="space-y-4">
													{filter.options.map((option) => (
														<div key={option} className="flex items-center">
															<input
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
															/>
															<label className="ml-3 text-sm text-gray-600">
																{option}
															</label>
														</div>
													))}
												</div>
											</DisclosurePanel>
										</>
									)}
								</Disclosure>
							))}
						</div>
					</div>

					{/* Product Grid */}
					<div className="lg:col-span-9">
						{/* Mobile Filters */}
						<div className="lg:hidden mb-6">
							<button className="flex items-center text-gray-600 hover:text-gray-900">
								<FunnelIcon className="h-5 w-5 mr-2" />
								Filters
							</button>
						</div>

						{/* Category Tabs */}
						<div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
							{categories.map((category) => (
								<button
									key={category}
									className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
								>
									{category}
								</button>
							))}
						</div>

						{/* Sort Dropdown */}
						<div className="flex justify-between items-center mb-6">
							<p className="text-gray-500 text-sm">
								Showing {products.length} results
							</p>
							<select className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
								<option>Most Popular</option>
								<option>Newest</option>
								<option>Price: Low to High</option>
								<option>Price: High to Low</option>
							</select>
						</div>

						{/* Products */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{products.map((product) => (
								<div
									key={product.id}
									className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
								>
									<div className="relative">
										<img
											src={`${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/Placeholder-Image---Landscape.svg`}
											alt={product.name}
											className="w-full h-64 object-cover"
										/>
										<button className="absolute top-4 right-4 p-1.5 rounded-full bg-white shadow-sm hover:shadow">
											<ShoppingBagIcon className="h-5 w-5 text-gray-600" />
										</button>
									</div>
									<div className="p-4">
										<h3 className="text-lg font-medium text-gray-900">
											{product.name}
										</h3>
										<p className="mt-1 text-gray-500">{product.description}</p>
										<div className="mt-2 flex items-center">
											{[...Array(5)].map((_, i) => (
												<StarIcon
													key={i}
													className={`h-4 w-4 ${
														i < Math.floor(product.rating)
															? "text-yellow-400"
															: "text-gray-300"
													}`}
												/>
											))}
											<span className="ml-2 text-sm text-gray-500">
												({product.rating})
											</span>
										</div>
										<div className="mt-4 flex items-center justify-between">
											<p className="text-lg font-medium text-gray-900">
												${product.price}
											</p>
											<button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500">
												Add to Cart
											</button>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Pagination */}
						<div className="mt-12 flex items-center justify-center">
							<nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
								<button className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
									Previous
								</button>
								<button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
									1
								</button>
								<button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
									2
								</button>
								<button className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
									Next
								</button>
							</nav>
						</div>
					</div>
				</div>
			</div>

			{/* Shopping Cart Popover */}
			<Popover className="fixed top-4 right-4">
				<PopoverButton className="bg-white p-2 rounded-full shadow-lg">
					<ShoppingBagIcon className="h-6 w-6 text-gray-600" />
					{cartItems.length > 0 && (
						<span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
							{cartItems.length}
						</span>
					)}
				</PopoverButton>

				<PopoverPanel className="absolute right-0 z-10 mt-2 w-80 bg-white rounded-lg shadow-lg">
					<div className="p-4">
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-medium text-gray-900">
								Shopping Cart
							</h3>
							<button className="text-gray-400 hover:text-gray-500">
								<XMarkIcon className="h-5 w-5" />
							</button>
						</div>
						{cartItems.length === 0 ? (
							<p className="text-gray-500">Your cart is empty</p>
						) : (
							<div className="space-y-4">
								{/* Cart items would go here */}
								<div className="mt-4 border-t pt-4">
									<div className="flex justify-between text-base font-medium text-gray-900">
										<p>Subtotal</p>
										<p>$0.00</p>
									</div>
									<button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
										Checkout
									</button>
								</div>
							</div>
						)}
					</div>
				</PopoverPanel>
			</Popover>
		</div>
	);
};

export default ShopPage;
