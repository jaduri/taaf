<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $topic = $_POST['topic'];
  $message = $_POST['body'];
  $headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail("taafcomn@taaf.com.ng", $topic, $message, $headers);
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="TAAF is a non-profit, non-governmental organisation that focuses on empowering women in order to improve their quality of life and their local community">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./index.css">
  <link href="https://fonts.googleapis.com/css?family=Inria+Sans|Merriweather+Sans|Open+Sans|Lato&display=swap" rel="stylesheet">
  <link rel="icon" href="./images/icon.ico">
  <title>THE AMINA AGBO FOUNDATION - Empowering women & communities</title>
</head>
  <body>
    <div id="home-banner" style="background: linear-gradient(#2fb000, #2fb000)">
      <h1>Thank You!..  <?php echo $_POST['name']; ?></h1>
      <h1>Your message has been received</h1>
      <p style="color: #fff">We will reach out to you at <?php echo $_POST['email']; ?></p>
    </div>
    <script type="text/javascript">
      setTimeout(()=>{
        window.location.href = "./";
      }, 5000)
    </script>
  </body>
</html>
