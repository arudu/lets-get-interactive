// Get all the rating buttons
const ratingButtons = document.querySelectorAll('.card-rating button');

// Add a click event listener to each rating button
ratingButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Remove the 'highlight' class from all rating buttons
        ratingButtons.forEach(function (btn) {
            btn.classList.remove('highlight');
        });

        // Add the 'highlight' class to the clicked rating button
        button.classList.add('highlight');
    });
});

// Get the submit button element
const submitBtn = document.getElementById('submit');

// Add a click event listener to the submit button
submitBtn.addEventListener('click', showThankYouModal);

// Function to show the thank you modal
function showThankYouModal() {
    // Get the selected rating element
    const selectedRating = document.querySelector('.card-rating .highlight');

    // Check if a rating is selected
    if (selectedRating) {
        // Get the rating value
        const ratingValue = selectedRating.innerText;

        // Set the thank you message with the selected rating
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.innerText = `You selected ${ratingValue} out of 5`;

        // Show the thank you modal
        const thankYouModal = document.getElementById('thankYouModal');
        thankYouModal.style.display = 'block';
    }
}
