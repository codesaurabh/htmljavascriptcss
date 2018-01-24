function formValidation()
{
   var form=document.getElementById('regForm');
   var uid = form.username;
   var passid = form.password;
   if(userid_validation(uid,6,15))
   {
     if(passid_validation(passid,8,12))
     {
		form.action = "success.html";
		form.submit();		
     }
   }
   return false;
}


function userid_validation(uid,mx,my)
{
	var uid_len = uid.value.length;
	var myInputClasses = document.getElementById("username").classList;
	if (uid_len == 0 || uid_len >= my || uid_len < mx)
	{
		alert("User name should not be empty / length be between "+mx+" to "+my);
		myInputClasses.add("red-border");
		document.regForm.username.focus();
		return false;
	}
	else
	{
		var letters = /^[0-9a-zA-Z]+$/;
		if(uid.value.match(letters))
		{
			return true;
		}
		else
		{
			alert("Only alphanumeric characters allowed for username field.");
			myInputClasses.add("red-border");
			document.regForm.username.focus();
			return false;
		}
	}
}


function passid_validation(passid,mx,my)
{
	var myInputClasses = document.getElementById("password").classList;
	var passid_len = passid.value.length;
	if (passid_len == 0 || passid_len >= my || passid_len < mx)
	{
		alert("Password should not be empty / length be between "+mx+" to "+my);
		myInputClasses.add("red-border");
		document.regForm.password.focus();
		return false;
	}
	else
	{
		var reg1 = /[A-Z]/g;
		var reg2 = /[a-z]/g;
		var reg3 = /[0-9]/g;
		if(reg1.test(passid.value) && reg2.test(passid.value) && reg3.test(passid.value)) {
			return true;
		}
		else
		{
			alert("Password must contain at least one number, one uppercase and one lowercase letter." + passid.value);
			myInputClasses.add("red-border");
			document.regForm.password.focus();
			
			return false;
		}
	}
	return true;
}


function border_update(inp)
  {
     var element = document.getElementById(inp);
	 var myInputClasses = document.getElementById(inp).classList;
	 var value = element.value;
	 var minlength =0;
	 var maxlength =0;	 
	 if(element.name == 'username')
	  {
		 minlength = 6;
		 maxlength =15;
	  }
	 else
	  {
		minlength =8;
		maxlength =12;
	  }
     if(value.length<minlength || value.length>maxlength)
     {
          myInputClasses.add("red-border");
		  
          element.focus();
     }else
     {
          myInputClasses.remove("red-border");
 
     }
  }

