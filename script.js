function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
}

function myFunc() {
    window.location.href = "./clients/index.html";
}