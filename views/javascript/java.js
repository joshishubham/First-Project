<!--

onerror = showError

function showError(x, y, z) {

	alert(x + " , " + y + " , " + z);
}

function s(txt) {
    
	name     = document.myform.Name.value;
	email    = document.myform.Email.value;
	atpos    = email.indexOf("@");
	dotpos   = email.lastIndexOf(".");
	password = document.myform.Password.value;
	confirm  = document.myform.Confirm.value
	mobile   = document.myform.Mobile.value;
	date     = document.myform.Dates.value;
	month    = document.myform.Month.value;
	year     = document.myform.Year.value;
	gender   = document.myform.Gender.value;
    
    //Password checking
   	pass1    = document.getElementById('pass1').value;
    pass2    = document.getElementById('pass2').value; 
   
    //Validation
	if (name == "") {
		alert("Please enter your name.");

		return false;
	}

	if (!isNaN(name)) {
		alert("Please check your name.");

		return false;
	}

	if (email == "") {
		alert("Please enter your email address.");

		return false;
	}
	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
		alert("Please enter valid email address.");

		return false;
	}
	if (password == "") {
		alert("Please enter your password.");

		return false;
	}
	 else if (password.length < 6) {
		alert("Password must be at least 6 characters long.");

		return false;

	}
	if (confirm == "") {
		alert("Please enter your confirm password.");

		return false;
	}
	 else if (confirm.length < 6) {
		alert("Confirm password must be at least 6 characters long.");

		return false;

	}

	if (pass1 != pass2) {
      
        alert("Password did not Match!!!");

        return false;
    }

	if (mobile == "") {
		alert("Please enter your mobile number.");

		return false;

	}
	if (isNaN(mobile)) {
		alert("Please enter correct mobile number.");

		return false;

	} else if (mobile.length < 10 || mobile.length > 10) {
		alert("Mobile number must be at least 10 characters long.");


		return false;

	}


	if (isNaN(date)) {
		alert("Please enter your date birth.");

		return false;

	}
	if (month == "Month") {
		alert("Please enter your month.");

		return false;

	}

	if (isNaN(year)) {
		alert("Please enter your date year.");

		return false;

	}
	if (gender == "select") {
		alert("Please enter your gender.");

		return false;

	}
	else {
		return true;
	}

}

//-->