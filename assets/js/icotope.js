// icotope
$('.protWorkConGrid').isotope({
  itemSelector: '.protWorkGrid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// init Isotope
var $protWorkConGrid = $('.protWorkConGrid').isotope({
  itemSelector: '.protWorkGrid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $protWorkConGrid.isotope({ filter: filterValue });
});
$('.filter-button-group').on( 'click', 'button', function() {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});