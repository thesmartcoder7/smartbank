let card = document.querySelector(".card");
let loginBtn = document.querySelector("#login");
let loginForm = document.querySelector(".login-form");

loginBtn.addEventListener("click", () => {
    card.style = "display: none;";
    loginForm.style = "display: flex;";
});
