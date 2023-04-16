function search() {
	let input = document.getElementById("search-input").value.toUpperCase();
	let results = document.getElementById("results").getElementsByTagName("li");

	for (let i = 0; i < results.length; i++) {
		if (results[i].textContent.toUpperCase().indexOf(input) > -1) {
			results[i].style.display = "";
		} else {
			results[i].style.display = "none";
		}
	}
}