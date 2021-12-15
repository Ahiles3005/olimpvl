$(document).ready(() => {
	//submit form
	$('.b-form .form-signup').on('submit', function() {
		var jsForm = this;
		var jqForm = $(jsForm);
		
		var loginField = jqForm.find("input[name='REGISTER[LOGIN]']");
		var emailField = jqForm.find("input[name='REGISTER[EMAIL]']");
		var submitBtn = jqForm.find("[type=submit]");
		
		loginField.val(emailField.val());
		
		var dataForm = jqForm.serialize();
		dataForm += '&ajax=y';
		dataForm += '&' + submitBtn.attr('name') + '=' + submitBtn.attr('val');
		
		$.ajax({
			method: jsForm.method,
			url: jsForm.action,
			data: dataForm,
			dataType: "json",
			success: function(data){	
				alert(data);
				if(data.type !== 'success') {
					unsuccessResult(jqForm);
					return;
				}
				
				successResult(jqForm);
			},
			error: function() {
				unsuccessResult(jqForm);
			}
		});
		
		return false;
	});
	
	//success
	function successResult(formObj) {
		window.location.hash = "";
		popups.open('#popup-sign-up-success');
		clearInputs(formObj);
	}
	
	//unsuccess
	function unsuccessResult(formObj) {
		formObj.find("input[name='REGISTER[EMAIL]']").data('signUpError', 'y').valid();
	}
});