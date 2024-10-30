import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const applicants = [
	{
		name: "Jane Cooper",
		position: "Software Engineer",
		stage: "Interview",
		email: "janecooper@example.com",
		telephone: "+1-202-555-0170",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
	},
	// More applicants...
];

const stages = {
	Applied: "text-blue-700 bg-blue-50 ring-blue-600/20",
	Interview: "text-yellow-700 bg-yellow-50 ring-yellow-600/20",
	Offer: "text-green-700 bg-green-50 ring-green-600/20",
	Rejected: "text-red-700 bg-red-50 ring-red-600/10",
};

const employers = [
	{
		id: 1,
		name: "Tech Corp",
		logoUrl: "https://tailwindui.com/plus/img/logos/48x48/tuple.svg",
		recentPosition: {
			title: "Software Engineer",
			datePosted: "September 15, 2023",
			status: "Interview",
		},
	},
	{
		id: 2,
		name: "Innovate LLC",
		logoUrl: "https://tailwindui.com/plus/img/logos/48x48/savvycal.svg",
		recentPosition: {
			title: "Product Manager",
			datePosted: "October 5, 2023",
			status: "Offer",
		},
	},
];

const applications = [
	{
		title: "Software Engineer",
		code: "SE01",
		href: "#",
		applicants: 35,
		bgColor: "bg-indigo-600",
	},
	{
		title: "Product Manager",
		code: "PM02",
		href: "#",
		applicants: 12,
		bgColor: "bg-yellow-600",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
	return (
		<div className="space-y-8">
			<div className="space-y-4">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p>Welcome to the Dashboard! Here is the summary of your activities.</p>
                <hr />
            </div>

			{/* Applications Section */}
			<div>
				<h2 className="text-md font-medium mb-4 text-gray-500">
					Open Positions
				</h2>
				<ul
					role="list"
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
				>
					{applications.map((application) => (
						<li
							key={application.title}
							className="col-span-1 flex rounded-md shadow-sm"
						>
							<div
								className={classNames(
									application.bgColor,
									"flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white",
								)}
							>
								{application.code}
							</div>
							<div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
								<div className="flex-1 truncate px-4 py-2 text-sm">
									<a
										href={application.href}
										className="font-medium text-gray-900 hover:text-gray-600"
									>
										{application.title}
									</a>
									<p className="text-gray-500">
										{application.applicants} Applicants
									</p>
								</div>
								<div className="flex-shrink-0 pr-2">
									<button
										type="button"
										className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										<span className="sr-only">Open options</span>
										<EllipsisVerticalIcon
											aria-hidden="true"
											className="h-5 w-5"
										/>
									</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>

			{/* Applicants Section */}
			<div>
				<h2 className="text-md font-medium mb-4 text-gray-500">Applicants</h2>
				<ul
					role="list"
					className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
				>
					{applicants.map((applicant) => (
						<li
							key={applicant.email}
							className="overflow-hidden rounded-xl border border-gray-200"
						>
							<div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
								<img
									alt={applicant.name}
									src={applicant.imageUrl}
									className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
								/>
								<div className="text-sm font-medium leading-6 text-gray-900">
									{applicant.name}
								</div>
								<Menu as="div" className="relative ml-auto">
									<MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
										<span className="sr-only">Open options</span>
										<EllipsisHorizontalIcon
											aria-hidden="true"
											className="h-5 w-5"
										/>
									</MenuButton>
									<MenuItems
										transition
										className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
									>
										<MenuItem>
											<a
												href="#"
												className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
											>
												View<span className="sr-only">, {applicant.name}</span>
											</a>
										</MenuItem>
										<MenuItem>
											<a
												href="#"
												className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
											>
												Edit<span className="sr-only">, {applicant.name}</span>
											</a>
										</MenuItem>
									</MenuItems>
								</Menu>
							</div>
							<dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
								<div className="flex justify-between gap-x-4 py-3">
									<dt className="text-gray-500">Position</dt>
									<dd className="text-gray-700">{applicant.position}</dd>
								</div>
								<div className="flex justify-between gap-x-4 py-3">
									<dt className="text-gray-500">Stage</dt>
									<dd
										className={classNames(
											stages[applicant.stage],
											"rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
										)}
									>
										{applicant.stage}
									</dd>
								</div>
							</dl>
						</li>
					))}
				</ul>
			</div>

			{/* Employers Section */}
			<div>
				<h2 className="text-md font-medium mb-4 text-gray-500">Employers</h2>
				<ul
					role="list"
					className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
				>
					{employers.map((employer) => (
						<li
							key={employer.id}
							className="overflow-hidden rounded-xl border border-gray-200"
						>
							<div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
								<img
									alt={employer.name}
									src={employer.logoUrl}
									className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
								/>
								<div className="text-sm font-medium leading-6 text-gray-900">
									{employer.name}
								</div>
							</div>
							<dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
								<div className="flex justify-between gap-x-4 py-3">
									<dt className="text-gray-500">Recent Position</dt>
									<dd className="text-gray-700">
										{employer.recentPosition.title}
									</dd>
								</div>
								<div className="flex justify-between gap-x-4 py-3">
									<dt className="text-gray-500">Date Posted</dt>
									<dd className="text-gray-700">
										<time dateTime={employer.recentPosition.datePosted}>
											{employer.recentPosition.datePosted}
										</time>
									</dd>
								</div>
							</dl>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
