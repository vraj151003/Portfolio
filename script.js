document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation (can be enhanced)
    if (name && email && message) {
      document.getElementById(
        "responseMessage"
      ).innerText = `Thank you, ${name}! Your message has been sent.`;
    } else {
      document.getElementById("responseMessage").innerText =
        "Please fill in all fields.";
    }

    // Here you can add code to send the form data to a server using an AJAX request
    // For example, using fetch() or XMLHttpRequest
  });
