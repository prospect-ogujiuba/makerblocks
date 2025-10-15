export default function Hero() {
	return (
		<div className="bg-white">
			<div className="relative isolate overflow-hidden bg-linear-to-b from-blue-100/20 from-blue-950/10">
				<div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:py-40">
					<div className="px-6 lg:px-0 lg:pt-4 lg:col-span-2">
						<div className="max-w-3xl">

								<p className="text-md font-medium text-pretty text-gray-600 sm:text-2xl">
									Unify your technology infrastructure: Front to Back
								</p>
								<h1 className="text-2xl font-semibold tracking-tight text-pretty sm:text-5xl text-gray-900">
									Modern communication, networking and computer systems.
								</h1>
								<div className="mt-10 flex items-center gap-x-6">
									<a
										href="#"
										className="px-6 py-4 bg-blue-600 rounded-full text-white font-bold"
									>
										Browser Our Services
									</a>
									<a href="#" className="text-sm/6 font-semibold text-blue-900">
										View Resources <span aria-hidden="true">→</span>
									</a>

							</div>
						</div>
					</div>

				</div>
				<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32 from-gray-900" />
			</div>
		</div>
	);
}
