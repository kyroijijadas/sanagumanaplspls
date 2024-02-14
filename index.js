document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".valentines");
    var card = document.querySelector(".card");
    var audio = document.getElementById("valentineAudio");
    var gifImage = document.getElementById("gifImage");

    
    container.addEventListener("mouseenter", function() {
        card.style.transition = "top 0.9s ease";
        card.style.top = "-90px";
        audio.play();
    });
    
    container.addEventListener("mouseleave", function() {
        card.style.transition = "top 0.7s ease";
        card.style.top = "0px";
        audio.pause();
        alert ("HAHAHAHAHAHAHAHAH sana-sana pls");
    });

    card.addEventListener("transitionend", function() {
        // This function will be called when the transition of the card element is complete
        gifImage.style.display = "block";
    });


});
