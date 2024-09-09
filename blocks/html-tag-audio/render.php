<?php

$autoplay = $attributes['autoplay'] ? 'autoplay' : '';
$controls = $attributes['controls'] ? 'controls' : '';
$loop = $attributes['loop'] ? 'loop' : '';
$muted = $attributes['muted'] ? 'muted' : '';
$preload = esc_attr($attributes['preload']);
$src = esc_url($attributes['src']);
$text = esc_html($attributes['text']);

?>

<audio
    <?php echo $autoplay ?>
    <?php echo $controls ?>
    <?php echo $loop ?>
    <?php echo $muted ?>
    <?php echo $preload; ?>
    src="<?php echo $src; ?>">
    <?php echo $text; ?>
</audio>