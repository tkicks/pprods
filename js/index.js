var descIndeces = ["calBell", "grandBell", "JoeE", "jalMild"];
var descriptions = ["Proof of concept", "shouldn't display"];

function showDesc(whichDesc) {
	console.log(whichDesc);
	var index = descIndeces.indexOf(whichDesc);
	console.log(descriptions[index]);
	document.getElementById("calBellDesc").text = descriptions[index];
	document.getElementById("calBellDesc").style.visibility = "visible";
}

function hideDesc() {
	document.getElementById("calBellDesc").textContent = "";
	document.getElementById("calBellDesc").style.visibility = hidden;
}
