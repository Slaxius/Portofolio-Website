function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;

    const parameter = {
        from_name: name,
        from_email: email,
        subject: title,
        message: message,
    };

    emailjs.send('service_ic0pivi', 'template_9m1anj7', parameter)
    .then(function(response) {
        alert("Mail sent successfully!");
    }, function(error) {
        alert("Failed to send mail: " + error);
    });
}