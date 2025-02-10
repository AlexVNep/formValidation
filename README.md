## Form Validation Assignment

## Overview

This project involves building a browser-based form that collects user details, including Email, Country, Zip Code, Password, and Password Confirmation fields. The form implements live inline validation to ensure proper user input before submission.

## Features

Live inline validation: Each input field is validated in real time as the user interacts with it.

Error messages: Fields that contain invalid input display a helpful error message.

Custom JavaScript validation: The <form> element uses the novalidate attribute, and all validation logic is handled in JavaScript.

Visual feedback: Invalid fields are highlighted in red until they are correctly filled in.

Prevent invalid submission: The form prevents submission if any errors or unfilled required fields exist.

Successful submission feedback: If all fields are correctly filled, the form simulates a submission and provides positive feedback.

## Technologies Used

HTML: Structure and form elements

CSS: Styling, including :valid and :invalid pseudo-classes for validation feedback

JavaScript: Event listeners and validation logic

## Validation Rules

Email: Must be a valid email format.

Country: Must contain between 4 and 60 characters.

Zip Code: Must be a 4-digit number, optionally followed by another 4 digits.

Password: Must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.

Password Confirmation: Must match the Password field.

## How to Use

Clone the repository using git clone git@github.com:AlexVNep/vanillaJSProjectTemplate.git

In the terminal run npm i.

Open [localhost](http://localhost:8080/) in your browser.

Attempt to submit the form with errors to see validation messages.

Correct any invalid fields.

Successfully "submit" the form and receive positive feedback.
