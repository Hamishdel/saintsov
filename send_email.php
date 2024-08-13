<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars(trim($_POST['firstName']));
    $lastName = htmlspecialchars(trim($_POST['lastName']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    $to = 'catchyshort@gmail.com';
    $email_subject = "Contact Form Submission: $subject";
    $email_body = "You have received a new message from the contact form on your website.\n\n".
                  "Here are the details:\n".
                  "First Name: $firstName\n".
                  "Last Name: $lastName\n".
                  "Email: $email\n".
                  "Phone Number: $phone\n".
                  "Subject: $subject\n".
                  "Message:\n$message";
    $headers = "From: noreply@yourwebsite.com\n";
    $headers .= "Reply-To: $email";   
    
    if(mail($to, $email_subject, $email_body, $headers)) {
        header("Location: submitted.html");
        exit();
    } else {
        echo "There was an error sending your message.";
    }
} else {
    echo "Form submission error.";
}
?>
