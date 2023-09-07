$(document).ready(function() {


    //testimonials


    $('.testi-slider').owlCarousel({
      loop:true,
      margin: 40,
      dots: true,
      nav: true,
      autoplay: true,
      autoplayHoverPause:true,
      animateIn:"fadeIn",
      //slideSpeed : 8000,
      //autoplaySpeed : 4000,
    //   navText: [
    //     '<i class="fas fa-angle-left" aria-hidden="true"></i>',
    //     '<i class="fas fa-angle-right" aria-hidden="true"></i>'
    //   ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    })
   







    //toptobottom

	// browser window scroll (in pixels) after which the "back to top" link is shown

	var offset = 300,

		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced

		offset_opacity = 1200,

		//duration of the top scrolling animation (in ms)

		scroll_top_duration = 700,

		//grab the "back to top" link

		$back_to_top = $('.cd-top');



	//hide or show the "back to top" link

	$(window).scroll(function(){

		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');

		if( $(this).scrollTop() > offset_opacity ) { 

			$back_to_top.addClass('cd-fade-out');

		}

	});



	//smooth scroll to top

	$back_to_top.on('click', function(event){

		event.preventDefault();

		$('body,html').animate({

			scrollTop: 0 ,

		 	}, scroll_top_duration

		);

	});









	$('.blck-tape a').click(function(){

    $('html, body').animate({

        scrollTop: $( $.attr(this, 'href') ).offset().top

    }, 500);

    return false;

});












 });
//end-->





















