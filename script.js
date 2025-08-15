//email
//county
//postal code
//password
//password confirm
//validation on input
//error onsubmit

//show error message
const email = document.querySelector("#mail");
const emailError = document.querySelector("#mail + span.error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError(emailError);
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showError(passwordError);
  }
});

function showError(error) {
  if (email.validity.typeMismatch) {
    error.textContent = "Entered value needs to be an email address.";
    error.className = "error active";
  }
  if (password.validity.tooShort) {
    error.textContent = `Password should be at least 8 characters. You entered ${password.value.length}`;
  }
}
