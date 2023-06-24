
const logregBox = document.querySelector('.logreg-box')
const loginLink = document.querySelector('.login-link')
const regististLink = document.querySelector('.Register-link')

loginLink.addEventListener('click', () => {
    logregBox.classList.add('active');
})
regististLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})

const loginForm = document.querySelector('.form-box.login form');
const emailInput = document.getElementById('email');
const passwordInput = document.querySelector('.form-box.login input[type="password"]');

// Add an event listener to the form submission event
loginForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the entered email and password match the desired credentials
    if (emailInput.value === 'hodinhtuankiet@gmail.com' && passwordInput.value === '123') {
        // Redirect to the desired page
        window.location.href = 'home.html';
    } else {
        // Display an error message to the user
        const formMessage = document.querySelector('.form-box.login .form-message');
        formMessage.textContent = 'Invalid email or password';
    }
});