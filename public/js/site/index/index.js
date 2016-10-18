'use strict';

$('.carousel.carousel-slider').carousel({full_width: true});

setInterval(() => {
	$('.carousel').carousel('next');
}, 6000);
