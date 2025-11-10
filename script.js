//your JS code here. If required.
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkboxInput = document.getElementById('checkbox');
const existingButton = document.getElementById('existing');

window.addEventListener('DOMContentLoaded', () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkboxInput.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingButton.style.display = 'block';
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingButton.style.display = 'none';
    }
});

existingButton.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');

    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});