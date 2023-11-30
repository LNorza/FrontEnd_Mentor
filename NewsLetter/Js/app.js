const emailInput = document.querySelector(".email-input");
const spanError = document.querySelector(".input-fail");
const btnSubmit = document.querySelector(".suscribe-btn");
const btnDismiss = document.querySelector(".dismiss-btn");
const mainContainer = document.querySelector(".main-container");
const successMessage = document.querySelector(".successful-subscription");
const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnSubmit.addEventListener("click", function () {
    const email = emailInput.value;

    /* If the input is valid */
    if (validateEmail.test(email)) {
        mainContainer.style.display = "none";
        successMessage.classList.remove("inactive");
        emailInput.classList.remove("form-incorrect");
        spanError.classList.add("inactive");
    } else {
        /* Validate the input is not empty */
        if (email.trim() === "") {
            alert("Please enter your email address");
        }

        if (!validateEmail.test(email)) {
            emailInput.classList.add("form-incorrect");
            spanError.classList.remove("inactive");
            emailInput.value = "";
        } else {
            emailInput.classList.remove("form-incorrect");
            spanError.classList.add("inactive");
            emailInput.value = "";
        }
    }
});

emailInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        btnSubmit.click();
    }
});

btnDismiss.addEventListener("click", function () {
    mainContainer.style.display = "flex";
    successMessage.classList.add("inactive");
    emailInput.value = "";
});
