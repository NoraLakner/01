// Get the title elements
var title2 = document.getElementById('title2');
var title3 = document.getElementById('title3');

// Get the text elements
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');

// Add a 'click' event listener to title2
title2.addEventListener('click', function() {
    // Toggle the 'reveal' class on text2
    text2.classList.toggle('reveal');
});

// Add a 'click' event listener to title3
title3.addEventListener('click', function() {
    // Toggle the 'reveal' class on text3
    text3.classList.toggle('reveal');
});

// Get all elements with the 'grid-image' class name
var images = document.getElementsByClassName('grid-image');

// Loop through all images
for (var i = 0; i < images.length; i++) {
    // Add a 'mouseover' event listener to each image
    images[i].addEventListener('mouseover', function() {
        // Change the 'filter' style when the mouse hovers over the image
        this.style.filter = 'sepia(30%) saturate(100%) hue-rotate(110deg)';
    });

    // Add a 'mouseout' event listener to each image
    images[i].addEventListener('mouseout', function() {
        // Reset the 'filter' style when the mouse leaves the image
        this.style.filter = 'sepia(30%) saturate(100%) hue-rotate(-90deg)';
    });
}