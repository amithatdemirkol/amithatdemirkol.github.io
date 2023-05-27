// Ahmet Mithat Demirkol - 19050111047
$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
	  var swappedImage = new Image();
	  swappedImage.src = $(this).attr("href");
	});
  
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
	  evt.preventDefault();
  
	  var imageURL = $(this).attr("href");
	  var caption = $(this).attr("title");
  
	  // fade out the caption and image over a duration of one second
	  $("#caption, #image").fadeOut(1000, function() {
		// callback function to be executed after fade out is complete
  
		// display the new caption and image
		$("#image").attr("src", imageURL);
		$("#caption").text(caption);
  
		// fade in the caption and image over a duration of one second
		$("#caption, #image").fadeIn(1000);
	  });
	}); // end click
  
	// move focus to first thumbnail
	$("li:first-child a").focus();
  }); // end ready