var checkOverlaySize = function($overlay, $image, border, direction){
	var border = border || false;
	if(!$image.length)
		return;

	$overlay.css('height', $image.height() + (border ? parseFloat(border.replace('px', '')) : 0)+'px');

	if(!direction)
		return;
	if(direction == 'bottom')
		$overlay.css('bottom', '-'+($image.height() + (border ? parseFloat(border.replace('px', '')) : 0)+'px'));
	else
		$overlay.css('top', '-'+($image.height() +'px'));
};

var setBannerCssProperties = function(){
	$('.header').css({
		padding: ($('.banner').height() - $('.header').height()) / 2 +'px'
	});
};

var onDocumentReady = function(){
	//var overlayBottom = $('.vertical-navbar__overlay-wrapper--profile');
	//var avatar = $('.vertical-navbar__profile-img');

	//checkOverlaySize(overlayBottom, avatar, avatar.css('border-bottom-width'), 'bottom');
	checkOverlaySize($('.js-school-logo-target'), $('.js-school-logo'), false, 'top');
	checkOverlaySize($('.js-avatar-target'), $('.js-avatar'), $('.js-avatar').css('border-bottom-width'), 'bottom');
	checkOverlaySize($('.banner'), $('.js-school-logo'), false, false);
	//checkOverlaySize($('.vertical-navbar__school-logo-wrapper'), $('.school-logo'), false, 'top');
	//checkOverlaySize($('.dashboard-background-banner'), $('.school-logo'), false, false);
	setBannerCssProperties();

	initiateStatCharts();
	initiateBarChart();
	initiateLineChart();
	initiatePieChart();

	$(window).on('resize', function(){
		checkOverlaySize($('.js-school-logo-target'), $('.js-school-logo'), false, 'top');
		checkOverlaySize($('.js-avatar-target'), $('.js-avatar'), $('.js-avatar').css('border-bottom-width'), 'bottom');
		checkOverlaySize($('.banner'), $('.js-school-logo'), false, false);
		setBannerCssProperties();
	});
};

jQuery(document).ready(function($){
	onDocumentReady();
});