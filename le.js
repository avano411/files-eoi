
	
	var modal = document.querySelector(".modal");
	var modalForm = document.querySelector(".modal-form");
	var btn = document.querySelector(".button");

	
	btn.addEventListener("click", function() {
		modalForm.style.display = "block";
	});

	
	window.addEventListener("click", function(event) {
		if (event.target == modal) {
			modalForm.style.display = "none";
		}
	});
