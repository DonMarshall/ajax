$('document').ready(function(){

	// Listen to the username and email input fields
	$('#username').blur( checkUsername );
	$('#email').blur( checkEmail );

});

function checkUsername() {

	// Obtain the username
	var username = $(this).val();

	// Leave if the username is blank
	if( username.length < 5 ) {
		$('#username-message').html('Needs to be at least 5 characters');
		return;
	} else {
		$('#username-message').html('');
	}

	// Send the username to the server
	$.ajax({
		type: 'post',
		url: 'app/validate-username.php',
		data: {
			username: username
		},
		success: function(dataFromServer) {
			$('#username-message').html(dataFromServer);
		},
		error: function(){
			console.log('cannot find the php file');
		}
	});

}

function checkEmail() {

	// Obtain the email
	var email = $(this).val();

	// Leave if the email is blank
	if( email.length < 5 ) {
		$('#email-message').html('Needs to be at least 5 characters');
		return;
	} else {
		$('#email-message').html('');
	}

	// Send the email to the server
	$.ajax({
		type: 'post',
		url: 'app/validate-email.php',
		data: {
			email: email
		},
		success: function(dataFromServer) {
			$('#email-message').html(dataFromServer);
		},
		error: function(){
			console.log('cannot find the php file');
		}
	});

}