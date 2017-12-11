/* JavaScript practice from coursera courses */
var acc = document.getElementsByClassName("accordion");
var i;

for(i=0; i<acc.length; i++) {
	acc[i].onclick = function(){
		var duration = this.value;
		if(this.classList.toggle("active")) {
			duration += ' -';
		} else {
			duration += ' +';
		}
		this.setAttribute('data-value', duration);
		var panel = this.nextElementSibling;
		if(panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}
}

function init() {
	for(i=0; i<acc.length; i++) {
		var duration = acc[i].value + ' +';
		acc[i].setAttribute('data-value', duration);
	}
}
window.onload = init;
