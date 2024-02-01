window.onbeforeunload = function () { // sets scroll position of the window to a very large value (so apples wont be on the floor straight away)
    window.scrollTo(0, 100000);
    setInterval(updateApplePositions, 100);
}

window.onload = function () { //triggered when html is fully loaded/rendered = anonymous function
    window.location.href = "#gravity-link"; //changes URL of webpage by adding #gravity-link to the end 
};

document.addEventListener("DOMContentLoaded", function () {
    var randomApples = document.getElementById(
        "random-apples"); //selects element with ID and assigns variable 
    if (randomApples) {
        var appleNumber = 50;

        function updateApplePositions() {
            var apples = document.querySelectorAll(".apple"); //selects all apple class elements 
            var windowHeight = window.innerHeight; //variable stores viewport height
            var grassHeight = document.querySelector(".grass img").getBoundingClientRect().height;

            apples.forEach(function (apple) { //iterates through apple class elements 
                var appleRect = apple
                    .getBoundingClientRect(); //position of apple png relative to viewport
                if (appleRect.bottom >
                    windowHeight) { //if bottom part of apple png is lower than visible area
                    apple.style.position = "fixed";
                    apple.style.bottom = "0";
                    apple.style.top = "auto";
                    apple.classList.add('animate__animated', 'animate__bounce'); //animate css for bounce effect
                }
            });
        }

        for (var i = 0; i < appleNumber; i++) { //for every apple (50)
            var apple = document.createElement("img"); //creates new img element
            apple.src = "apple.png";
            apple.className = "apple"; //assign apple class to apple element
           
           
            apple.style.right = Math.random() * window.innerWidth + "px"; //random hotizontal position
            apple.style.top = ((Math.random() * 1000)+100) + "vh"; //random vertical position
            randomApples.appendChild(apple); //adds individual apple elements to container
        }

        // Check and update apple positions every 100 milliseconds
        setInterval(updateApplePositions, 100); //checks and updates apple position every 100ms
    }
});

