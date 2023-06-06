const ratingButtons = document.querySelectorAll('.card-rating button');


ratingButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        
        ratingButtons.forEach(function (btn) {
            btn.classList.remove('highlight');
        });

        
        button.classList.add('highlight');
    });
});


const submitBtn = document.getElementById('submit');


submitBtn.addEventListener('click', showThankYouModal);


function showThankYouModal() {
    
    const selectedRating = document.querySelector('.card-rating .highlight');

    
    if (selectedRating) {
        
        const ratingValue = selectedRating.innerText;

        
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.innerText = `You selected ${ratingValue} out of 5`;

        
        const thankYouModal = document.getElementById('thankYouModal');
        thankYouModal.style.display = 'block';
    }
}
