// Ahmet Mithat Demirkol - 19050111047
// Activity10_Slider


$(document).ready(function () {
	$("#slider").bxSlider({
		auto: true,
		slideWidth: 250,
		slideMargin: 10,
		randomStart: true,
		speed: 300,
		moveSlides: 1,
		pager: true,
		pagerType: "short",
		touchEnabled: false,
		captions: true,
	});

});