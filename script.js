//your JS code here. If required.
window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkboxInput = document.getElementById('checkbox');
    const existingButton = document.getElementById('existing');

    // Guard: if any required element is missing, stop to avoid runtime errors
    if (!form || !usernameInput || !passwordInput || !checkboxInput || !existingButton) {
        return;
    }

    // Ensure inputs/checkbox are in a deterministic state on load
    usernameInput.value = '';
    passwordInput.value = '';
    checkboxInput.checked = false;

    // Show "existing" button only if both username and password are saved
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
    } else {
        existingButton.style.display = 'none';
    }

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
        const saved = localStorage.getItem('username');

        if (saved) {
            alert(`Logged in as ${saved}`);
        }
    });
});