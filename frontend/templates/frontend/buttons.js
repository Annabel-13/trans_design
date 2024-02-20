// terms of use
document.getElementById("termsOfUseButton").addEventListener("click", function() {
    let content = document.getElementById("termsOfUseContent");
            // content.style.display = content.style.display === "none" ? "block" : "none";
            if (content.style.display === "none")
            {
                content.style.display = "block";
                // content.style.position = "absolute";
            }
            else {
                content.style.display = "none"
            }

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

//pong buttons
document.getElementById("pongButns").addEventListener("click", function() {
    let content = document.getElementById("pongMenu");
    content.style.display = content.style.display === "none" ? "block" : "none";
    let content1 = document.getElementById("pongSettingsList");
    content1.style.display = content.style.display === "none" ? "block" : "none";
});

document.getElementById("pongButns").addEventListener("click", function() {
    let content = document.getElementById("pongSettings");
    content.style.display = content.style.display === "none" ? "block" : "none";
});
//end of pong buttons

//profileSettings
document.getElementById("profileSettingsBtn").addEventListener("click", function() {
    let content = document.getElementById("profileSettings");
    content.style.display = content.style.display === "none" ? "block" : "none";
});
//end of profile settings
