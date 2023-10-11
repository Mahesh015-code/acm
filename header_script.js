      // ===== Scroll to Top ==== 
      $(window).scroll(function() {
          if ($(this).scrollTop() >= 400) {        // If page is scrolled more than 50px
              $('#return-to-top').fadeIn(200);    // Fade in the arrow
          } else {
              $('#return-to-top').fadeOut(200);   // Else fade out the arrow
          }
      });
      $('#return-to-top').click(function() {      // When arrow is clicked
          $('body,html').animate({
              scrollTop : 0                       // Scroll to top of body
          }, 500);
      });
      $(".navbar .menu-icon").click(function(){
        $(".navbar .nav-wrapper").toggleClass("in");
        
      });
         	//$("#about").click(function(){
 // alert("The paragraph was clicked.");
  //});
     /* $('html, body').animate({
      scrollTop: $($(this).attr('data-section')).offset().top - $(".navbarhp").height()
    }, 500);*/