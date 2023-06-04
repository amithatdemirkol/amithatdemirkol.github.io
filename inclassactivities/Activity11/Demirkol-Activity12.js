/*
	Ahmet Mithat Demirkol - 19050111047
	Activity12
*/

$(document).ready(function() {

  function fetchSpeakerData(file) {
    $.getJSON("json_files/" + file + ".json", function(data) {
      
      $("main").empty();

      data.speakers.forEach(function(speaker) {
        var title = $("<h1>").text(speaker.title);
        var image = $("<img>").attr("src", speaker.image);
        var month = $("<h2>").html(speaker.month + "<br>" + speaker.speaker);
        var description = $("<p>").text(speaker.text);

        $("main").append(title, image, month, description);
      });
    });
  }

  $("#nav_list a").click(function(e) {
    e.preventDefault();

    var title = $(this).attr("title");

    fetchSpeakerData(title);
  });
});
