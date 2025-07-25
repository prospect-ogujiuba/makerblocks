"use client";

export default function Hero({ site = {} }) {
	const heroBgUrl = site.hero_url;
	return (
		<div className="bg-gray-900">
			<div className="relative isolate overflow-hidden pt-14">
				<div className="absolute inset-0 -z-10">
					<img alt="" src={heroBgUrl} className="size-full object-cover" />
					<div className="absolute inset-0 bg-black/70" />
				</div>
				{""}
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-24">
						<div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full px-3 py-1 text-sm/6 text-blue-400 bg-white ring-1 ring-blue/10 hover:ring-white/20">
								Announcements Go Here.{" "}
								<a href="#" className="font-semibold text-blue-400">
									<span aria-hidden="true" className="absolute inset-0" />
									Read more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
						<div className="text-center">
							<h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
								Smarter solutions for modern enterprises
							</h1>
							<p className="mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8">
								Computer, Networking, and Communication Services — powering
								your business productivity beyond the workstation.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="#"
									className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
								>
									Request Service
								</a>
								<a href="#" className="text-sm/6 font-semibold text-white">
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
		</div>
	);
}
