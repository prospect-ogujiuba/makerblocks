import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"http://b2bcnc.test/wp-content/uploads/placeholder-account-image.png",
};

const userNavigation = [
	{ name: "Your profile", href: "portal" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Header({}) {
	const [mainMenu, setMainMenu] = useState([]);

	useEffect(() => {
		const username = "system";
		const applicationPassword = "JZCQ 3Mrk TGuo ke4M QNpT RHHl";
		const credentials = btoa(`${username}:${applicationPassword}`);

		fetch("https://b2bcnc.test/wp-json/wp/v2/menu-items?menus=7", {
			headers: {
				Authorization: `Basic ${credentials}`,
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				const formattedMenu = data.map((item) => ({
					title: item.title.rendered,
					url: item.url,
					current: false,
				}));
				setMainMenu(formattedMenu);
			})
			.catch((error) => console.error("Error fetching menu:", error));
	}, []);

	return (
		<>
			<div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
				<div
					aria-hidden="true"
					className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				>
					<div
						style={{
							clipPath:
								"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
						}}
						className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
					/>
				</div>
				<div
					aria-hidden="true"
					className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				>
					<div
						style={{
							clipPath:
								"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
						}}
						className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
					/>
				</div>
				<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
					<p className="text-sm/6 text-gray-900">
						<strong className="font-semibold">GeneriCon 2023</strong>
						<svg
							viewBox="0 0 2 2"
							aria-hidden="true"
							className="mx-2 inline size-0.5 fill-current"
						>
							<circle r={1} cx={1} cy={1} />
						</svg>
						Join us in Denver from June 7 – 9 to see what’s coming next.
					</p>
					<a
						href="#"
						className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
					>
						Register now <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
				<div className="flex flex-1 justify-end">
					<button
						type="button"
						className="-m-3 p-3 focus-visible:-outline-offset-4"
					>
						<span className="sr-only">Dismiss</span>
						<XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
					</button>
				</div>
			</div>
			<Disclosure as="header" className="relative bg-white shadow-sm">
				<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
					<div className="relative flex h-16 justify-between">
						<div className="relative z-10 flex px-2 lg:px-0">
							<div className="flex shrink-0 items-center">
								<img
									alt="Your Company"
									src="http://b2bcnc.test/wp-content/uploads/b2bcnc_logo_bg_white.png"
									className="h-12 w-auto"
								/>
							</div>
						</div>
						<div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
							<div className="grid w-full grid-cols-1 sm:max-w-xs">
								<input
									name="search"
									placeholder="Search"
									className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
								/>
								<MagnifyingGlassIcon
									aria-hidden="true"
									className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
								/>
							</div>
						</div>
						<div className="relative z-10 flex items-center lg:hidden">
							<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-2 focus:-outline-offset-1 focus:outline-blue-600">
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open menu</span>
								<Bars3Icon
									aria-hidden="true"
									className="block size-6 group-data-open:hidden"
								/>
								<XMarkIcon
									aria-hidden="true"
									className="hidden size-6 group-data-open:block"
								/>
							</DisclosureButton>
						</div>
						<div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
							<button
								type="button"
								className="relative shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
							>
								<span className="absolute -inset-1.5" />
								<span className="sr-only">View notifications</span>
								<BellIcon aria-hidden="true" className="size-6" />
							</button>

							<Menu as="div" className="relative ml-4 shrink-0">
								<MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
									<span className="absolute -inset-1.5" />
									<span className="sr-only">Open user menu</span>
									<img
										alt=""
										src={user.imageUrl}
										className="size-8 rounded-full bg-gray-100 outline -outline-offset-1 outline-black/5"
									/>
								</MenuButton>

								<MenuItems
									transition
									className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
								>
									{userNavigation.map((item) => (
										<MenuItem key={item.name}>
											<a
												href={item.href}
												className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
											>
												{item.name}
											</a>
										</MenuItem>
									))}
								</MenuItems>
							</Menu>
						</div>
					</div>
					<nav
						aria-label="Global"
						className="hidden lg:flex justify-center lg:space-x-8 lg:py-2"
					>
						{mainMenu.map((item) => {
							const isCurrent = item.current;
							return (
								<a
									key={item.title}
									href={item.url}
									aria-current={isCurrent ? "page" : undefined}
									className={classNames(
										isCurrent
											? "bg-gray-100 text-gray-900"
											: "text-gray-900 hover:bg-gray-50",
										"inline-flex items-center rounded-md px-3 py-2 text-sm font-medium",
									)}
								>
									{item.title}
								</a>
							);
						})}
					</nav>
				</div>

				<DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
					<div className="space-y-1 px-2 pt-2 pb-3">
						{mainMenu.map((item) => {
							const isCurrent = item.current;
							return (
								<DisclosureButton
									key={item.title}
									as="a"
									href={item.url}
									aria-current={isCurrent ? "page" : undefined}
									className={classNames(
										isCurrent
											? "bg-gray-100 text-gray-900"
											: "text-gray-900 hover:bg-gray-50",
										"block rounded-md px-3 py-2 text-base font-medium",
									)}
								>
									{item.title}
								</DisclosureButton>
							);
						})}
					</div>
					<div className="border-t border-gray-200 pt-4 pb-3">
						<div className="flex items-center px-4">
							<div className="shrink-0">
								<img
									alt=""
									src={user.imageUrl}
									className="size-10 rounded-full bg-gray-100 outline -outline-offset-1 outline-black/5"
								/>
							</div>
							<div className="ml-3">
								<div className="text-base font-medium text-gray-800">
									{user.name}
								</div>
								<div className="text-sm font-medium text-gray-500">
									{user.email}
								</div>
							</div>
							<button
								type="button"
								className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
							>
								<span className="absolute -inset-1.5" />
								<span className="sr-only">View notifications</span>
								<BellIcon aria-hidden="true" className="size-6" />
							</button>
						</div>
						<div className="mt-3 space-y-1 px-2">
							{userNavigation.map((item) => (
								<DisclosureButton
									key={item.name}
									as="a"
									href={item.href}
									className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
								>
									{item.name}
								</DisclosureButton>
							))}
						</div>
					</div>
				</DisclosurePanel>
			</Disclosure>
		</>
	);
}
