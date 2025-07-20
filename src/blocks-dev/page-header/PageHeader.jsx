// page-header/PageHeader.jsx - Updated to use WordPress/TypeRocket data

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

export default function PageHeader({
	header = {},
	breadcrumbs = {},
	context = {},
	nonce = "",
}) {
	// Use WordPress data with fallbacks
	const headerData = {
		subtitle: header.subtitle || "Get the help you need",
		title: header.title || "Support center",
		description:
			header.description ||
			"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.",
		background_color: header.background_color || "bg-white",
		text_color: header.text_color || "text-gray-900",
		subtitle_color: header.subtitle_color || "text-blue-600",
	};

	// Determine layout variations based on context
	const isHomePage = context.is_front_page;
	const isArchive = context.is_archive;
	const isSearch = context.is_search;
	const is404 = context.is_404;

	// Dynamic styling classes
	const containerClasses = `${headerData.background_color} py-8 sm:py-16`;
	const titleClasses = `mt-2 text-4xl font-semibold tracking-tight ${headerData.text_color} sm:text-6xl`;
	const subtitleClasses = `text-base/7 font-semibold ${headerData.subtitle_color}`;
	const descriptionClasses = `mt-8 text-pretty text-md text-gray-500 sm:text-xl`;

	// Breadcrumb component
	const BreadcrumbNav = () => {
		if (!breadcrumbs) return null;

		return (
			<nav className="mb-8" aria-label="Breadcrumb">
				<ol className="flex items-center space-x-2 text-sm">
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

	// Search result specific content
	const SearchResultsInfo = () => {
		if (!isSearch) return null;

		return (
			<div className="mt-6 p-4 bg-blue-50 rounded-lg">
				<p className="text-sm text-blue-800">
					Tip: Try using different keywords or check your spelling for better
					results.
				</p>
			</div>
		);
	};

	// 404 specific content
	const NotFoundActions = () => {
		if (!is404) return null;

		return (
			<div className="mt-8 flex flex-col sm:flex-row gap-4">
				<a
					href="/"
					className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Go Home
				</a>
				<a
					href="/contact"
					className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Contact Support
				</a>
			</div>
		);
	};

	// Archive page info
	const ArchiveInfo = () => {
		if (!isArchive) return null;

		return (
			<div className="mt-6 flex items-center text-sm text-gray-500">
				<span>Showing all posts in this category</span>
			</div>
		);
	};

	return (
		<div className={containerClasses}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					{/* Breadcrumbs */}
					<BreadcrumbNav />

					{/* Main Header Content */}
					{headerData.subtitle && (
						<p className={subtitleClasses}>{headerData.subtitle}</p>
					)}

					<h1 className={titleClasses}>{headerData.title}</h1>

					{headerData.description && (
						<p className={descriptionClasses}>{headerData.description}</p>
					)}

					{/* Context-specific content */}
					<SearchResultsInfo />
					<NotFoundActions />
					<ArchiveInfo />

					{/* Homepage specific CTA */}
					{isHomePage && (
						<div className="mt-10 flex items-center gap-x-6">
							<a
								href="#features"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Get started
							</a>
							<a
								href="#learn-more"
								className="text-sm font-semibold text-gray-900"
							>
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
