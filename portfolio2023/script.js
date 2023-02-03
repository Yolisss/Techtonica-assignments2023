//this is to select the input fields with specific
//id that we're calling
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phonenumber = document.querySelector("#phone-number");
const address = document.querySelector("#address");
const message = document.querySelector("#message");

const form = document.querySelector("#sendmessage");

name.setAttribute("required", "required");
email.setAttribute("required", "required");

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();
  if (name === "") {
    let messageerror = document.getElementsByClassName("error");
    messageerror = "not working";
  }
});
