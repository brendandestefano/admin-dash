var checkOverlaySize = function($overlay, $image, border, direction){
	var border = border || false;
	if(!$image.length)
		return;

	$overlay.css('height', $image.height() + (border ? parseFloat(border.replace('px', '')) : 0)+'px');

	if(direction == 'bottom')
		$overlay.css('bottom', '-'+($image.height() + (border ? parseFloat(border.replace('px', '')) : 0)+'px'));
	else
		$overlay.css('top', '-'+($image.height() +'px'));
};

jQuery(document).ready(function($){
	var overlayBottom = $('.vertical-navbar__overlay-wrapper--profile');
	var avatar = $('.vertical-navbar__profile-img');

	checkOverlaySize(overlayBottom, avatar, avatar.css('border-bottom-width'), 'bottom');
	checkOverlaySize($('.vertical-navbar__overlay-wrapper--school-logo'), $('.school-logo'), false, 'top');
	checkOverlaySize($('.vertical-navbar__school-logo-wrapper'), $('.school-logo'), false, 'top');


	$(window).on('resize', function(){
		checkOverlaySize(overlayBottom, avatar, avatar.css('border-bottom-width'), 'bottom');
		checkOverlaySize($('.vertical-navbar__overlay--school-logo'), $('.school-logo'), false, 'top');
		checkOverlaySize($('.vertical-navbar__school-logo-wrapper'), $('.school-logo'), false, 'top');
	});
});