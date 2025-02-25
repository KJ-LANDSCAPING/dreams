# Contact Form Page

This project implements a simple contact form using EmailJS for sending messages. Below are the instructions to set up and use the contact form.

## Project Structure

```
contact-form-page
├── src
│   ├── index.html        # HTML structure for the contact form
│   ├── script.js         # JavaScript for form handling and EmailJS integration
│   └── styles.css        # CSS styles for the contact form
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Installation

To install the necessary dependencies for EmailJS, run the following command in your project directory:

```
npm install emailjs-com
```

## Usage

1. **Include EmailJS Script**: Make sure to include the EmailJS script in your `src/index.html` file:

   ```html
   <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
   ```

2. **Initialize EmailJS**: In your `src/script.js` file, initialize EmailJS with your user ID:

   ```javascript
   emailjs.init('YOUR_USER_ID');
   ```

   Replace `'YOUR_USER_ID'` with your actual EmailJS user ID.

3. **Form Submission**: The contact form includes fields for name, email, and message. Upon submission, the form data will be validated and sent using EmailJS.

## License

This project is open-source and available for use and modification.