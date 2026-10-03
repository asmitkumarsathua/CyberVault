// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// START LEARNING BUTTON

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {

    document
        .getElementById("courses")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// EXPLORE BUTTON

const exploreButton = document.getElementById("exploreButton");

exploreButton.addEventListener("click", function () {

    document
        .getElementById("features")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// GET STARTED BUTTON

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// SIGNUP FORM

const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    document.getElementById("message").textContent =
        `Welcome to CyberVault, ${name}!`;

    form.reset();

});


// REMEMBER USER

const savedName = localStorage.getItem("userName");

if (savedName) {

    document.getElementById("message").textContent =
        `Welcome back, ${savedName}!`;

}