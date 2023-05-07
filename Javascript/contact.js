
/*
  Input and textarea messages and error
*/

const form = document.querySelector(".contact_form");
//const error = document.querySelector(".form_error");

const fullname = document.querySelector("#input_name");
//const fullname_error = document.querySelector("#fullname_error");

const email = document.querySelector("#input_mail");
//const email_error = document.querySelector("#email_error");

const subject = document.querySelector("#input_subject");
//const subject_error = document.querySelector("#subject_error");

const text = document.querySelector("#input_message");
//const text_error = document.querySelector("#message_error");

const valid = document.querySelector(".message");
const input = document.querySelector(".input_box");
const clear_button = document.querySelector(".button_clear");
const submit_button = document.querySelector(".button_submit");

// Functions
form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});

// Create setError and setSuccess
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".form_error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".form_error");

  errorDisplay.innerText = '';
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

const isValidEmail = email => {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regEx.test(String(email).toLowerCase());
}

// Create form validation
const validateInputs = () => {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const textValue = text.value.trim();

  if (fullnameValue === '') {
    setError (fullname, "Full name is required");
  } else if (fullnameValue.length <= 5) {
    setError (fullname, "Please enter full name (min. 5 characters)")
  } else {
    setSuccess (fullname);
  }

  if (emailValue === '') {
    setError (email, "Email address is required");
  } else if (!isValidEmail(emailValue)) {
    setError (setError, "Please enter valid email address");
  } else {
    setSuccess (email);
  }

  if (subjectValue === '') {
    setError (subject, "Subject is required");
  } else if (fullnameValue.length <= 15) {
    setError (fullname, "Please enter subject (min. 15 characters)")
  } else {
    setSuccess (subject);
  }

  if (textValue === '') {
    setError (text, "Message is required");
  } else if (fullnameValue.length <= 25) {
    setError (fullname, "Please enter message (min. 25 characters)")
  } else {
    setSuccess (text);
  }
}


/*
  Regex codes (trials)
*/
// Letters and numbers: const regex = /^[a-zA-Z0-9 ]{10,}+$/;

// E-mail: const regEx = /@/;
// E-mail: const regEx = /\S+@\S+\.\S+/;
// E-mail: const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
// E-mail: const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Address: const regex = /\w\s\w/;
// Address: const regex = /^[a-zA-Z0-9 ]{5,}+$/;