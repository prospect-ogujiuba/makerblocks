import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
	return (
		<section {...useBlockProps()}>
			<div class="flex flex-col">
				<div class="flex flex-col items-center justify-center">
					<p>x posts found</p>
					<div class="w-full bg-green-800 p-4">
						<p class="text-2xl max-w-7xl mx-auto text-white font-bold">
							Results for "search-term" (x)
						</p>
					</div>
				</div>

				<div class="py-8 grid grid-cols-1 lg:grid-cols-3 gap-y-8 px-4 max-w-7xl mx-auto">
					<ul class="space-y-4 col-span-2 px-4">
						<li class="w-full">
							<div>
								<a class="font-medium underline" href="<?= the_permalink() ?>">
									Post Title
								</a>
							</div>
						</li>
					</ul>

					<div class="w-full col-span-2 space-y-4">
						<p class="text-2xl">No results for "search-term".</p>
						<p class="text-xl">Try another search term</p>
						<form class="flex text-black">
							<input name="" id="s" type="search" placeholder="Search..." />
							<button class="px-4 bg-green-500">
								<i class="text-white bi-search"></i>
							</button>
						</form>
					</div>

					<div class="order-3">
						<div class="contact-card"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
