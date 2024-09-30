import "./styles.css";
const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".emailSpan");

const country = document.getElementById("country");
const countryError = document.querySelector(".countrySpan");

const zip = document.getElementById("zip");
const zipError = document.querySelector(".zipSpan");

const password = document.getElementById("password");
const passwordError = document.querySelector(".passwordSpan");

const confirmPassword = document.getElementById("conf-psswrd");
const matchPassword = document.querySelector(".confirmPasswordSpan");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showError();
  }
});

zip.addEventListener("input", (event) => {
  if (zip.validity.valid) {
    zipError.textContent = "";
    zipError.className = "error";
  } else {
    showError();
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showError();
  }
});

confirmPassword.addEventListener("input", (event) => {
  if (confirmPassword.validity.valid) {
    matchPassword.textContent = "";
    matchPassword.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !zip.validity.valid ||
    !password.validity.valid ||
    !confirmPassword.validity.valid
  ) {
    showError();
    event.preventDefault();
  } else {
    console.log("I worked");
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  if (country.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    countryError.textContent = "You need to enter a country name.";
  } else if (country.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    countryError.textContent = "Entered value needs to be text.";
  } else if (country.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    countryError.textContent = `Country should be at least ${country.minLength} characters and less than ${country.maxLength}; you entered ${country.value.length}.`;
  }

  if (zip.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    zipError.textContent = "You need to enter a valid zip.";
  } else if (zip.validity.typeMismatch) {
    // If the field doesn't contain a zip,
    // display the following error message.
    zipError.textContent = "Entered value needs to be numerical.";
  } else if (zip.validity.patternMismatch) {
    // If the data does not match required pattern,
    // display the following error message.
    zipError.textContent = `Zip code should be 4 digits characters; you entered ${zip.value.length}.`;
  }

  if (password.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    passwordError.textContent = "You need to enter a valid password.";
  } else if (password.validity.typeMismatch) {
    // If the field doesn't contain an a password,
    // display the following error message.
    passwordError.textContent = "Entered value needs to be a password.";
  } else if (password.validity.patternMismatch) {
    // If the data does not match required pattern,
    // display the following error message.
    passwordError.textContent = `Password is invalid. Must contain 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number - Can contain special characters`;
  }

  if (confirmPassword.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    matchPassword.textContent = "You need to enter a valid password.";
  } else if (confirmPassword.validity.typeMismatch) {
    // If the field doesn't contain an a password
    // display the following error message.
    matchPassword.textContent = "Entered value needs to be a password.";
  } else if (confirmPassword.value !== password.value) {
    matchPassword.textContent = "Password does not match";
  }

  // Set the styling appropriately
  emailError.className = "error active";
  countryError.className = "error active";
  zipError.className = "error active";
  passwordError.className = "error active";
  matchPassword.className = "error active";
}
