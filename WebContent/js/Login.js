/**
 * Created by Bij og Stu on 07/06/2017.
 */
$(document).ready(function(event) {
	
	$('#Login').submit(function(event) {
		data = $('#Login').serializeArray();
		event.preventDefault();
		var tempUser = {
		brugerId : data[0]['value'],
		password : data[1]['value']
		};
		
		Login(tempUser);
		return false;
	});
});

function Login(tempUser) {
$.ajax({
	type: 'POST',
	url: 'rest/LoginService/verify',
	dataType: "json",
	data: JSON.stringify(tempUser),
	contentType: "application/json",
	success: function (response) 
	{
		var test = getRolle(tempUser[Object.keys(tempUser)[0]]);
	
		alert(test);
		
		if(response==true)
		{
			
			alert("Login succesful: " + response );
			window.location.replace("http://localhost:8080/CDIOFinal/HomePage.html");
		}
		else
		{
			alert("Login unsuccesful, wrong id or password!");
		}
	},
	error: function (jqXHR, textStatus, errorThrown){
		
		alert("Login unsuccesful: " + textStatus);
	}
});
}
function getRolle(searchKey) {
	alert("test");
	$.ajax({
		type: 'POST',
		url: 'rest/LoginService/rolle' + searchKey,
		dataType: "json",
		data: JSON.stringify(searchKey),
		contentType: "application/json",
		success: function (response) 
		{
			return response;
		},
		error: function (jqXHR, textStatus, errorThrown){
			
			alert("Could not receive the role: " + textStatus);
		}
	});
}
