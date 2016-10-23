'use strict';

$('.carousel.carousel-slider').carousel({full_width: true});

// setInterval(() => {
// 	$('.carousel').carousel('next');
// }, 6000);

$('#what-i-do .activity-card .card-content.description').hide();

$('#what-i-do .activity-card').hover(function () {
	$(this).find('.card-content.description').show();
}, function () {
	$(this).find('.card-content.description').hide();
});
