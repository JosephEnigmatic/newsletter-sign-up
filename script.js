const emailInput = document.getElementById("email");

// button
const submitBtn = document.getElementById("submit");
const dismissBtn = document.getElementById("dismiss");
let emailRegex = /^[\w-\.]+@([\w-\.])+[\w-]{2,4}$/g;
let isEmailValid;

const validateEmailValue = () => {
    if (emailInput.value.match(emailRegex)) {
        isEmailValid = true;
    } else {
        isEmailValid = false
    }
};

const errorMessage = () => {
    validateEmailValue();

    let small = document.querySelector('.form small');

    if (isEmailValid === true) {
        small.classList.remove("error");
        emailInput.classList.remove('error')
    } else {
        small.classList.add('error')
        emailInput.classList.add("error");
    }
}

const subscription = () => {
    errorMessage();

    let newsLetter = document.querySelector('.newsletter-container');
    let subscription = document.querySelector('.subscription-container')

    if (isEmailValid ) {
        newsLetter.style.display = 'none';
        subscription.style.display = 'block'
    }
}

const dismiss = () => {
    let newsLetter = document.querySelector('.newsletter-container');
    let subscription = document.querySelector('.subscription-container')

 
    newsLetter.style.display = 'block';
    subscription.style.display = 'none';

    emailInput.value = ''
    isEmailValid = false
}

submitBtn.addEventListener('click', subscription)
dismissBtn.addEventListener('click', dismiss)