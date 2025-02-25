document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

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

        // For demonstration, you can log the data to the console
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Optionally, clear form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        alert('Message received!');
    });
});
