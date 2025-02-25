// filepath: /contact-form-page/contact-form-page/src/script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    // Initialize EmailJS with your user ID
    emailjs.init('YOUR_USER_ID');

    // Add event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent the default form submission behavior

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('All fields are required.');
            return;
        }

        // Create a template for the email
        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message received!');
                // Clear form fields after submission
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            }, (error) => {
                console.log('FAILED...', error);
                alert('There was an error sending your message. Please try again later.');
            });
    });
});