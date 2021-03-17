<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "Form"  . $email . "\r\n";
$header = "X-Mailer:PHP /"  . phpversion . "\r\n";
$header = "Mime Version: 1.0 \r\n";
$header = "Context Type: text/plain";

$comment ="This message has been sent by " .$name.  "\r\n";
$comment ="E-mail: " .$email.  "\r\n";
$comment ="Message: " .$message.  "\r\n";

$for = "blur-imran@hotmail.com";
$subject = "contact from website";

mail($subject, utf8_decode($comment), $header );

echo json_encode (array(
    
    'Message' =>sprintf("Your message has been sent %s",$name);
    
));
