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

        // Get all the images for this name
        let images = document.querySelectorAll(`.theme-image.${name}`);

        // Hide all images
        images.forEach(img => img.style.display = 'none');

        // Show the image that corresponds to the checked radio
        let imageToShow = document.querySelector(`img[src="${value}${name.charAt(0).toUpperCase() + name.slice(1)}.png"]`);
        imageToShow.style.display = 'block';
    });
});

document.getElementById('increase-text-size').addEventListener('click', function() {
    document.body.style.fontSize = 'larger';
});

document.getElementById('decrease-text-size').addEventListener('click', function() {
    document.body.style.fontSize = 'smaller';
});
