// Ahmet Mithat Demirkol - 19050111047
let button = document.getElementById("button");
var level = 1;
var timeout = 500;
var counter = 0;

button.addEventListener("mouseover", function() {
	counter++;
	if (counter == 3) {
		alert("Congratulations! You have won level " + level);
		level++;
		timeout -= 100;
		counter = 0;
		if (level > 6) {
			alert("You have completed all levels!");
			button.removeEventListener("mouseover", moveButton);
		}
		else {
			setTimeout(moveButton, timeout);
		}
	}
	else {
		moveButton();
	}
});

function moveButton() {
	var x = Math.random() * 500;
	var y = Math.random() * 500;
	button.style.marginTop = y + "px";
	button.style.marginLeft = x + "px";
}
