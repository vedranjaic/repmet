// --- [ THEME SWITCHER ]
$('#theme-dark').click(function() {
	$('body').removeClass('theme-light').addClass('theme-dark');
});
$('#theme-light').click(function() {
	$('body').removeClass('theme-dark').addClass('theme-light');
});


// --- [ TOOLBAR ]
// Toggle .hidden sidebar button
$('.navbar-toggle').click(function() {
	$(this).toggleClass('hidden');
	$(this).siblings('.navbar-toggle').toggleClass('hidden');
	$('body').toggleClass('main-menu-closed');
});

// Search
$('.btn-search').click(function() {
	$(this).siblings('.search-bar').toggleClass('search-collapsed');
	$('#search-input').focus();
});
// Search reset
$('.btn-search-reset').click(function() {
	$('#search-input').val("").focus();
})

// --- [ MENU ]
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


//
// --- [ PRESENTATION ] --- //
//
// Table click row shows hidden rows
$('.table-row-l0').click(function() {
	$(this).siblings('.table-row-l1').toggleClass('hidden');
});
$('.table-row-l1').click(function() {
	$(this).siblings('.table-row-l2').toggleClass('hidden');
});
$('.table-row-l2').click(function() {
	window.location.href = '/rules.html';
});