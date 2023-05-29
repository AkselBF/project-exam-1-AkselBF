
/*
  Input and textarea messages and error
*/

const form = document.querySelector('.contact_form');

const fullname = document.querySelector("#input_name");
const email = document.querySelector('#input_mail');
const subject = document.querySelector('#input_subject');
const message = document.querySelector('#input_message');

const success = document.querySelector('.success');
const nextPage = document.querySelector('#button_submit');

// Submit button event
form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
  
  postData();
});

// Error and success with contact inputs
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.form_error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.form_error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

// E-mail validation
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// If inputs are correct
const validateInputs = () => {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  // Minimum 5 characters
  if (fullnameValue === '') {
    setError(fullname, 'Full name is required');
  } else if (fullnameValue.length < 5) {
    setError(fullname, 'Full name must be at least 5 character.');
  } else {
    setSuccess(fullname);
  }

  // Correct email input
  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  // Minimum 15 characters
  if (subjectValue === '') {
    setError(subject, 'Subject is required');
  } else if (subjectValue.length < 15) {
    setError(subject, 'Subject must be at least 15 character.');
  } else {
    setSuccess(subject);
  }

  // Minimum 25 characters
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
  Send form data to wordpress via submit button
*/
async function postData() {
  const username = "exam1.aks-faret.no";
  const password = "jM9Q dbpb Tm07 iZya Pozw BXuq";

  const contactInfo = JSON.stringify({
    title: document.querySelector("#input_name").value,
    status: "publish",
    acf: {
      fullname: document.querySelector("#input_name").value,
      email: document.querySelector("#input_mail").value,
      subject: document.querySelector("#input_subject").value,
      message: document.querySelector("#input_message").value
    }
  });

	console.log("post running");
	const res = await fetch(
		"https://exam1.aks-faret.no/wp-json/wp/v2/contact",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
        Authorization: "Basic " + btoa(username + ":" + password)
			},
			body: contactInfo,
		}
	);

	console.log(res);
	const data = await res.json();
	console.log(data);
}