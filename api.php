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
        case "RegisterClub":
            registerClub($connection);
            break;
        case "RegisterMember":
            registerMember($connection);
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
    $query = "SELECT * FROM member WHERE email= '".$data->email."' AND password = '".sha1($data->password)."'";
    $user = $connection->query($query);
    if($user->num_rows>0){
        die(json_encode($user->fetch_assoc()));
    } else
        die(false);
}

function addCourt($connection){
    $data = json_decode($_REQUEST["data"]);

}

function registerMember($connection){
    $data = json_decode($_REQUEST["data"]);
    $query = "INSERT INTO member (first_name, last_name, gender, birthday, phonenumber, email, password, role, clubname) 
    VALUES ('".$data->first_name.",".$data->last_name.",".$data->gender.",".$data->birthday.",".$data->phonenumber.",".$data->email.",".sha1($data->password).",".$data->role.",".$data->clubname.");";
    $result = $connection->query($query);
    if($result) {
        die(json_encode($connection->insert_id));
    } else {
        die("Could not register member.");
    }
}


$connection->close();