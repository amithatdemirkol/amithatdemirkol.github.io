// Ahmet Mithat Demirkol - 19050111047
// Activity 7
var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;	
};
//DisplayResults func
function displayResults() {
	var sum = 0;
	var highestScore = 0;
	var highestIndex = 0;
  
	for (var i = 0; i < scores.length; i++) {
	  sum += scores[i];
  
	  if (scores[i] > highestScore) {
		highestScore = scores[i];
		highestIndex = i;
	  }
	}
  
	var averageScore = Math.round(sum / scores.length);
  
	document.getElementById("results").innerHTML = "<h2>Results</h2>" +
	  "<p>Average Score: " + averageScore + "</p>" +
	  "<p>Highest Score: " + names[highestIndex] + " with a score of " + highestScore + "</p>";
  }
//DisplayScore func
function displayScores() {
	var table = document.getElementById("scores_table");
	var html = "<tr><th>Name</th><th>Score</th></tr>";
  
	for (var i = 0; i < names.length; i++) {
	  html += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
	}
  
	table.innerHTML = "<h2>Scores</h2>" + html;
  }
//AddScore func
function addScore() {
	var nameInput = document.getElementById("name").value;
	var scoreInput = document.getElementById("score").value;
  
	if (nameInput === "" || scoreInput === "" || isNaN(scoreInput) || parseInt(scoreInput) < 0 || parseInt(scoreInput) > 100) {
	  alert("You must enter a name and a valid score");
	} else {
	  names.push(nameInput);
	  scores.push(parseInt(scoreInput));
	  nameInput = "";
	  scoreInput = "";
	  displayScores();
	}
  }