/* JavaScript practice from coursera courses */

function openNav() {
	document.getElementById("home").style.left = "0";
	document.getElementById("about").style.left = "0";
	document.getElementById("publication").style.left = "0";
	document.getElementById("personal").style.left = "0";
	document.getElementById("menu").style.display = "none";
	document.getElementById("close").style.display = "inline";
}

function closeNav() {
	document.getElementById("home").style.left = "-110px";
	document.getElementById("about").style.left = "-110px";
	document.getElementById("publication").style.left = "-110px";
	document.getElementById("personal").style.left = "-110px";
	document.getElementById("menu").style.display = "inline";
	document.getElementById("close").style.display = "none";
}
