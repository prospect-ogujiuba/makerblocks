<section <?php echo get_block_wrapper_attributes(); ?>>
    <?php
    global $wp_query;
    $numberOfPostsFound = $wp_query->found_posts;
    $searchQuery = get_search_query(false);
    ?>

    <!-- Hero Search Header -->
    <div class="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 py-12 lg:py-16 relative z-10">
            <div class="flex items-center gap-3 mb-4">
                <i class="bi bi-search text-white text-3xl"></i>
                <h1 class="text-3xl lg:text-4xl font-bold text-white">Search Results</h1>
            </div>
            <p class="text-blue-50 text-lg mb-6">
                Found <span class="font-semibold text-white"><?php echo esc_html($numberOfPostsFound); ?></span>
                <?php echo $numberOfPostsFound === 1 ? 'result' : 'results'; ?> for
                <span class="font-semibold text-white">"<?php echo esc_html($searchQuery); ?>"</span>
            </p>
            <!-- Search Again Form -->
            <div class="max-w-2xl">
                <form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>" class="relative">
                    <input type="search"
                           name="s"
                           value="<?php echo esc_attr($searchQuery); ?>"
                           placeholder="Search again..."
                           class="w-full bg-white px-6 py-4 pr-14 rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-lg">
                    <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                        <i class="bi bi-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Results Content -->
    <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <!-- Main Results Column -->
            <div class="lg:col-span-2">
                <?php if (have_posts()) { ?>
                    <div class="space-y-6">
                        <?php while (have_posts()) {
                            the_post();
                            $excerpt = get_the_excerpt();
                            $post_type = get_post_type();
                            ?>
                            <article class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                                <!-- Post Type Badge -->
                                <?php if ($post_type !== 'post') { ?>
                                    <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                                        <?php echo esc_html(ucfirst($post_type)); ?>
                                    </span>
                                <?php } ?>

                                <!-- Title -->
                                <h2 class="text-xl lg:text-2xl font-bold mb-3">
                                    <a href="<?php the_permalink(); ?>" class="text-gray-900 hover:text-blue-700 transition-colors">
                                        <?php the_title(); ?>
                                    </a>
                                </h2>

                                <!-- Meta Info -->
                                <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                    <span class="flex items-center gap-1">
                                        <i class="bi bi-calendar3"></i>
                                        <?php echo get_the_date(); ?>
                                    </span>
                                    <?php if (get_the_author()) { ?>
                                        <span class="flex items-center gap-1">
                                            <i class="bi bi-person"></i>
                                            <?php the_author(); ?>
                                        </span>
                                    <?php } ?>
                                </div>

                                <!-- Excerpt -->
                                <?php if ($excerpt) { ?>
                                    <p class="text-gray-700 mb-4 line-clamp-3">
                                        <?php echo esc_html($excerpt); ?>
                                    </p>
                                <?php } ?>

                                <!-- Read More Link -->
                                <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium transition-colors">
                                    Read more
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </article>
                        <?php } ?>
                    </div>

                    <!-- Pagination -->
                    <?php if ($wp_query->max_num_pages > 1) { ?>
                        <div class="mt-12 flex justify-center">
                            <div class="flex gap-2">
                                <?php
                                echo paginate_links(array(
                                    'prev_text' => '<i class="bi bi-chevron-left"></i>',
                                    'next_text' => '<i class="bi bi-chevron-right"></i>',
                                    'type' => 'list',
                                    'class' => 'flex gap-2'
                                ));
                                ?>
                            </div>
                        </div>
                    <?php } ?>

                <?php } else { ?>
                    <!-- No Results State -->
                    <div class="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100">
                        <div class="max-w-md mx-auto">
                            <i class="bi bi-search text-gray-300 text-6xl mb-6"></i>
                            <h2 class="text-2xl font-bold text-gray-900 mb-4">
                                No results found
                            </h2>
                            <p class="text-gray-600 mb-8">
                                We couldn't find any results for <span class="font-semibold">"<?php echo esc_html($searchQuery); ?>"</span>.
                                Try adjusting your search terms or browse our categories.
                            </p>

                            <!-- Search Suggestions -->
                            <div class="bg-gray-50 rounded-lg p-6 text-left">
                                <h3 class="font-semibold text-gray-900 mb-3">Search tips:</h3>
                                <ul class="space-y-2 text-gray-700 text-sm">
                                    <li class="flex items-start gap-2">
                                        <i class="bi bi-check-circle-fill text-blue-600 mt-0.5"></i>
                                        <span>Check your spelling</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <i class="bi bi-check-circle-fill text-blue-600 mt-0.5"></i>
                                        <span>Try more general keywords</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <i class="bi bi-check-circle-fill text-blue-600 mt-0.5"></i>
                                        <span>Use different search terms</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>

            <!-- Sidebar -->
            <aside class="lg:col-span-1">
                <div class="sticky top-8 space-y-6">
                    <!-- Contact Card -->
                    <div class="contact-card"></div>

                    <!-- Popular Categories -->
                    <?php
                    $categories = get_categories(array('number' => 5, 'orderby' => 'count', 'order' => 'DESC'));
                    if ($categories) { ?>
                        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <i class="bi bi-folder"></i>
                                Popular Categories
                            </h3>
                            <ul class="space-y-2">
                                <?php foreach ($categories as $category) { ?>
                                    <li>
                                        <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>"
                                           class="flex items-center justify-between text-gray-700 hover:text-blue-700 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50">
                                            <span><?php echo esc_html($category->name); ?></span>
                                            <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                <?php echo esc_html($category->count); ?>
                                            </span>
                                        </a>
                                    </li>
                                <?php } ?>
                            </ul>
                        </div>
                    <?php } ?>
                </div>
            </aside>

        </div>
    </div>
</section>
