const valUserPassword = document.querySelector('#user_password');
const valConfirmPassword = document.querySelector('#confirm_password');
const input = document.querySelectorAll('input');
const form = document.querySelector('form');

 const submit = (e) => {
    e.preventDefault();
     if(valUserPassword.value !== valConfirmPassword.value) {
        valUserPassword.style.border = "1px solid #c93e3e";
        valConfirmPassword.style.border = "1px solid #c93e3e";    
        return;
    } else {
        valUserPassword.style.border = "1px solid #D6D9DC"
        valConfirmPassword.style.border = "1px solid #D6D9DC"
    }
    console.log('submit');        
}

form.addEventListener('submit', submit); 
input.forEach((input) => {
    input.addEventListener('focus', setFocus);
})

 function focus(x) {
    x.style.border = "2.3px solid rgb(113, 156, 219)";


 }

 function blur(x) {
    x.style.border = "";

 }

 function setFocus() {
    console.log('works');
    if(document.activeElement === valUserPassword) {
        valUserPassword.addEventListener('focus', () => {
            focus(valUserPassword);
            console.log('this works');
        });

        valUserPassword.addEventListener('blur', () => {
            blur(valUserPassword);
        });
    } else if(valConfirmPassword === document.activeElement) {
        valConfirmPassword.addEventListener('focus', () => {
            focus(valConfirmPassword);
        });
        
        valConfirmPassword.addEventListener('blur', () => {
            blur(valConfirmPassword);
        });
    } else {
        console.log('error');
    }
 }