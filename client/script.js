document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  // Toggle the mobile menu
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  // Input fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Function to clear error message on input
  const clearErrorOnInput = (inputField) => {
    inputField.addEventListener("input", function () {
      inputField.nextElementSibling.textContent = "";
    });
  };

  clearErrorOnInput(nameInput);
  clearErrorOnInput(emailInput);
  clearErrorOnInput(passwordInput);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Error fields
    let isValid = true;

    // Name Validation
    if (nameInput.value.trim() === "") {
      nameInput.nextElementSibling.textContent = "Full name is required";
      isValid = false;
    }

    // Email Validation
    if (emailInput.value.trim() === "") {
      emailInput.nextElementSibling.textContent = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
      emailInput.nextElementSibling.textContent = "Enter a valid email";
      isValid = false;
    }

    // Password Validation
    if (passwordInput.value.trim() === "") {
      passwordInput.nextElementSibling.textContent = "Password is required";
      isValid = false;
    } else if (passwordInput.value.length < 6) {
      passwordInput.nextElementSibling.textContent =
        "Password must be at least 6 characters";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
