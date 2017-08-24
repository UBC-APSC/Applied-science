/*!
 * APSC / ENG ( https://github.com/UBC-APSC/Applied-science )
 * @copyright 2017 UBC APSC.
 * @license MIT ( https://github.com/UBC-APSC/Applied-science/blob/master/LICENSE )
 */

// accordions
$('.accordion-tab').click( function() {
	$(this).next('.accordion-content').slideToggle( 'fast');
	$(this).parent().toggleClass("accordion-open");
});