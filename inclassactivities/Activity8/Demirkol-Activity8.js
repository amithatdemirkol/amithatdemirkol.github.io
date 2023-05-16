// Ahmet Mithat Demirkol - 19050111047
// Activity 8
var languages = ["Html","Php","JavaScript","ActionScript","AppleScript","Asp","Lisp","Perl","Python", "C"]

$(document).ready(function () {
    $("#BDate").datepicker();

    $("#PLanguage").autocomplete({
        source:languages
    })
})