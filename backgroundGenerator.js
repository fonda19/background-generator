//Read color values in css format
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
//To have CSS written at the bottom (for copy/paste)
css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
/**..there is an alternate to using "addEventListener" which is to add an "oninput=setGradient()" selector to the html instead..
	EXAMPLE:	
		<input oninput="setGradient()" class="color1" type="color" name="color1" value="#00ff00">
		<input oninput="setGradient()" class="color2" type="color" name="color2" value="#ff0000">

/* color1.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})

color2.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})
*/