// Toggle .active on current .main-menu-item
$('.main-menu-item > a').click(function() {
	$('.main-menu-item').removeClass('active');
	$('.submenu').removeClass('in');
	$(this).parent('li').toggleClass('active');
});
$('.submenu-item a').click(function() {
	$('.submenu-item').removeClass('active');
	$(this).parent('.submenu-item').addClass('active');
});

// Toggle .hidden sidebar button
$('.navbar-toggle').click(function() {
	$(this).toggleClass('hidden');
	$(this).siblings('.navbar-toggle').toggleClass('hidden');
	$('body').toggleClass('main-menu-closed');
});