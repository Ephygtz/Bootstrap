 //FIrst check if the document has loaded
$(document).ready(function() {
	$('h1').mouseenter(function() {
		//$(this).fadeToggle(1000).fadeIn();
		$(this).slideUp(1000).slideDown(1000);
	});
	$('#unhide h5').hide();
	$('#hover').hover(function() {
		$('#unhide h5').slideDown(1000);
	});
	$('#hover').mouseleave(function(){
		$('#unhide h5').hide(1500);
	})
});