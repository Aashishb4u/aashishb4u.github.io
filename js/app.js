jQuery(function ($) {




	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});

	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop() > 500 ){
			console.log(slideHeight);
			$('.main-nav').addClass('main-nav-change');
			$('.dashboard-title-text').addClass('show');
			$('.hide-on-scroll').addClass('hide');
			$('.hide-on-scroll').removeClass('show');
		} else {
			$('.main-nav').removeClass('main-nav-change');
			$('.dashboard-title-text').removeClass('show');
			$('.hide-on-scroll').removeClass('hide');
		}
	});

	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	//menu active on click
	$('.toggle-menu').jPushMenu();

	//initlize onepagenav
	$('#main-navigation').onePageNav({
	    filter: ':not(.external)'
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.nav-menu').find('a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.nav-menu li.scroll')
				.removeClass('current')
				.eq(i).addClass('current');			
			}
		})
	};

	//Initiat WOW JS
	new WOW().init();

	//smoothScroll
	smoothScroll.init();
	
	//Countdown
	$('#count-down').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.counter').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});


	//Countdown
	$('.example-2').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			// $(this).find('.increment').each(function () {
			// 	$(this).prop('Counter',0).animate({
			// 		Counter: $(this).text()
			// 	}, {
			// 		duration: 1000,
			// 		easing: 'swing',
			// 		step: function (now) {
			// 			$(this).text(Math.ceil(now));
			// 		}
			// 	});
			// });
			$(this).find('.increment').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 6000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	//content slider
	$('.bx-slider').bxSlider({
  	  pager: false,		  	
	  nextSelector: '#slider-next',
	  prevSelector: '#slider-prev',
	  nextText: '<i class="fa fa-angle-right"></i>',
	  prevText: '<i class="fa fa-angle-left"></i>'
	});


	//isotope
	$(window).load(function(){'use strict';
		var $achievment_selectors = $('.achievment-filter >li>a');
		var $achievment = $('.achievment-items');
		$achievment.isotope({
			itemSelector : '.achievment-item',
			layoutMode : 'fitRows'
		});
		
		$achievment_selectors.on('click', function(){
			$achievment_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$achievment.isotope({ filter: selector });
			return false;
		});
	});
});


// Hide and show icon logic
//
// $('.feature-item').hover(function () {
// 	$(this).find('.pmc-care').hide();
// 	$(this).find('.pmc-care-white').show();
// }, function()
// {
// 	$(this).find('.pmc-care').show();
// 	$(this).find('.pmc-care-white').hide();
// });

$(".feature-item").hover(function() {
	$( '.pmc-care' ).attr("src","pmc_images/pmc-care-white.png");
}, function() {
	$( '.pmc-care' ).attr("src","pmc_images/pmc-care.png");
});


particlesJS('particles-js',

	{
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#888"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#777",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true,
		"config_demo": {
			"hide_card": false,
			"background_color": "#b61924",
			"background_image": "",
			"background_position": "50% 50%",
			"background_repeat": "no-repeat",
			"background_size": "cover"
		}
	}

);

