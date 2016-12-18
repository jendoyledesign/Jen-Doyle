$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

$(function () {
	var $b = $('body');
	var $t = $('#mobile-toggle');
	var $m = $('#takeover');
			 
	 $('body').on('click', '#mobile-toggle', function(event){
		event.preventDefault;
			$b.toggleClass('activemenu');
			 })
		 });

	 

 document.querySelector( "#nav-toggle" )
	.addEventListener( "click", function() {
		this.classList.toggle( "active" );
	});
