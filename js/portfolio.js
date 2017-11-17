/* JavaScript practice from coursera courses */
filterSelection("protfolio-all")
function filterSelection(c) {
	var x, i;
	console.log(c);
	x = document.getElementsByClassName("protfolio-column");
	if(c == "protfolio-all") c = "";
	for(i=0; i<x.length; i++) {
		removeClass(x[i], "protfolio-show");
		if(x[i].className.indexOf(c) > -1) addClass(x[i], "protfolio-show");
	}
}

function addClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for(i=0; i<arr2.length; i++) {
		if(arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

function removeClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for(i=0; i<arr2.length; i++) {
		while(arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}