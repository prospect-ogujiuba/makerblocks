export default function Hero() {
	return (
		<div className="bg-white relative">
			<div
				className="relative isolate overflow-hidden bg-gradient-to-r from-blue-900 via-slate-50 to-indigo-900"
				style={{
					backgroundImage: `url('https://b2bcnc.test/wp-content/uploads/modern_enterprise_2.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundColor: "gray",
					backgroundBlendMode: "multiply",
				}}
			>
				<div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:py-40">
					<div className="px-6 lg:px-0 lg:pt-4 lg:col-span-2">
						<div className="max-w-3xl">
							<p className="mb-4 text-md font-medium text-pretty text-gray-200 sm:text-2xl">
								Unify your technology infrastructure: Front to Back
							</p>
							<h1 className="mb-8 text-2xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
								Modernize your communications, networking and computer systems.
							</h1>
							<div className="flex items-center space-x-6">
								<a
									href="#"
									className="px-6 py-4 bg-blue-600 rounded-full text-white font-bold hover:bg-blue-800 duration-300"
								>
									Browser Our Services
								</a>
								<a
									href="#"
									className="text-sm/6 font-semibold px-6 py-4 bg-white border border-blue-600 rounded-full text-blue-900 hover:bg-blue-100 duration-300"
								>
									View Resources <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
					<div className="relative flex items-center mt-10 lg:mt-0">
						<div className="w-full bg-black bg-opacity-10 border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:bg-white/15">
							<div className="flex items-center justify-between mb-4">
								<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<span className="text-blue-200 text-sm font-semibold">
									Featured
								</span>
							</div>
							<h3 className="text-xl font-bold text-white mb-3">
								Premium Services
							</h3>
							<p className="text-blue-100 mb-6 text-sm leading-relaxed">
								Transform your business with our comprehensive technology
								solutions. From cloud migration to system integration.
							</p>
							<button className="flex items-center text-white font-semibold hover:text-blue-200 transition-colors group">
								<span>Learn More</span>
								<svg
									className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
