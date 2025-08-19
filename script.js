//email
//county
//postal code
//password
//password confirm
//validation on input
//error onsubmit
//show error message

// when the user clicks away or clicks the submit button the form should be validated
//the message should be shown when clicking away

// const email = document.querySelector("#mail");
const password = document.querySelector("#password").value;
const passwordConf = document.querySelector("#password-conf").value;

const form = document.querySelector("form");

const inputFields = document.querySelectorAll("input");

inputFields.forEach((field) =>
  field.addEventListener("focusout", () => {
    if (field.validity.valid) {
      clearError(field);
    } else {
      showError(field);
    }
  })
);

form.addEventListener("submit", (e) => {
  inputFields.forEach((field) => {
    if (!field.validity.valid) {
      showError(field);
    }
  });
  e.preventDefault();
});

function showError(field) {
  const error = document.querySelector(`#${field.id} + span.error`);

  switch (error.id) {
    case "mail-err":
      error.textContent = "Email not valid";
      break;
    case "postcode-err":
      error.textContent = "Postcode not valid";
      break;
    case "password-err":
      error.textContent = "Password should be at least 8 characters long";
      break;
  }

  error.className = "error active";
}

function clearError(field) {
  const error = document.querySelector(`#${field.id} + span.error`);
  error.textContent = "";
  error.className = "error";
}
