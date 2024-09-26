const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

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

  // Set the styling appropriately
  emailError.className = "error active";
  countryError.className = "error active";
}
