<?php
$servername = "db1552.mydbserver.com";
$username = "p452177d1";
$password = "oa6O8g,6movs";
$dbname = "usr_p452177_4";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error)
    die("Connection failed: " . $connection->connect_error);

if(isset($_REQUEST["purpose"])){
    switch($_REQUEST["purpose"]){
        case "Login":
            login($connection);
            break;
        case "Register":
            register($connection);
            break;
        case "AddCourt":
            addCourt($connection);
            break;
        case "DeleteCourt":
            deleteCourt($connection);
            break;
        default:
            break;
    }
}

function login($connection){
    $data = json_decode($_REQUEST["data"]);
    $query = "SELECT * FROM users WHERE username= '".$data->username."' AND password = '".sha1($data->password)."'";
    $user = $connection->quer($query);
    if($user->num_rows>0){
        die($json_encode($user->fetch_assoc()));
    } else
        die(false);
}

function addCourt($connection){
    $data = json_decode($_REQUST["data"]);

}

$connection->close();