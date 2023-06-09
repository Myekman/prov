function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your message was sent successfully!")
        },
        function(error) {
            console.log("FAILED", error);
            alert("Your message failed to be sent..")
        }
    );
    return false;  // To block from loading a new page
}
