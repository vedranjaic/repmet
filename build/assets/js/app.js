// --- [ ROLE SWITCH ]
$('#btn-role-administrator').click(function() {
	$('body').removeClass('role-user');
	$('body').addClass('role-administrator');
});
$('#btn-role-user').click(function() {
	$('body').removeClass('role-administrator');
	$('body').addClass('role-user');
});

// Hide report status if not on report page
$(document).ready(function () {
    if (!(window.location.href.indexOf("index") > -1)) {
       $('.report-settings').addClass('hidden');
    }
});
$(document).ready(function () {
    if (window.location.href.indexOf("edit-group") > -1) {
       $('.active .main-menu-link').addClass('edit-mode');
    }
});

// --- [ TOOLBAR ]
// Toggle .hidden sidebar button
$('.navbar-toggle').click(function() {
	$(this).toggleClass('hidden');
	$(this).siblings('.navbar-toggle').toggleClass('hidden');
	// Toggle main menu
	$('body').toggleClass('main-menu-closed');
});
// Toggle .hidden sidebar button
$('.btn-notifications').click(function(event) {
	$('body').toggleClass('notifications-closed');
	event.preventDefault();
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
	$('.main-menu-item.active').children('.submenu').collapse('toggle');
	$('.main-menu-item').removeClass('active');
	$(this).siblings('.submenu').collapse('toggle');
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
	window.location.href = 'rules.html';
});
