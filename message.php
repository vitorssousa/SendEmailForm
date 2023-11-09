<?php 
 
$nome = $_POST["nome"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$website = $_POST["website"];
$text = $_POST["text"];


if (!empty($email) && !empty($text)) {

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to      = 'nobody@example.com';
        $subject = 'the subject';
        $message = $text;
        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)){
            echo "Your message has been sent";
        } else {
            echo "Sorry, failed to send your message!";
        }

        
    }else {
        echo "Enter a valid email address!";
    }

}

else {
    echo "Email and Message are required!";
    
}

?>