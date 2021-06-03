function ChangeToLocation() {
	var x = document.getElementById("myLocation");
	var y = document.getElementById("mySector");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  y.style.display = "none";
	} else {
	  x.style.display = "none";
	  y.style.display = "block";
	}
}

function ChangeToSector() {
	var x = document.getElementById("mySector");
	var y = document.getElementById("myLocation");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  y.style.display = "none";
	  console.log("Setting sector as hidden");
	} else {
	  x.style.display = "none";
	  y.style.display = "block";
	}
}