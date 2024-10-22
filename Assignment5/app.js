"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Define form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phonenumber');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('textarea');
// Function to validate form data
function validateForm() {
    let isValid = true;
    let errorMessages = [];
    // Check if name is not empty and contains only letters
    const nameValue = nameInput.value.trim();
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameValue) {
        errorMessages.push("Name is required.");
        isValid = false;
    }
    else if (!nameRegex.test(nameValue)) {
        errorMessages.push("Name should contain only letters.");
        isValid = false;
    }
    // Validate email
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
        errorMessages.push("Email is required.");
        isValid = false;
    }
    else if (!emailRegex.test(emailValue)) {
        errorMessages.push("Please enter a valid email address.");
        isValid = false;
    }
    // Validate phone number (required and exactly 10 digits)
    const phoneValue = phoneInput.value.trim();
    if (!phoneValue) {
        errorMessages.push("Phone number is required.");
        isValid = false;
    }
    else if (phoneValue.length !== 10 || isNaN(Number(phoneValue))) {
        errorMessages.push("Phone number should be exactly 10 digits.");
        isValid = false;
    }
    // Validate subject
    const subjectValue = subjectInput.value.trim();
    if (!subjectValue) {
        errorMessages.push("Subject is required.");
        isValid = false;
    }
    // Validate message
    const messageValue = messageInput.value.trim();
    if (!messageValue) {
        errorMessages.push("Message is required.");
        isValid = false;
    }
    // Display all error messages
    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
    }
    return isValid;
}
// Event listener for form submission
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    // Validate the form before submitting
    if (!validateForm()) {
        return; // Stop submission if form is not valid
    }
    // Prepare form data
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phoneNumber: phoneInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    };
    try {
        const response = yield fetch('https://67174da0b910c6a6e0276c17.mockapi.io/contactus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert("Form Submitted Successfully");
            form.reset(); // Reset form fields
        }
        else {
            alert("Submission Failed");
        }
    }
    catch (error) {
        alert("Submission Failed: " + error.message);
    }
}));
