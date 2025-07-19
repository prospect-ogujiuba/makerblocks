import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	TransitionChild,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import {
	Bars3Icon,
	BellIcon,
	Cog6ToothIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

import {
	ChevronDownIcon,
	MagnifyingGlassIcon,
	QueueListIcon,
	HomeIcon,
	InformationCircleIcon, // Better for About
	WrenchIcon, // Better for Services
	PhoneIcon, // Better for Contact
	BookOpenIcon, // Better for Resources
	FolderIcon, // Better for Portfolio
	DocumentTextIcon, // Better for Cases
	ShoppingBagIcon, // Better for Shop
} from "@heroicons/react/20/solid";

const navigation = [
	{ name: "Home", path: "/home", icon: HomeIcon },
	{ name: "About", path: "/about", icon: InformationCircleIcon },
	{ name: "Services", path: "/services", icon: QueueListIcon },
	{ name: "Contact", path: "/contact", icon: PhoneIcon },
	{ name: "Resources", path: "/resources", icon: BookOpenIcon },
	{ name: "Portfolio", path: "/portfolio", icon: FolderIcon },
	{ name: "Cases", path: "/cases", icon: DocumentTextIcon },
	{ name: "Shop", path: "/shop", icon: ShoppingBagIcon },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function DashboardLayout() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const path = location.pathname.replace(/\//g, ""); // Remove all slashes
		const title = path.charAt(0).toUpperCase() + path.slice(1); // Capitalize first letter
		document.title = `${window.siteData.siteName} - ${title || "Home"}`;
	}, [location]);

	const navigate = useNavigate();

	return (
		<div>
			<Dialog
				as="div"
				open={sidebarOpen}
				onClose={setSidebarOpen}
				className="relative z-50 lg:hidden"
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
				/>

				<div className="fixed inset-0 flex">
					<DialogPanel
						transition
						className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
					>
						<TransitionChild>
							<div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
								<button
									type="button"
									onClick={() => setSidebarOpen(false)}
									className="-m-2.5 p-2.5"
								>
									<span className="sr-only">Close sidebar</span>
									<XMarkIcon aria-hidden="true" className="size-6 text-white" />
								</button>
							</div>
						</TransitionChild>
						<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
							<div className="flex h-16 shrink-0 items-center">
								<Link to={window.siteData.siteUrl}>
									<img
										alt={window.siteData.siteName}
										src={`${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/logos/logo-ph-black.svg`}
										className="h-8 w-auto"
									/>
								</Link>
							</div>
							<nav className="flex flex-1 flex-col">
								<ul role="list" className="flex flex-1 flex-col gap-y-7">
									<li>
										<ul role="list" className="-mx-2 space-y-1">
											{navigation.map((item) => (
												<li key={item.name}>
													<Link
														onClick={() => setSidebarOpen(false)}
														to={item.path}
														className={classNames(
															location.pathname === item.path
																? "bg-gray-50 text-blue-600"
																: "text-gray-700 hover:bg-gray-50 hover:text-blue-600",
															"group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
														)}
													>
														<item.icon
															className={classNames(
																location.pathname === item.path
																	? "text-blue-600"
																	: "text-gray-400 group-hover:text-blue-600",
																"h-6 w-6 shrink-0",
															)}
															aria-hidden="true"
														/>
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									</li>
									<li className="mt-auto">
										<Link
											to="/settings"
											className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
										>
											<Cog6ToothIcon
												className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
												aria-hidden="true"
											/>
											Settings
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</DialogPanel>
				</div>
			</Dialog>

			{/* Static sidebar for desktop */}
			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
					<div className="flex h-16 shrink-0 items-center">
						<Link to={window.siteData.siteUrl}>
							<img
								alt={window.siteData.siteName}
								src={`${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/logos/logo-ph-black.svg`}
								className="h-8 w-auto"
							/>
						</Link>
					</div>
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									{navigation.map((item) => (
										<li key={item.name}>
											<Link
												to={item.path}
												className={classNames(
													location.pathname === item.path
														? "bg-gray-50 text-blue-600"
														: "text-gray-700 hover:bg-gray-50 hover:text-blue-600",
													"group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
												)}
											>
												<item.icon
													className={classNames(
														location.pathname === item.path
															? "text-blue-600"
															: "text-gray-400 group-hover:text-blue-600",
														"h-6 w-6 shrink-0",
													)}
													aria-hidden="true"
												/>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li className="mt-auto">
								<Link
									to="/settings"
									className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
								>
									<Cog6ToothIcon
										className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
										aria-hidden="true"
									/>
									Settings
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="lg:pl-56">
				<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
					<button
						type="button"
						className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
						onClick={() => setSidebarOpen(true)}
					>
						<span className="sr-only">Open sidebar</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

				<main className="bg-stone-50 py-4">
					<div className="px-4 sm:px-6 lg:px-8">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
}
