// You can add JavaScript functionality here, such as form validation or animations
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  // Example: You can send the form data using fetch API or perform form validation here
  console.log("Form data:", formData);
});
