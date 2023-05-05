
/*
  Input and textarea messages and error
*/

const form = document.querySelector(".contact_form");

const fullname = document.querySelector("#input_name");
const fullname_error = document.querySelector("#fullname_error");

const email = document.querySelector("#input_mail");
const email_error = document.querySelector("#email_error");

const subject = document.querySelector("#input_subject");
const subject_error = document.querySelector("#subject_error");

const message = document.querySelector("#input_message");
const message_error = document.querySelector("#message_error");

const valid = document.querySelector(".message");
const input = document.querySelector(".input_box");
const clear_button = document.querySelector(".button_clear");
const submit_button = document.querySelector(".button_submit");

// Checks if the form passes
/*
function validateForm(event) {
  event.preventDefault();
}*/

// Checks the full name input
/*
if (checkLength(fullname.value, 5) === true) {
  fullname_error.style.display = "none";
  console.log(fullname.value);
} else {
  fullname_error.style.display = "block";
}*/

// Checks the e-mail input
/*
if (checkMail(email.value) === true) {
  email_error.style.display = "none";
  console.log(email.value);
} else {
  email_error.style.display = "block";
}*/

// Checks the subject input
/*
if (checkLength(subject.value, 15) === true) {
  subject_error.style.display = "none";
  console.log(subject.value);
} else {
  subject_error.style.display = "block";
}*/

// Checks the Address input
/*
if (checkLength(message.value, 25) === true) {
  message_error.style.display = "none";
  console.log(message.value);
} else {
  message_error.style.display = "block";
}*/

// If every input is successfull, a message pops out
/*
if (checkLength(fullname.value, 5) === true 
&& checkMail(email.value) === true 
&& checkLength(subject.value, 15) === true  
&& checkLength(message.value, 25) === true) {
  alert("Submission is successfull");
  valid.innerHTML = `<h2 class="success_message">Passed</h2>`;
}*/

//clear_button.disabled = true;
/*
submit_button.disabled = true;

input.addEventListener("change", enableButton);
form.addEventListener("submit", validateForm);
*/

// If ".input_box" has something in it, the button can be clicked
/*
function enableButton() {
if (document.querySelector(".input_box").value === "") {
  submit_button.disabled = true;
  submit_button.style.backgroundColor = "#627b89";
} else {
  submit_button.disabled = false;
  submit_button.style.backgroundColor = "#002A42";
}
}*/

// Checks the amount of characters
/*
function checkLength(value, len) {
  if (value.trim().length > len) {
      return true;
  } else {
      return false;
  }
}*/

// Checks if the email is properly formulated
/*
function checkMail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}*/