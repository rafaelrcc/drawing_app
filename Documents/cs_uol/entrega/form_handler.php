<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if reCAPTCHA is filled out
    if (isset($_POST["g-recaptcha-response"])) {
        // Your reCAPTCHA secret key
        $secretKey = "YOUR_SECRET_KEY";
        $captcha = $_POST["g-recaptcha-response"];

        // Verify reCAPTCHA response
        $url = "https://www.google.com/recaptcha/api/siteverify?secret=" . $secretKey . "&response=" . $captcha;
        $response = file_get_contents($url);
        $responseKeys = json_decode($response, true);

        // If reCAPTCHA is valid
        if ($responseKeys["success"]) {
            // Get form data
            $name = $_POST["name"];
            $message = $_POST["message"];

            // Send an email
            $to = "your_email@example.com"; // Replace with your email address
            $subject = "RSVP Form Submission";
            $headers = "From: " . $name . "\r\n" .
                "Reply-To: no-reply@example.com" . "\r\n" .
                "X-Mailer: PHP/" . phpversion();
            $content = "Name: " . $name . "\n\nMessage: " . $message;

            if (mail($to, $subject, $content, $headers)) {
                header("Location: /success.html"); // Redirect to a success page
                exit();
            } else {
                header("Location: /error.html"); // Redirect to an error page
                exit();
            }
        } else {
            header("Location: /error.html"); // Redirect to an error page if reCAPTCHA is invalid
            exit();
        }
    }
}
?>
