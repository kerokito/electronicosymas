jQuery('document').ready(function($) {

	var menuBtn = $('.lnr-menu'),
		menu = $('.nav ul');

	menuBtn.click(function() {

		if (menu.hasClass('show')) {

			menu.removeClass('show');
		} else {

			menu.addClass('show');
		}

	});

});