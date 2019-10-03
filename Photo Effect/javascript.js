document.getElementById("myslide").onmousemove = function (event) {
	var x = event.offsetX; //Координата мыши X относительно родительского элемента
	document.getElementById("two").style.transition = "all 0s";
	document.getElementById("two").style.width = x + "px";
}

document.getElementById("myslide").onmouseleave = function (event) {
	document.getElementById("two").style.width = "100%"
	document.getElementById("two").style.transition = "all ease 2s";
	
}