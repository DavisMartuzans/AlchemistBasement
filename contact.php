<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'martuzans.davis@gmail.com';
    $subject = 'New Message from Open World Survival Game Website';

    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo 'Thank you for your message!';
    } else {
        echo 'There was a problem sending your message. Please try again.';
    }
?>