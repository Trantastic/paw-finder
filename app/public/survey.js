$("#submit-btn").on("click", function(event){
	event.preventDefault();

	// Trims off the empty spaces and grabs survey values
	var newPal = {
		name: $("#name").val().trim(),
		photo: $("#link").val().trim(),
		score: [
			$("#q1").val(), 
			$("#q2").val(), 
			$("#q3").val(), 
			$("#q4").val(), 
			$("#q5").val(), 
			$("#q6").val(),
			$("#q7").val(),
			$("#q8").val(),
			$("#q9").val(),
			$("#q10").val()
		]
	};

	// Sends user's dog to backend to find a matching dog pal by comparing scores
	$.post("/api/friends", newPal, function(data){
		// Modal with dog match
		if(data){
			$("#match-name").text(data.name);
			$("#match-photo").attr("src", data.photo);

			$(".modal").modal();
		}
	});
});

