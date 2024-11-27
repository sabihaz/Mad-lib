document.addEventListener('DOMContentLoaded', () => {
    // Update the last modified date in the footer
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified || 'Unavailable';
    } else {
        console.error('Footer element with ID "lastModified" not found.');
    }

    // Add event listener to the form
    const form = document.getElementById('madLibForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            // Check for incomplete fields
            const inputs = form.querySelectorAll('input');
            let allFieldsFilled = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.border = '3px solid red'; // Highlight empty fields
                    input.style.background = '#FFE4E1';
                    allFieldsFilled = false;
                } else {
                    input.style.border = ''; // Reset border for filled fields
                    input.style.background = '#FAFAD2';
                }
            });

            if (!allFieldsFilled) {
                event.preventDefault(); // Prevent form submission
                alert('🚨 Please fill out all fields before submitting!');
            } else {
                alert('✨ Your magical Disney Mad Lib is on its way! ✨');
            }
        });
    } else {
        console.error('Form with ID "madLibForm" not found.');
    }
});
