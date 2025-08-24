import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

export default function PageHeader({
	header = {},
	breadcrumbs = {},
	nonce = "",
}) {
	// Use WordPress data with fallbacks
	const headerData = {
		subtitle: header.subtitle || "B2B CNC",
		title: header.title || "Support center",
	};

	// Dynamic styling classes
	const containerClasses = "";
	const titleClasses = "";
	const subtitleClasses = "";

	// Breadcrumb component
	const BreadcrumbNav = () => {
		if (!breadcrumbs) return null;

		return (
			<nav className="mb-8" aria-label="Breadcrumb">
				<ol className="flex items-center w-full space-x-2 text-sm bg-white px-4 py-2 rounded-md shadow">
					{breadcrumbs.map((crumb, index) => (
						<li key={index} className="flex items-center">
							{index < breadcrumbs.length - 1 ? (
								<>
									<a
										href={crumb.url}
										className="text-gray-500 hover:text-gray-700 transition-colors"
									>
										{index === 0 && (
											<HomeIcon
												title="Home"
												className="h-4 w-4 text-gray-400 mr-2"
												aria-hidden="true"
											/>
										)}
										{crumb.name}
									</a>
									<ChevronRightIcon
										className="h-4 w-4 text-gray-400 mx-2"
										aria-hidden="true"
									/>
								</>
							) : (
								<span className="text-gray-900 font-medium">{crumb.title}</span>
							)}
						</li>
					))}
				</ol>
			</nav>
		);
	};

	return (
		<div className="bg-blue-100 py-8">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">

					{/* Breadcrumbs */}
					<BreadcrumbNav />
					{/* Main Header Content */}
					{headerData.subtitle && (
						<p className="text-base/7 font-semibold text-blue-600">
							{headerData.subtitle}
						</p>
					)}

					<h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
						{headerData.title}
					</h1>

			</div>
		</div>
	);
}
