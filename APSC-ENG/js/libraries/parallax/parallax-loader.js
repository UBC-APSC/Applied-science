/*!
 * APSC / ENG ( https://github.com/UBC-APSC/Applied-science )
 * @copyright 2017 UBC APSC.
 * @license MIT ( https://github.com/UBC-APSC/Applied-science/blob/master/LICENSE )
 */

jQuery(document).ready( function($) {

 srcset = $('.page-main-header-image').attr('src');
 imgwidth = $('.page-main-header-image').get(0).naturalWidth;
 imgheight = $('.page-main-header-image').get(0).naturalHeight;
	if(srcset)
	{
		$('.parallax-container').attr({
			'data-image-src': srcset,
			'data-parallax': 'scroll',
			'data-ios-fix': true,
			'data-android-fix': true,
			'naturalWidth': imgwidth,
			'naturalHeight': imgheight
		});
		$('.page-main-header-image').attr({
			'style': 'position: relative;z-index: -101'
		});
	}
	
 		// react to sticky menus
		var unitInitTopPos = $("#ubc7-unit-menu").offset().top;
		$( window ).resize(function() {
		  var unitInitTopPos = $("#ubc7-unit-menu").offset().top;
		});
		$(window).scroll(function()
		{
			var scroll = $(window).scrollTop();
			var width = window.innerWidth;
			if (width < 980)
			{
				if(scroll >= 100)
				{
					$(".parallax-container").css({
						'margin-top': '50px'
					});
				}
				else
				{
						$(".parallax-container").css({
							'margin-top': ''
						});
				}
			}
			else if (width >= 980)
			{
				if(scroll >= unitInitTopPos)
				{
					if (width < 1200)
					{
						$(".parallax-container").css({
							'margin-top': '40px'
						});
					}
					else if (width >= 1200)
					{
						$(".parallax-container").css({
							'margin-top': '45px'
						});
					}
				}
				else
				{
						$(".parallax-container").css({
							'margin-top': ''
						});
				}
			}
		});
});