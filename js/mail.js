document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const recipient = "szulc.j.998@wp.pl";

    const subject = encodeURIComponent(
      document.getElementById("subject").value
    );
    const senderEmail = encodeURIComponent(
      document.getElementById("email").value
    );
    const message = encodeURIComponent(
      document.getElementById("message").value
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=Od: ${senderEmail}%0A%0A${message}`;
    window.location.href = mailtoLink;
  });
