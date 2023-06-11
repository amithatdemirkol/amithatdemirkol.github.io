const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

$(document).ready(function() {
  $("#bdate").datepicker();  
  $("#country").autocomplete({  
    source: countries
  });

  $("#apply").hide();

  $("section").click(function() {
    $("#apply").fadeIn("slow"); 
  });

  $("#apply").mouseleave(function() {
    $("#apply").fadeOut("slow");
  });

  $(document).ready(function() {
    $('.gallery a').fancybox();
    $(document).ready(function() {
      $('.zoom-image').zoom();
    }); 
});
});
  var xhr = new XMLHttpRequest();
      
  // Define the function to be triggered when the request completes
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Process response on successful request
            var response = JSON.parse(xhr.responseText);
            var categories = response.categories;
      
            // Add categories to HTML
            var categoriesDiv = document.getElementById("categories");
            categories.forEach(function(category) {
            var name = category.name;
            var description = category.description;
      
            // Add the category to HTML
            var categoryElement = document.createElement("div");
            categoryElement.innerHTML = "<h2>" + name + "</h2><p>" + description + "</p>";
            categoriesDiv.appendChild(categoryElement);
            });
          } else {
        // Take action when an error occurs in the request
        console.error("İstek hatası: " + xhr.status);
      }
    }
  };
      
  // Open the AJAX request and submit the request
  xhr.open("GET", "json/owasp.json", true);
  xhr.send();


//AJAX request from an external website
function parseQuote(response) {
  var proverbText = response.quoteText;
  var proverbalText = response.quoteAuthor || 'Anonymus';

  document.getElementById('proverbText').textContent = proverbText;
  document.getElementById('proverbalText').textContent = "- " + proverbalText;
}

function fetchQuote() {
  var script = document.createElement('script');
  script.src = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote';
  document.head.appendChild(script);
}