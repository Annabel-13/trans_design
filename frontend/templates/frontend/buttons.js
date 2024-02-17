// terms of use
document.getElementById("termsOfUseButton").addEventListener("click", function() {
    let content = document.getElementById("termsOfUseContent");
            content.style.display = content.style.display === "none" ? "block" : "none";
       });
//end of terms of use

//button for scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var divContent = document.getElementById("termsOfUseContent");
}

function scrollToTop() {
    document.body.scrollTop = 0; /* For Safari */
    document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE, and Opera */
}
//end button for scroll

//language
document.getElementById("languageBtn").addEventListener("click", function() {
    let content = document.getElementById("language_selector");
    content.style.display = content.style.display === "none" ? "block" : "none";
});
//end of language
