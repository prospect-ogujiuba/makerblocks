<?php

$href = isset($attributes['href']) ? esc_url($attributes['href']) : '';
$target = isset($attributes['target']) ? esc_attr($attributes['target']) : '_self';

?>

<base href="<?php echo $href ?>" target="<?php echo $target ?>">
<p>Specifies a base URL for all relative URLs on a page. (**Only works inside head tag**)</p>