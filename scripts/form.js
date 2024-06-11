// check events related to the validity state of the input fields in the form
function initiate_eventlistener_form() {
    dom.name_input.addEventListener("input", () => {
        dom.name_input.setCustomValidity("");
        dom.name_input.checkValidity();
    });

    dom.email_input.addEventListener("input", () => {
        dom.email_input.setCustomValidity("");
        dom.email_input.checkValidity();
    });

    dom.message_area.addEventListener("input", () => {
        dom.message_area.setCustomValidity("");
        dom.message_area.checkValidity();
    });

    dom.name_input.addEventListener("invalid", () => {
        validate_name(dom.name_input);
    });

    dom.email_input.addEventListener("invalid", () => {
        validate_mail(dom.email_input);
    });

    dom.message_area.addEventListener("invalid", () => {
        validate_message(dom.message_area);
    });
}

/**
** check the validity of the name form field
** @param {input} : the name input
** @returns {undefined}
*/
function validate_name(input) {
    let validityState_name = input.validity;
    if (validityState_name.valueMissing) {
        input.setCustomValidity("Vous devez indiquer un nom.");
    } else if (validityState_name.patternMismatch) {
        input.setCustomValidity("Le nom ne peut comporter que des lettres et des espaces.")
    } else {
        input.setCustomValidity("");
    }
}

/**
** check the validity of the email form field
** @param {input} : the email input
** @returns {undefined}
*/
function validate_mail(input) {
    let validityState_email = input.validity;
    if (validityState_email.valueMissing) {
        input.setCustomValidity("Vous devez indiquer un mail.");
    } else if (validityState_email.patternMismatch) {
        input.setCustomValidity("Le mail doit être au format '@domaine.ext'.")
    } else {
        input.setCustomValidity("");
    }
}

/**
** check the validity of the textarea field
** @param {input} : the textarea
** @returns {undefined}
*/
function validate_message(input) {
    let validityState_message = input.validity;
    if (validityState_message.tooLong) {
        input.setCustomValidity("Votre message ne doit pas dépasser 1000 caractères.")
    } else {
        input.setCustomValidity("");
    }
}

initiate_eventlistener_form();