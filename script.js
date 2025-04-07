// JavaScript for form submission
const form = document.getElementById("registrationForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const affiliation = document.getElementById("affiliation").value.trim();

  if (name === '' || email === '' || affiliation === '') {
    alert("Please fill out all required fields.");
    return;
  }

  message.style.display = "block";
  form.reset();
});
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
