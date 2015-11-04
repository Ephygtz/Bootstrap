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
	$('#contact-form').on('submit', function(e) {
		url = "/";
		data = $(this).serialize();
		console.log(data);

		$.post(url, data)
		.done(function() {
			alert("You're logged inn");
		}).fail(function() {
			alert("ooops, something went wrong")
		});

		e.preventDefault();
	});

	//Form user inputs validation
	$('#contact-form').validate(
	{
		rules: {
			fullname: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			fullname: "Please enter your full names",
			email: {
				required: "Email cannot be empty!!",
				email: "Please use this format someone@domain.com"
			}
		}

	});


});