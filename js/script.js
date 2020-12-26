// fullpage scrolling -------------------
var myFullpage = new fullpage('#content', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	navigation: true,
	navigationPosition: 'right',
	showActiveTooltip: true,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: false,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,


	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',
});
/*---------X-------------X------------*/


// controls colors ----------------------
$(document).ready(function () {
	
	$('.control-btn').on('click',function () { 
		$('.controls').toggleClass('active');

		$('.controls .control-concel').on('click',function () { 
			$('.controls').removeClass('active');
		});
	});


	$('.control-colors-list li').on('click',function () {

		$('body').attr( 'data-main-colors' , $(this).data('color') );

	});

});
/*-----------X-------------X------------*/




// add class skin-color for element 
$(document).ready(function () {
	  
	$('.typed-cursor').addClass('skin-color');

	$('.about-number-item-num').addClass('skin-color')
	
	$('.c100 .slice , .c100').addClass('skin-color');

	$('.overlay').addClass('skin-backround');

	$('.section-title span').addClass('skin-color');

	$('.contact-info-social a').addClass('skin-backround');
	

});
/*---------X-----------X------------*/




// nav bars -----------------------------
$(document).ready(function () {


	$('.btn-bars').on('click',function () {
		$('.nav-content').toggleClass('active');
	});

	$('.fa-times.cancel').on('click',function () {
		$('.nav-content').toggleClass('active');
	});

	$('.section').click(function () {
		$('.nav-content').removeClass('active');
	});

});
/*-----------X-------------X----------------*/




// btn hover -----------------------------
$(document).ready(function () {


	$('.btn-efect i').css({
		opacity : "0",
		marginLeft : "-10" + "px",
		fontSize : '15' + 'px'
	});
	$('.btn-efect').hover(function () {
		// over
		$('.btn-efect i').animate({
			opacity : "1",
			marginLeft : '10' + 'px',
		});
	}, function () {
		// out
		$('.btn-efect i').animate({
			opacity : "0",
			marginLeft : '-10' + 'px',
		});
	}
	);

});
/*-------------X-------------X------------*/



// typer js --------------------------------
var typed = new Typed('.typed', {
	strings: ['FRINDI', 'DISINGER' , 'DEVLOPMENT' , 'FREELANCER'],
	typeSpeed: 70,
	backSpeed: 20,
	loop : true,
	backDelay: 1000,
	fadeOut: false,
	fadeOutDelay: 500,
	showCursor: true,
	cursorChar: '|',
	shuffle: false,
  });
/*------------X---------------X--------------*/


// wow js -----------------
new WOW().init();
/*------------X-------------X---------------*/


// snake js ------------------------------
$(".snake").snakeify({
	speed: 250
  });
/*-----------X----------------X------------*/



// smoth scrolling nav bar ---------------
$(document).ready(function () {
	
		// smoth scroll
		$('.nav-list li').click(function (e) { 

			$('html').animate({
				scrollTop : $( '#' + $(this).data('link') ).offset().top
			},1000);

			e.preventDefault();

		});

		// home about btn
		$('.home-info-btn').on('click',function (e) {

			$('html').animate({
				scrollTop : $('#about').offset().top
			},1000);

			e.preventDefault();

		});

});
/*-------------X--------------X-------------*/




// loding page ------------------------------
$(document).ready(function () {


	$(window).on('load',function () {

		function lodingFunc() {

			$('.loding-item-color').animate({
				left : "100" + '%'
			},1000, function () {
				$(this).animate({
					left : "-50" + '%'
				},1000 , lodingFunc);
			});
	
		}
		lodingFunc();

	});


	setTimeout(function () {
		$('.loding-page').slideUp();
	},5000);
	

});
/*-------------X---------------X-------------*/



$(document).ready(function () {


});
