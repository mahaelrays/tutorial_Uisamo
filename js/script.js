/*global $, alert, console */

$(function() {
	'use strict';
	
	$('html').niceScroll();
	
	/* Trigger Popover */
	$("[data-toggle = 'popover']").popover();
	
	
	// Counting numbers	
	$('.customer_num').countTo({
		from: 0,
		to: 25,
		speed: 1000,
		refreshInterval: 50,
		onComplete: function(value) {
			console.debug(this);
		}
    });
	$('.ticket_num').countTo({
		from: 0,
		to: 9083,
		speed: 500,
		refreshInterval: 50,
		onComplete: function(value) {
			console.debug(this);
		}
    });
	$('.rate_num').countTo({
		from: 0,
		to: 9,
		speed: 1000,
		refreshInterval: 50,
		onComplete: function(value) {
			console.debug(this);
		}
    });
	
	// Carousel
	$('#myCarousel').carousel('pause') ;
	
	$(".collapse.in").each(function(){
		$(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
	});
	
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
	}).on('hide.bs.collapse', function(){
		$(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
	});
	
	// make navbar fixed-top
	$(window).scroll(function(){
		var navbar = $('.navbar');
		if($(window).scrollTop() >= navbar.height()){
			if(!navbar.hasClass('scrolled')){
				navbar.addClass('scrolled navbar-fixed-top');
			}			
		}else{
			navbar.removeClass('scrolled navbar-fixed-top');
		}
	});
	
	// Make Smooth Scroll to Div
	$(".navbar ul li a").click(function(){
		$("html , body").animate({
			scrollTop : $($(this).data("value")).offset().top
		},2000);
	});
	
	//Activate WOW.js
	new WOW().init();
	
	
});

	