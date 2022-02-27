let card = document.querySelector(".card");
let loginBtn = document.querySelector("#login");
let signUpLink = document.querySelector("#sign-up-link");
let loginLink = document.querySelector("#login-link");
let loginForm = document.querySelector(".login-form");
let signUpForm = document.querySelector(".signup-form");

loginBtn.addEventListener("click", () => {
    card.style = "display: none;";
    signUpForm.style = "display: none";
    loginForm.style = "display: flex;";
});

signUpLink.addEventListener("click", (e) => {
    e.preventDefault();
    card.style = "display: none;";
    loginForm.style = "display: none;";
    signUpForm.style = "display: flex;";
});

loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    card.style = "display: none;";
    loginForm.style = "display: flex;";
    signUpForm.style = "display: none;";
});
