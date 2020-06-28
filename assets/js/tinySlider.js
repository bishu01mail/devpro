var slider = tns({
    container: '.doc_testimonialSlider',
    items: 3,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    mouseDrag: true,
    navPosition: "bottom",
    autoplayHoverPause: "true",
    autoplayButtonOutput: false,
    responsive: {
	    0:{
	       items:1,
        },
        768:{
            items:2,
        },
        1200: {
	        items:3,
        }

	},
	// gutter: 30,
	lazyload: true,
	speed: 800
});