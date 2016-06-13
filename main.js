var checkOverlaySize = function($overlay, $image, border){
	var border = border || false;
	if(!$image.length)
		return;

	$overlay.css({
		height: $image.height() + parseFloat(border.replace('px', ''))+'px',
		bottom: '-'+($image.height() + parseFloat(border.replace('px', ''))+'px')
	});
};

jQuery(document).ready(function($){
	var overlay = $('.vertical-navbar__overlay-wrapper');
	var image = $('.vertical-navbar__profile-img');

	checkOverlaySize(overlay, image, image.css('border-bottom-width'));

	$(window).on('resize', function(){
		checkOverlaySize(overlay, image, image.css('border-bottom-width'));
	});
});