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
	/* fix bug by removing attribute, thanks to a geek*/
	document.getElementById("home").removeAttribute("style");
	document.getElementById("about").removeAttribute("style");
	document.getElementById("publication").removeAttribute("style");
	document.getElementById("personal").removeAttribute("style");
	document.getElementById("menu").style.display = "inline";
	document.getElementById("close").style.display = "none";
}
