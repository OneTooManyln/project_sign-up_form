const valUserPassword = document.querySelector('#user_password');
const valConfirmPassword = document.querySelector('#confirm_password');
const input = document.querySelectorAll('input');

function validatePassword() {
    if (valUserPassword.textContent != valConfirmPassword.textContent) {
        input.style.border =  "2.3px solid green";
    }
}