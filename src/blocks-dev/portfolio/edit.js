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

// Sample portfolio data - matches the frontend component and company services
const portfolioItems = [
  {
    title: 'Enterprise VoIP System Deployment',
    category: 'VoIP Phone System',
    description: 'Complete VoIP phone system installation for 200+ employee manufacturing facility with call routing, conferencing, and mobile integration.',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    projectUrl: '#',
    technologies: ['Cisco VoIP', 'SIP Trunking', 'Call Manager'],
  },
  {
    title: 'Multi-Site Security Camera Network',
    category: 'Camera System',
    description: 'Comprehensive IP camera surveillance system across 5 retail locations with centralized monitoring and cloud storage.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    projectUrl: '#',
    technologies: ['IP Cameras', 'NVR Systems', 'Cloud Storage'],
  },
  {
    title: 'Corporate Access Control Integration',
    category: 'Card Access Control',
    description: 'Advanced card access control system for corporate headquarters with biometric integration and visitor management.',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    projectUrl: '#',
    technologies: ['RFID Cards', 'Biometric Scanners', 'Access Management'],
  },
]

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const blockProps = useBlockProps({
		className: 'bg-white py-24 sm:py-32'
	});

	return (
		<div {...blockProps}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						{__("Our Portfolio", "b2bcnc")}
					</h2>
					<p className="mt-6 text-lg/8 text-gray-600">
						{__("See how we've helped businesses enhance their communications, security, and IT infrastructure with our comprehensive technology solutions and expert consulting services.", "b2bcnc")}
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{portfolioItems.map((item) => (
						<article key={item.title} className="flex flex-col items-start">
							<div className="relative w-full">
								<img
									alt={item.title}
									src={item.imageUrl}
									className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</div>
							<div className="max-w-xl">
								<div className="mt-8 flex items-center gap-x-4 text-xs">
									<span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
										{item.category}
									</span>
								</div>
								<div className="group relative">
									<h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
										<a href={item.projectUrl}>
											<span className="absolute inset-0" />
											{item.title}
										</a>
									</h3>
									<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{item.description}</p>
								</div>
								<div className="mt-6 flex flex-wrap gap-2">
									{item.technologies.map((tech) => (
										<span
											key={tech}
											className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
