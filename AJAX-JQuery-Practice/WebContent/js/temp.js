$(document).ready(function(){
	console.log("Jquery loaded");
	$("#ok").click(function(){
		console.log("inside button");
		var zip = $("#zipcode").val();

		$.ajax({
			url:"https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=8d497e9488fc361ac1245b1992cfda79"
		}).then(function(data){
			console.log(data);
			document.getElementById("res").innerHTML = 
			"City Name is:"+data.name
			+"<br/>Minium Temp is:"+data.main.temp_min
			+"<br/>Max Temp is:"+data.main.temp_max

		})
	})
})