
/*
  Input and textarea messages and error
*/

const form = document.querySelector('.contact_form');

//const input = document.querySelector('.input');
const fullname = document.querySelector("#input_name");
const email = document.querySelector('#input_mail');
const subject = document.querySelector('#input_subject');
const message = document.querySelector('#input_message');
//const buttons = document.querySelector('.buttons');
const success = document.querySelector('.success');
const nextPage = document.querySelector('#button_submit');


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
  sendData();
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
    success.innerHTML = `<h2 class="success">Message is sent</h2>`;
  }
};

/*
  Send form to wordpress
*/

const contact = JSON.stringify({
  //Information
  fullname: fullname,
  email: email,
  subject: subject,
  message: message
});

async function sendData() {
  console.log("contact sumbition running");
  const res = await fetch("https://exam1.aks-faret.no/wp-json/wp/v2/contact", 
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: contact,
  });

  console.log(res);
  const contactData = await res.json();
  console.log(contactData);
}

/*
const sendData = () => {
  const contactUrl = "https://exam1.aks-faret.no/wp-json/wp/v2/contact";

  // Prepare to send data
  let contactData = {
    fullname: fullname,
    email: email,
    subject: subject,
    message: message
  }

  // send data to wordpress contact post
  fetch(contactUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contactData)
  })
  .then(function(response) {
    if (response.ok) {
      console.log("Contact data sent successfully");
      // Resets the form
      form.reset();
    } else {
      throw new Error("Error submitting form");
    }
  })
  .catch(function(error) {
    console.log(error);
  });
}
*/