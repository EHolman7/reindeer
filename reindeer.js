var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var deerCount = reindeer.length;
var hohohoElement = document.getElementById("reindeer");



for(var i = 0; i < deerCount; i += 1){

	var colorRun = colors[i];
	var deerRun = reindeer[i];


	  var deerString = "";

  deerString += '<p>' + colorRun + " " + deerRun + '</p>';

	hohohoElement.innerHTML += deerString
}