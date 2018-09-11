//form blur event listeners
const name = document.getElementById("name");
const zipcode = document.getElementById("zipcode");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");

name.addEventListener("blur", validateName);
zipcode.addEventListener("blur", validateZipcode);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);

function validateName(){
    const nameRe = /^[a-z]{2,16}$/i;

    if(!nameRe.test(name.value)){
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('is-invalid');
    }
}

function validateZipcode(){
    const zipRe = /[0-9]{5}/;

    if(!zipRe.test(zipcode.value)){
        zipcode.classList.add('is-invalid');
    }else{
        zipcode.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const emailRe = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){2,}\.([a-z]{2,5})$/;

    if(!emailRe.test(email.value)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    const phoneRe = /^\+?([0-9]{2})?\(?\+?[0-9]{3}\)?[- ]?[0-9]{3}[- ]?[0-9]{4}$/;

    if(!phoneRe.test(phone.value) ){
        phone.classList.add('is-invalid');
    }
    else{
        phone.classList.remove('is-invalid');
    }
}