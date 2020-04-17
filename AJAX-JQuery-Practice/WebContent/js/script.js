$(document).ready(function(){
	console.log("Jquery Loaded");
	$("#ok").click(function(){
		console.log("inside button");
		var lat = $("#latitude").val();
		var lon = $("#longitude").val();
		$.ajax({
			url:"https://api.openweathermap.org/data/2.5/find?lat="+lat+"&lon="+lon+"&cnt=10&appid=8d497e9488fc361ac1245b1992cfda79"
		}).then(function(data){
			console.log(data);
			var content = "<table><tr><th>City Name</th></tr>"
			$.each(data.list,function(idx,val){
				content += "<tr><td>"+val.name+"</td></tr>"
			})
			content += "</table>";
			$("#content").html(content);
		})
	})
})