/* JavaScript practice from coursera courses */

function myTopnav() {
	var x = document.getElementById("myTopnav");
	if(x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
