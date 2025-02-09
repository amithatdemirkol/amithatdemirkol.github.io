document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const heroText = document.querySelector(".hero h1");
    const heroSubText = document.querySelector(".hero p");
    const kuertaImage = document.getElementById("kuerta-image");

    const currentTheme = localStorage.getItem("theme") || "light";
    body.classList.add(currentTheme + "-mode");

    function updateTheme() {
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            navbar.classList.add("dark-navbar");

            if (heroText && heroSubText) {
                heroText.style.color = "#ffffff";
                heroSubText.style.color = "#ffffff";
            }
            if (kuertaImage) {
                kuertaImage.src = "assets/images/kuerta-2.png"; 
            }

        } else {
            localStorage.setItem("theme", "light");
            navbar.classList.remove("dark-navbar");

            if (heroText && heroSubText) {
                heroText.style.color = "#222222";
                heroSubText.style.color = "#222222";
            }
            if (kuertaImage) {
                kuertaImage.src = "assets/images/kuerta.png"; 
            }
        }
    }
    
    updateTheme();

    // dark mode on/off button
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        if (body.classList.contains("dark-mode")) {
            themeToggle.innerHTML = "🌞"; 
        } else {
            themeToggle.innerHTML = "🌙"; 
        }
        updateTheme();
    });
});
