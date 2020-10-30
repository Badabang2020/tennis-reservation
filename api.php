<?php
$servername = "db1552.mydbserver.com";
$username = "p452177d1";
$password = "oa6O8g,6movs";
$dbname = "usr_p452177_4";

$_GLOBAL['connection'] = new mysqli($servername, $username, $password, $dbname);

$_GLOBAL['data'] = json_decode($_REQUEST["data"]);


if ($_GLOBAL['connection']->connect_error)
    die("Connection failed: " . $_GLOBAL['connection']->connect_error);

if(isset($_REQUEST["purpose"])){
    switch($_REQUEST["purpose"]){
        case "Login":
            login();
            break;
        case "RegisterClub":
            registerClub();
            break;
        case "RegisterMember":
            registerMember();
            break;
        case "AddCourt":
            addCourt();
            break;
        case "DeleteCourt":
            deleteCourt();
            break;
        default:
            break;
    }
}

function login(){
    $query = "SELECT * FROM member WHERE email= '".$_GLOBAL['data']->email."' AND password = '".sha1($_GLOBAL['data']->password)."'";
    $user = $_GLOBAL['connection']->query($query);
    if($user->num_rows>0){
        die(json_encode($user->fetch_assoc()));
    } else
        die(false);
}

function addCourt(){
    $query = "INSERT INTO court(clubname, name, surface) VALUES (".$_GLOBAL['data']->clubname.",".$_GLOBAL['data']->name.",".$_GLOBAL['data']->surface.");";

    $result = $_GLOBAL['connection']->query($query);
    if($result) 
        die(json_encode($_GLOBAL['connection']->insert_id));
    else
        die("Could not add court.");


}

function registerMember(){
    $query = "INSERT INTO member (first_name, last_name, gender, birthday, phonenumber, email, password, role, clubname) 
    VALUES (".$_GLOBAL['data']->first_name.",".$_GLOBAL['data']->last_name.",".$_GLOBAL['data']->gender.",".$_GLOBAL['data']->birthday.",".$_GLOBAL['data']->phonenumber.",".$_GLOBAL['data']->email.",".sha1($_GLOBAL['data']->password).",".$_GLOBAL['data']->role.",".$_GLOBAL['data']->clubname.");";
    $result = $_GLOBAL['connection']->query($query);
    if($result) 
        die(json_encode($_GLOBAL['connection']->insert_id));
    else
        die("Could not register member.");
}

function registerClub(){
    $query = "INSERT INTO club (clubname, address, postcode) 
    VALUES (".$_GLOBAL['data']->clubname.",".$_GLOBAL['data']->address.",".$_GLOBAL['data']->postcode.");";
    $result = $_GLOBAL['connection']->query($query);
    if($result) 
        die(json_encode($_GLOBAL['connection']->insert_id));
    else
        die("Could not register club.");
}


function deleteCourt(){

    $query= "DELETE FROM court WHERE courtid=".$_GLOBAL['data']->id.";";
    $result= $_GLOBAL['connection']->query($query);
    die($result); 
}



$_GLOBAL['connection']->close();