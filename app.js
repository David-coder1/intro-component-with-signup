const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const revealPassword = document.querySelector('.reveal_password');
const errorCircle = document.querySelectorAll('.error_circle');
const errorText = document.querySelectorAll('.error_text')





// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add("error");
    errorCircle[0].classList.remove("hide")
    errorText[0].classList.remove("hide")

  } else {
    firstName.classList.remove("error");
    errorCircle[0].classList.add("hide")
    errorText[0].classList.add("hide")
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add("error");
    errorCircle[1].classList.remove("hide")
    errorText[1].classList.remove("hide")

  } else {
    lastName.classList.remove("error");
    errorCircle[1].classList.add("hide")
    errorText[1].classList.add("hide")
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add("error");
    errorCircle[2].classList.remove("hide")
    errorText[2].classList.remove("hide")


  } else {
    email.classList.remove('error');
    errorCircle[2].classList.add("hide")
    errorText[2].classList.add("hide")
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    errorCircle[3].classList.remove("hide")
    errorText[3].classList.remove("hide")


  } else {
    password.classList.remove('error');
    errorCircle[3].classList.add("hide")
    errorText[3].classList.add("hide")

  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

revealPassword.addEventListener("click", () => {
  if (password.type === "text") {
    password.type = "password";
  } else {
    password.type = "text";
  }
});