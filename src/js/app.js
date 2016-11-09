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


// --- [ NESTABLE ]
// Serialize
var updateOutput = function(e)
{
    var list   = e.length ? e : $(e.target),
        output = list.data('output');
    if (window.JSON) {
        output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
    } else {
        output.val('JSON browser support required for this demo.');
    }
};

// activate Nestable for list
$('#nestable').nestable({
    group: 1
})
.on('change', updateOutput);

// output initial serialised data
updateOutput($('#nestable').data('output', $('#nestable-output')));

// Expand and collapse toggle
$('#nestable-menu').on('click', function(e)
{
    var target = $(e.target),
        action = target.data('action');
    if (action === 'expand-all') {
        $('.dd').nestable('expandAll');
    }
    if (action === 'collapse-all') {
        $('.dd').nestable('collapseAll');
    }
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