'use strict';
$(function(){
	//configuration
	var width = 640 ;
	var animationSpped = 1000;
	var pause = 3000;
	var currentSlide = 1;

	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var interval;


	function startSlider(){
	setInterval(function(){

		interval = $slideContainer.animate({'margin-left':'-='+width}, animationSpped,function(){
			currentSlide++;
			if(currentSlide === $slides.length){
				currentSlide = 1;
				$slideContainer.css('margin-left',0);
			}
		});
	}, pause);
	}

	function pauseSlider(){
		clearInterval(interval);
	}
	$slider.on('mouseenter',pauseSlider).on('mouseleave',startSlider);
	startSlider();
	//setInterval
	//animate margin-left
	//
});