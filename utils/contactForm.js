function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");

// form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const emailValue = email.value.trim();
  const lastNameValue = lastName.value.trim();
  const quantityValue = quantity.value.trim();

  // firstname
  if (firstNameValue === "") {
    setError(firstName, "Un prénom est requis.");
  } else if (firstNameValue.length < 2) {
    setError(
      firstName,
      "Veuillez entrer un prénom comportant 2 caractères ou plus.",
    );
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    // name
    setError(lastName, "Un nom est requis.");
  } else if (lastNameValue.length < 2) {
    setError(
      lastName,
      "Veuillez entrer un nom comportant 2 caractères ou plus.",
    );
  } else {
    setSuccess(lastName);
  }

  // email
  if (emailValue === "") {
    setError(email, "Une adresse mail est requise");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Veuillez entrer une adresse email valide.");
  } else {
    setSuccess(email);
  }

  // quantity
  if (quantityValue === "") {
    setError(quantity, "Veuillez indiquer le nombre de tournois.");
  } else {
    setSuccess(quantity);
  }

  // Validation message
  if (
    firstNameValue !== "" &&
    lastNameValue !== "" &&
    emailValue !== "" &&
    birthdateValue !== "" &&
    quantityValue !== "" &&
    radioButtonsChecked !== null &&
    checkboxChecked !== null
  ) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      bgroundNone.style.display = "none";
      thanks.style.display = "flex";
      setTimeout(() => form.submit(), 2000);
    });
  }
};
