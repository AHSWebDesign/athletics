//Advanced Stuff
function main() {

(function () {
   'use strict';

	// Hide .navbar first
	$(".navbar").hide();
	
	// Fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before fadeIn on navbar
			if ($(this).scrollTop() > 150) {
        $(".navbar").removeClass("navbar-custom-faded");
			} else {
				$(".navbar").addClass("navbar-custom-faded");
			}
		});

	
	});
	
	$('.carousel').carousel({
  interval: 0
  })
	
	// Preloader */
	  	$(window).load(function() {

   

  	})

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $(".sc").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
  });

    // Show Menu on Nav
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({
        target: '#navbar',
        offset: 80
    })
}());


}
main();