
/*
  Input and textarea messages and error
*/

const form = document.querySelector('.contact_form');
//const input = document.querySelector('.input');
const fullname = document.getElementById('input_name');
const email = document.getElementById('input_mail');
const subject = document.getElementById('input_subject');
const message = document.getElementById('input_message');
//const buttons = document.querySelector('.buttons');
const success = document.querySelector('.success');
const nextPage = document.getElementById('button_submit');


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.form_error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.form_error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if (fullnameValue === '') {
    setError(fullname, 'Full name is required');
  } else if (fullnameValue.length < 5) {
    setError(fullname, 'Full name must be at least 5 character.');
  } else {
    setSuccess(fullname);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (subjectValue === '') {
    setError(subject, 'Subject is required');
  } else if (subjectValue.length < 15) {
    setError(subject, 'Subject must be at least 15 character.');
  } else {
    setSuccess(subject);
  }

  if (messageValue === '') {
    setError(message, 'Message is required');
  } else if (messageValue.length < 25) {
    setError(message, 'Message must be at least 25 character.');
  } else {
    setSuccess(message);
  }

  // If every input is successfull, a message pops out
  if ((fullnameValue.length >= 5) 
  && (isValidEmail(emailValue)) 
  && (subjectValue.length >= 15)
  && (messageValue.length >= 25)) {
    //alert("Submission is successfull");
    success.innerHTML = `<h2 class="success">Message is sent</h2>`;
    /*
    nextPage.innerHTML = 
    `<div class="contact_buttons">
      <button 
        class="button" 
        id="button_clear" 
        type="reset"
        onclick="window.location.href='../html/contact.html'">Back</button>
      <button 
        class="button" 
        id="button_submit" 
        type="submit"
        onclick="window.location.href='../html/success.html'">Next</button>
    </div>`;*/
  }
};

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