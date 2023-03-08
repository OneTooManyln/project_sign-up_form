const valUserPassword = document.querySelector('#user_password');
const valConfirmPassword = document.querySelector('#confirm_password');
const input = document.querySelectorAll('input');
const form = document.querySelector('form')

 const submit = (e) => {
    e.preventDefault();
     if(valUserPassword.value !== valConfirmPassword.value) {
        valUserPassword.style.border = "1.8px solid #c93e3e";
        valConfirmPassword.style.border = "1.8px solid #c93e3e";    
        return;
    } 
    console.log('submit');
}

 form.addEventListener('submit', submit) 