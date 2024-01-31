//Eventlistener for document event
document.addEventListener("DOMContentLoaded", function() {
    // Get popup element
    var popup1 = document.getElementById('popup1');
    var popup2 = document.getElementById('popup2');

// Show the popup when the DOM content is loaded
    popup1.style.display = 'flex';

    // Close popup when is clicked
    var button1 = document.getElementById('button1');
    button1.addEventListener('click', function() {
        popup1.style.display = 'none';  
    });

        // Add event listener to detect when the user has scrolled to the end of the story
        window.addEventListener('scroll', function() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // Start a timer to show the second popup after 2 seconds
                setTimeout(function() {
                    popup2.style.display = 'flex';
                }, 3000);
            }
        });
});

const pages = document.querySelectorAll('.page');
let startPosition = window.scrollY;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        const page = entry.target;
            const extraImageLeftRight = page.querySelector('.leftRight');
            const extraImageUpDown = page.querySelector('.upDown');
            const extraImageRotate = page.querySelector('.rotation');

            const yOffset = Math.abs(window.scrollY - startPosition);


        if (entry.isIntersecting) {

          // Animate the extra image to the left
            if (extraImageLeftRight) {
                extraImageLeftRight.style.transform = `translateX(-${yOffset * 0.1}vw)`;
            }

            // Animate the extra image down
            if (extraImageUpDown) {
                extraImageUpDown.style.transform = `translateY(-${yOffset * 0.04}vw)`;
            }

            // Rotate the extra image
            if (extraImageRotate) {
                extraImageRotate.style.transform = 'rotate(30deg)';
            }
        } else {
            startPosition = window.scrollY;

            const page = entry.target;
            const extraImageLeftRight = page.querySelector('.leftRight');
            const extraImageUpDown = page.querySelector('.upDown');
            const extraImageRotate = page.querySelector('.rotation');

            // Reset the extra image position
            if (extraImageLeftRight) {
                extraImageLeftRight.style.transform = 'translateX(0)';
            }

            // Reset the extra image position
            if (extraImageUpDown) {
                extraImageUpDown.style.transform = 'translateY(0)';
            }

            // Reset the extra image rotation
            if (extraImageRotate) {
                extraImageRotate.style.transform = 'rotate(0)';
            }
        }
        startPosition = window.scrollY;
    });
}, { threshold: 0.75 }); // 50% of the page

pages.forEach(page => {
    observer.observe(page);
});