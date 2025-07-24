const featuredTestimonial = {
	body: "B2bCNC transformed our entire communication infrastructure. Their VOIP implementation reduced our phone costs by 60% while improving call quality. The team was professional, knowledgeable, and delivered on time. Highly recommend for any business looking to modernize their IT systems.",
	author: {
		name: "Sarah Mitchell",
		handle: "sarahmitchell",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
		logoUrl:
			"https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg",
		company: "TechFlow Solutions",
	},
};

const testimonials = [
	[
		[
			{
				body: "The network cabling job was flawless. B2bCNC rewired our entire office building and everything works perfectly. No downtime, clean installation, and great documentation.",
				author: {
					name: "Marcus Rodriguez",
					handle: "marcusrodriguez",
					imageUrl:
						"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
					company: "Rodriguez & Associates",
				},
			},
		],
		[
			{
				body: "Migrating to their VOIP solution was seamless. Call quality is excellent, features are robust, and we love the unified communications. Great value for the price.",
				author: {
					name: "Amanda Foster",
					handle: "amandafoster",
					imageUrl:
						"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
					company: "Foster Legal Group",
				},
			},
		],
	],
	[
		[
			{
				body: "Professional installation of our access control and camera systems. The integration between both systems is perfect. B2bCNC delivered exactly what they promised.",
				author: {
					name: "Lisa Wang",
					handle: "lisawang",
					imageUrl:
						"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
					company: "Wang Retail Group",
				},
			},
		],
		[
			{
				body: "B2bCNC upgraded our aging network infrastructure with modern equipment. Internet speeds improved dramatically and we haven't had any downtime since.",
				author: {
					name: "Rachel Green",
					handle: "rachelgreen",
					imageUrl:
						"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
					company: "Green Architecture",
				},
			},
		],
	],
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
	return (
		<div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#60a5fa] to-[#1d4ed8]"
				/>
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#60a5fa] to-[#1d4ed8] xl:ml-0 xl:mr-[calc(50%-12rem)]"
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-base/7 font-semibold text-blue-600">
						Client Testimonials
					</h2>
					<p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Trusted by businesses across industries
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
					<figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
						<blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
							<p>{`"${featuredTestimonial.body}"`}</p>
						</blockquote>
						<figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
							<img
								alt=""
								src={featuredTestimonial.author.imageUrl}
								className="size-10 flex-none rounded-full bg-gray-50"
							/>
							<div className="flex-auto">
								<div className="font-semibold text-gray-900">
									{featuredTestimonial.author.name}
								</div>
								<div className="text-gray-600">
									{featuredTestimonial.author.company}
								</div>
							</div>
							<img
								alt=""
								src={featuredTestimonial.author.logoUrl}
								className="h-10 w-auto flex-none"
							/>
						</figcaption>
					</figure>
					{testimonials.map((columnGroup, columnGroupIdx) => (
						<div
							key={columnGroupIdx}
							className="space-y-8 xl:contents xl:space-y-0"
						>
							{columnGroup.map((column, columnIdx) => (
								<div
									key={columnIdx}
									className={classNames(
										(columnGroupIdx === 0 && columnIdx === 0) ||
											(columnGroupIdx === testimonials.length - 1 &&
												columnIdx === columnGroup.length - 1)
											? "xl:row-span-2"
											: "xl:row-start-1",
										"space-y-8",
									)}
								>
									{column.map((testimonial) => (
										<figure
											key={testimonial.author.handle}
											className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
										>
											<blockquote className="text-gray-900">
												<p>{`"${testimonial.body}"`}</p>
											</blockquote>
											<figcaption className="mt-6 flex items-center gap-x-4">
												<img
													alt=""
													src={testimonial.author.imageUrl}
													className="size-10 rounded-full bg-gray-50"
												/>
												<div>
													<div className="font-semibold text-gray-900">
														{testimonial.author.name}
													</div>
													<div className="text-gray-600">
														{testimonial.author.company}
													</div>
												</div>
											</figcaption>
										</figure>
									))}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
