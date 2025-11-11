//your JS code here. If required.
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkboxInput = document.getElementById('checkbox');
const existingButton = document.getElementById('existing');

// Check on page load if credentials exist
window.addEventListener('DOMContentLoaded', () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
    } else {
        existingButton.style.display = 'none';
    }
});

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Display alert
    alert(`Logged in as ${username}`);

    // Check if "Remember Me" is checked
    if (checkboxInput.checked) {
        // Save credentials to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingButton.style.display = 'block';
    } else {
        // Remove credentials from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingButton.style.display = 'none';
    }
});

// Handle existing user login button click
existingButton.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');

    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});