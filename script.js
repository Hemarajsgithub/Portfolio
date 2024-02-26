document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  console.log("Form data:", formData);
});
