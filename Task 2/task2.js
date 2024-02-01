//view and hide radio button grid
document.querySelector('.visibility-button').addEventListener('click', function() {
    document.querySelector('.grid-visibility').classList.toggle('hidden');
});

// Get all the radio buttons
let radios = document.querySelectorAll('input[type=radio]');

// Listen for change event on each radio button
radios.forEach(radio => {
    radio.addEventListener('change', function() {
        // Get the name (house, door, window) and value (cartoon, pencil, pixel) of the checked radio
        let name = this.name;
        let value = this.value;

        // Get all theme images for selected type
        let images = document.querySelectorAll(`.theme-image.${name}`);

        // Hide all images
        images.forEach(img => img.style.display = 'none');

        // Show the image that corresponds to the checked radio
        //OpenAI GPT-3.5 (2023). AI-Generated help to access the right src and mainly how to capitalize the first letter (Accessed: January 16, 2024).
        let imageToShow = document.querySelector(`img[src="${value}${name.charAt(0).toUpperCase() + name.slice(1)}.png"]`);
        imageToShow.style.display = 'block';
    });
});

//Increase and decrease every text element size buttons
document.getElementById('increase-text-size').addEventListener('click', function() {
    document.body.style.fontSize = 'larger';
});

document.getElementById('decrease-text-size').addEventListener('click', function() {
    document.body.style.fontSize = 'smaller';
});
