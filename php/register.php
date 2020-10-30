<?php
session_start();                                                    //session start

// require_once('../Inc/login.inc.php');                                  //tying with database

if (isset($_GET['register'])) {                                     //checking if registered
    $error = false;
    //club variables
    $clubname = trim(htmlspecialchars($_POST['clubname']));         //with htmlspecialchars we put special character in html code &  with trim we cut all special characters (whitespaces and other characters at start and end of string)
    $streetName = trim(htmlspecialchars($_POST['streetName']));
    $city = trim(htmlspecialchars($_POST['city']));
    $postcode = trim(htmlspecialchars($_POST['postcode']));
    //contactperson variables
    $email = trim(htmlspecialchars($_POST['email']));
    $password = trim(htmlspecialchars($_POST['password']));
    $password2 = trim(htmlspecialchars($_POST['password2']));
    $lastName = trim(htmlspecialchars($_POST['last_name']));
    $firstName = trim(htmlspecialchars($_POST['first_name']));

    //before we safe new registered user, we do 4 checks
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {               //with filter_var and FILTER_VALIDATE_EMAIL we chan check the validity of the email(there are much more filters we can use)
        echo 'Please enter a correct email adress<br>';
        $error = true;
    }
    if (strlen($password == 0)) {                                   //strlen (string length) - here we check if password is not empty
        echo 'Please enter a password<br>';
        $error = true;
    }
    if ($password != $password2) {                                  //compare both passwords if equal
        echo 'Both passwords has to be the same<br>';
        $error = true;
    }
    if (!$error) {                                                  //checking if the clubname is not registerd yet
        $stmt = $con->prepare("SELECT * FROM club WHERE clubname = ?");
        $stmt->bind_param('s', $clubname);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo '<p class="bg-danger text-white m-5 p-5 text-center>This club is already registered</p>';
            $error = true;
        }
    if (!$error) {                                                  //checking if the email adress is not registerd yet
        $stmt = $con->prepare("SELECT * FROM member WHERE email = ?");
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo '<p class="bg-danger text-white m-5 p-5 text-center>This email adress is already used</p>';
            $error = true;
        }
    }

    if (!$error) {                                                  //no errors, we can register the new user

        $stmt = $con->prepare("INSERT INTO club (clubname, street_name, city, postcode) VALUES (?, ?, ?, ?)");    //prepare SQL and bind parameters
        $stmt2 = $con->prepare("INSERT INTO member (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");    //prepare SQL and bind parameters
        $stmt->bind_param("ssss", $username, $email, $hash, $firstName, $lastName);
        $stmt2->bind_param("sss", $firstName, $lastName, $email, $hash);

        $hash = password_hash($password, PASSWORD_DEFAULT);         //encrypting the password

        $stmt->execute();
        $stmt->close();
        $con->close();
        $_SESSION['username'] = $username;

        // header("Location: ../index.php");                           //redirect user to index.php
    }
}

// function addClub(){
//     $data = json_decode($_REQUEST["data"]);
//    $query = "INSERT INTO club(name, surface, clubname) values (".$data->name.", ".$data->surface.”, “.".$data->clubname.";"')";
//    $clubAdded = $connection->query($query);
//    if($clubAdded)
//        die(json_encode($connection->insert_id));
//    else
//        die("Could not add Club");

// }