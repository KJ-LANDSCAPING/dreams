import emailjs from 'emailjs-com';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    // Initialize EmailJS with your public key
    emailjs.init('8jKV4SeQdj-p4HfTd'); // Replace with your actual public key

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

        const emailMessage = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send('default_service', 'template_j3ze682', emailMessage)
            .then(() => {
                alert('Your message has been sent successfully!');
                // Optionally, clear form fields after submission
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
                // Reload the page after successful submission
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error, better luck next time ahh hah!');
            });
    });
});
