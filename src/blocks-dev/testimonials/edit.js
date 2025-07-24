/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<div className="relative isolate bg-white pb-16 pt-12 sm:pt-16">
				{/* Background decorative elements - simplified for editor */}
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-20 blur-3xl"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
					/>
				</div>

				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-base/7 font-semibold text-blue-600">
							{__("Client Testimonials", "b2bcnc")}
						</h2>
						<p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
							{__("Trusted by businesses across industries", "b2bcnc")}
						</p>
					</div>

					{/* Simplified preview layout for editor */}
					<div className="mx-auto mt-16 max-w-4xl">
						{/* Featured testimonial preview */}
						<div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 p-6 mb-8">
							<blockquote className="text-lg font-semibold tracking-tight text-gray-900">
								<p>
									{__(
										'"B2bCNC transformed our entire communication infrastructure. Their VOIP implementation reduced our phone costs by 60% while improving call quality..."',
										"b2bcnc",
									)}
								</p>
							</blockquote>
							<div className="mt-4 flex items-center gap-x-4">
								<div className="size-10 rounded-full bg-gray-200 flex-none"></div>
								<div>
									<div className="font-semibold text-gray-900">
										Sarah Mitchell
									</div>
									<div className="text-gray-600">TechFlow Solutions</div>
								</div>
							</div>
						</div>

						{/* Grid preview */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								{
									name: "Marcus Rodriguez",
									company: "Rodriguez & Associates",
									service: "Network Cabling",
								},
								{
									name: "Jennifer Park",
									company: "Metro Health Clinic",
									service: "Access Control",
								},
								{
									name: "David Chen",
									company: "Chen Manufacturing",
									service: "Camera Systems",
								},
								{
									name: "Amanda Foster",
									company: "Foster Legal Group",
									service: "VOIP Solutions",
								},
								{
									name: "Robert Thompson",
									company: "Thompson Logistics",
									service: "Network Infrastructure",
								},
								{
									name: "Lisa Wang",
									company: "Wang Retail Group",
									service: "Security Systems",
								},
							].map((testimonial, index) => (
								<div
									key={index}
									className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5"
								>
									<blockquote className="text-sm text-gray-900 mb-3">
										<p>
											{__(
												`"Professional ${testimonial.service.toLowerCase()} installation and support from B2bCNC..."`,
												"b2bcnc",
											)}
										</p>
									</blockquote>
									<div className="flex items-center gap-x-3">
										<div className="size-8 rounded-full bg-gray-200"></div>
										<div>
											<div className="text-sm font-semibold text-gray-900">
												{testimonial.name}
											</div>
											<div className="text-xs text-gray-600">
												{testimonial.company}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Editor note */}
						<div className="mt-8 text-center">
							<p className="text-sm text-gray-500 italic">
								{__(
									"✨ B2bCNC Testimonials Block - Frontend will show full layout with all testimonials",
									"b2bcnc",
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
