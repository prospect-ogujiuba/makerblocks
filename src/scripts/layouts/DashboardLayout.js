import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
	Dialog,
	DialogPanel,
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
	UserGroupIcon,
	AcademicCapIcon,
	BriefcaseIcon,
	ServerIcon,
	ChartBarIcon,
	HomeIcon,
} from "@heroicons/react/20/solid";
import { DocumentPlusIcon } from "@heroicons/react/24/solid";

const navigation = [
	{ name: "Dashboard", path: "/dashboard", icon: HomeIcon },
	{ name: "Applications", path: "/applications", icon: DocumentPlusIcon },
	{ name: "Applicants", path: "/applicants", icon: UserGroupIcon },
	{ name: "Courses", path: "/courses", icon: AcademicCapIcon },
	{ name: "Employers", path: "/employers", icon: BriefcaseIcon },
	{ name: "Database", path: "/database", icon: ServerIcon },
	{ name: "Reports", path: "/reports", icon: ChartBarIcon },
];

const userNavigation = [
	{ name: "Your Profile", path: "/profile" },
	{ name: "Sign out", path: "/logout" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function DashboardLayout() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const handleLogout = () => {
		// Add your logout logic here
		navigate("/login");
	};

	return (
		<div>
			<Dialog
				as="div"
				open={sidebarOpen}
				onClose={setSidebarOpen}
				className="relative z-50 lg:hidden"
			>
				<div className="fixed inset-0 bg-gray-900/80" />
				<div className="fixed inset-0 flex">
					<DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
						<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
							<button
								type="button"
								onClick={() => setSidebarOpen(false)}
								className="-m-2.5 p-2.5"
							>
								<span className="sr-only">Close sidebar</span>
								<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
							</button>
						</div>
						<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
							<div className="flex h-16 shrink-0 items-center">
								<Link to="/">
									<img
										alt="Compass Careers Canada"
										src={`${window.siteData.siteUrl}/wp-content/uploads/ccc_02.svg`}
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
																? "bg-gray-50 text-green-600"
																: "text-gray-700 hover:bg-gray-50 hover:text-green-600",
															"group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
														)}
													>
														<item.icon
															className={classNames(
																location.pathname === item.path
																	? "text-green-600"
																	: "text-gray-400 group-hover:text-green-600",
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
											className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-green-600"
										>
											<Cog6ToothIcon
												className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-green-600"
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
			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-56 lg:flex-col">
				<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
					<div className="flex h-16 shrink-0 items-center">
						<Link to="/">
							<img
								alt="Compass Careers Canada"
								src={`${window.siteData.siteUrl}/wp-content/uploads/ccc_02.svg`}
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
														? "bg-gray-50 text-green-600"
														: "text-gray-700 hover:bg-gray-50 hover:text-green-600",
													"group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
												)}
											>
												<item.icon
													className={classNames(
														location.pathname === item.path
															? "text-green-600"
															: "text-gray-400 group-hover:text-green-600",
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
									className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-green-600"
								>
									<Cog6ToothIcon
										className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-green-600"
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

					<div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

					<div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
						<form className="relative flex flex-1" action="#" method="GET">
							<label htmlFor="search-field" className="sr-only">
								Search
							</label>
							<MagnifyingGlassIcon
								className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
								aria-hidden="true"
							/>
							<input
								id="search-field"
								className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
								placeholder="Search..."
								type="search"
								name="search"
							/>
						</form>
						<div className="flex items-center gap-x-4 lg:gap-x-6">
							<button
								type="button"
								className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">View notifications</span>
								<BellIcon className="h-6 w-6" aria-hidden="true" />
							</button>

							<div
								className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
								aria-hidden="true"
							/>

							<Menu as="div" className="relative">
								<MenuButton className="-m-1.5 flex items-center p-1.5">
									<span className="sr-only">Open user menu</span>
									<img
										alt=""
										src={`${window.siteData.siteUrl}./wp-content/plugins/atsflow/assets/images/extras/placeholder-account-image.png`}
										className="h-8 w-8 rounded-full bg-gray-50"
									/>
									<span className="hidden lg:flex lg:items-center">
										<span
											aria-hidden="true"
											className="ml-4 text-sm font-semibold leading-6 text-gray-900"
										>
											{window.siteData.currentUserName.toUpperCase()}
										</span>
										<ChevronDownIcon
											className="ml-2 h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
									</span>
								</MenuButton>
								<MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
									{userNavigation.map((item) => (
										<MenuItem key={item.name}>
											{({ active }) => (
												<Link
													to={item.path}
													onClick={
														item.path === "/logout" ? handleLogout : undefined
													}
													className={classNames(
														active ? "bg-gray-50" : "",
														"block px-3 py-1 text-sm leading-6 text-gray-900",
													)}
												>
													{item.name}
												</Link>
											)}
										</MenuItem>
									))}
								</MenuItems>
							</Menu>
						</div>
					</div>
				</div>

				<main className="py-4">
					<div className="px-4 sm:px-6 lg:px-8">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
}
