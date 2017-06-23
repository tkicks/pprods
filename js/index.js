var descIndeces = ["calBell", "grandBell", "JoeE", "jalMild"];
var descriptions = ["Proof of concept", "shouldn't display"];

function showDesc(whichDesc) {
	console.log(whichDesc);
	var index = descIndeces.indexOf(whichDesc);
	console.log(descriptions[index]);
	document.getElementById("calBellDesc").innerHTML=descriptions[index];
	document.getElementById("calBellDesc").style.visibility = "visible";
}

function hideDesc() {
	document.getElementById("calBellDesc").innerHTML="";
	document.getElementById("calBellDesc").style.visibility = "hidden";
}
