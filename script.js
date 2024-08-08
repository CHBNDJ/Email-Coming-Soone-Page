const btn = document.getElementById('button');
const mail = document.getElementById('mail');
const errorMessage = document.getElementById('error-msg');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


btn.addEventListener('click', (e) => {
    e.preventDefault();


    if(mail.value.match(emailRegex)) {
        errorMessage.textContent = '';
        alert('Email sent successfully!');

        mail.value = '';
        mail.style.border = '';

    } else {
        errorMessage.textContent ='Please provide a valid email address';
        mail.style.border = '2px solid #FF5466';
    }
   
})


mail.addEventListener('click', () => {
    mail.style.border = '';
    errorMessage.textContent = '';

})

