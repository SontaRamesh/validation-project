// script1.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    // Get form elements
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    // Track validity
    let isValid = true;

    // Validate Full Name
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        isValid = false;
    } else {
        fullName.classList.remove('is-invalid');
    }

    // Validate Email
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validate Phone Number
    if (phone.value.length !== 10 || phone.value === '123456789') {
        phone.classList.add('is-invalid');
        isValid = false;
    } else {
        phone.classList.remove('is-invalid');
    }

    // Validate Password
    if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value === fullName.value) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Validate Confirm Password
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // If form is valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Perform form submission, e.g., send data to server
        // Here we can reset the form for demo purposes
        document.getElementById('registrationForm').reset();
    }
}
