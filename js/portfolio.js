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

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("protfolio-btn");
for(var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("protfolio-active");
		current[0].className = current[0].className.replace(" protfolio-active", "");
		this.className += " protfolio-active";
	});
}