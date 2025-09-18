function sendEmail() {
  const name = $("#name").val();
  const email = $("#email").val();
  const phone = $("#phone").val();
  const subject = $("#subject").val();
  const message = $("#message").val();

  const parameter = {
    from_name: name,
    from_email: email,
    phone_number: phone,
    email_subject: subject,
    message: message,
  };

  // console.log(parameter); // test parameter

  emailjs.send("service_ic0pivi", "template_9m1anj7", parameter);
  // .then(function(response) { // Ga perlu, karena udah ada popup di contactValidation.js
  //     alert("Mail sent successfully!");
  // }, function(error) {
  //     alert("Failed to send mail: " + error);
  // });
}
