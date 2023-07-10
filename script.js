const firstNameInput = document.querySelector("#first-name-input");
const LastNameInput = document.querySelector("#last-name-input");
const Email = document.querySelector("#email-input");
const PasswordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

LastNameInput.onkeyup = () => {
  LastNameInput.classList.remove("is-valid");
  LastNameInput.classList.remove("is-invalid");
};

Email.onkey = () => {
  Email.classList.remove("is-valid");
  Email.classList.remove("is-invalid");
};

PasswordInput.onkeyup = () => {
  PasswordInput.classList.remove("is-valid");
  PasswordInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let firstnamecheck = false;
  let lastnamecheck = false;
  let passcheck = false;
  let email = false;
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    firstnamecheck = true;
  }
  if (LastNameInput.value === "") {
    LastNameInput.classList.add("is-invalid");
  } else {
    LastNameInput.classList.add("is-valid");
    lastnamecheck = true;
  }
  if (validateEmail(Email.value)) {
    Email.classList.add("is-valid");
    emailcheck = true;
  } else {
    Email.classList.add("is-invalid");
  }
  if (PasswordInput.value.length >= 6) {
    PasswordInput.classList.add("is-valid");
    passcheck = true;
  } else {
    PasswordInput.classList.add("is-invalid");
  }

  if (firstnamecheck && lastnamecheck && passcheck && emailcheck) {
    alert("Registered successfully");
  }
};
