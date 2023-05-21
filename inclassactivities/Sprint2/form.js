$(document).ready(function() {
    $("#birthdate").datepicker();
  });
$(document).ready(function() {
  var countries = [
    "Afghanistan",
    "Germany",
    "United States of America",
    "Argentina",
    "Australia",
    "Brazil",
    "China",
    "France",
    "India",
    "United Kingdom",
    "Spain",
    "Italy",
    "Japan",
    "Canada",
    "Mexico",
    "Russia",
    "Turkey"
  ];
$("#country").autocomplete({
    source: countries
  });
});
$(document).ready(function () {
    $('#contactButton').click(function () {
        $('#contactForm').fadeIn();
    });
            $('#contactForm').click(function (e) {
                if (e.target === this) {
                    $(this).fadeOut();
                }
            });
        });
        $(document).ready(function () {
            $('#contactButton').click(function () {
                $('#contactForm').fadeIn();
            });
        
            $('#contactForm').click(function (e) {
                if (e.target === this) {
                    $(this).fadeOut();
                }
            });
        });

$(function() {
    $("form").on("submit", function(event) {
      event.preventDefault();
      var isValid = validateForm();
      
      if (isValid) {
        submitForm();
      }
    });
    
    function validateForm() {
      var isValid = true;
      $("input[required]").each(function() {
        if (!$(this).val()) {
          isValid = false;
          $(this).addClass("error");
        } else {
          $(this).removeClass("error");
        }
      });
      
      return isValid;
    }
    
    function submitForm() {
      alert("Form submitted successfully!");
    }
  });

$(window).on("load", function() {
    $("#emailRadio").tooltip({
      content: "Contact by Email"
    });
    
    $("#phoneRadio").tooltip({
      content: "Contact by Phone"
    });
    
    $("#bothRadio").tooltip({
      content: "Contact by Email and Phone"
    });
  });

function fetchWeatherData() {
    // Replace 'API_KEY' and 'LOCATION' with the actual values
    var apiKey = 'API_KEY';
    var location = 'LOCATION';
  
    // Here's an example using the Fetch API
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
      .then(response => response.json())
      .then(data => {
        // Process the received weather data
        var temperature = data.current.temp_c;
        var condition = data.current.condition.text;
  
        // Update the weather container with the data
        var weatherContainer = document.getElementById('weatherContainer');
        weatherContainer.innerHTML = `Temperature: ${temperature}°C, Condition: ${condition}`;
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
      });
  }
  
  // Call the function to fetch weather data when the page loads
  window.addEventListener('load', fetchWeatherData);
// This widget fetches and displays social media feeds

function fetchSocialMediaFeeds() {
    // Replace 'API_KEY' with the actual value
    var apiKey = 'API_KEY';
  
    // Here's an example using the Fetch API
    fetch(`https://api.socialmediaapi.com/v1/feeds?key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        var feeds = data.feeds;
  
        // Update the social media container with the feeds
        var socialMediaContainer = document.getElementById('socialMediaContainer');
        feeds.forEach(feed => {
          var feedElement = document.createElement('div');
          feedElement.textContent = feed.text;
          socialMediaContainer.appendChild(feedElement);
        });
      })
      .catch(error => {
        console.log('Error fetching social media feeds:', error);
      });
  }
  
  window.addEventListener('load', fetchSocialMediaFeeds);
function fetchNewsArticles() {
    // Replace 'API_KEY' and 'CATEGORY' with the actual values
    var apiKey = 'API_KEY';
    var category = 'CATEGORY';
  
    // Here's an example using the Fetch API
    fetch(`https://api.newsapi.com/v1/articles?key=${apiKey}&category=${category}`)
      .then(response => response.json())
      .then(data => {
        var articles = data.articles;
  
        var newsContainer = document.getElementById('newsContainer');
        articles.forEach(article => {
          var articleElement = document.createElement('div');
          articleElement.innerHTML = `<h4>${article.title}</h4><p>${article.description}</p>`;
          newsContainer.appendChild(articleElement);
        });
      })
      .catch(error => {
        console.log('Error fetching news articles:', error);
      });
  }
window.addEventListener('load', fetchNewsArticles);
  $(".buy-button").click(function() {
    $("#dialog").dialog({
        width: 500, 
        dialogClass: 'custom-dialog',
        buttons: {
        }
      });
})