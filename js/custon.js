$(function(){ 
	
// menu fix on scroll
	 
    $(window).on('scroll',function(){
        if ($(window).scrollTop() > 100) {
             $('.navbar').addClass('animated flipInX fix')
          }
		else {
              $('.navbar').removeClass('animated flipInX  fix')
          }
		
    });

	
//	back to top js
	


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $('#button').addClass('show');
  } else {
    $('#button').removeClass('show');
  }
});

$('#button').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
	
//	veno box 
	 $('.venobox').venobox({
		 spinner:'cube-grid',
		 spinColor: '#0b8fff',
		arrowsColor: '#fff',
	 }); 
	
	
});

