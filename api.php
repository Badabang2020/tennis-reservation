<?php
$servername = "db1552.mydbserver.com";
$username = "p452177d1";
$password = "oa6O8g,6movs";
$dbname = "usr_p452177_4";

$GLOBALS['connection'] = new mysqli($servername, $username, $password, $dbname);

$GLOBALS['data'] = json_decode($_REQUEST["data"]);


if ($GLOBALS['connection']->connect_error)
    die("Connection failed: " . $GLOBALS['connection']->connect_error);

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
    $query = "SELECT * FROM member WHERE email= '".$GLOBALS['data']->email."' AND password = '".sha1($GLOBALS['data']->password)."'";
    $user = $GLOBALS['connection']->query($query);
    if($user->num_rows>0){
        die(json_encode($user->fetch_assoc()));
    } else
        die(false);
}

function addCourt(){
    $query = "INSERT INTO court(clubname, name, surface) VALUES ('".$GLOBALS['data']->clubname."','".$GLOBALS['data']->name."','".$GLOBALS['data']->surface."');";
    $result = $GLOBALS['connection']->query($query);
    die($result ? json_encode($GLOBALS['connection']->insert_id) : "Could not add court");
}

function registerMember(){
    $query = "INSERT INTO member (first_name, last_name, gender, birthday, phonenumber, email, password, role, clubname) 
    VALUES ('".$GLOBALS['data']->first_name."',''".$GLOBALS['data']->last_name."','".$GLOBALS['data']->gender."','".$GLOBALS['data']->birthday."','".$GLOBALS['data']->phonenumber."','".$GLOBALS['data']->email."','".sha1($GLOBALS['data']->password)."',".$GLOBALS['data']->role.",'".$GLOBALS['data']->clubname."');";
    $result = $GLOBALS['connection']->query($query);
    die($result ? json_encode($GLOBALS['connection']->insert_id) : "Could not register member");
}

function registerClub(){
    $query = "INSERT INTO club (clubname, address, postcode) 
    VALUES ('".$GLOBALS['data']->clubname."','".$GLOBALS['data']->address."','".$GLOBALS['data']->postcode."');";
    $result = $GLOBALS['connection']->query($query);
    die($result ? json_encode($GLOBALS['connection']->insert_id) : "Could not register club");
}

function deleteCourt(){
    $query= "DELETE FROM court WHERE courtid=".$GLOBALS['data']->id.";";
    $result= $GLOBALS['connection']->query($query);
    die($result); 
}

$GLOBALS['connection']->close();