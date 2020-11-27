<?php
// $servername = "db1552.mydbserver.com";
// $username = "p452177d1";
// $password = "oa6O8g,6movs";
// $dbname = "usr_p452177_4";

$servername = "localhost";
$username = "root";
$password = "12345678";
$dbname = "usr_p452177_4";


$GLOBALS['connection'] = new mysqli($servername, $username, $password, $dbname);

$GLOBALS['data'] = json_decode($_REQUEST["data"]);


if ($GLOBALS['connection']->connect_error)
    die("Connection failed: " . $GLOBALS['connection']->connect_error);

if (isset($_REQUEST["purpose"])) {
    switch ($_REQUEST["purpose"]) {
        case "Login":
            login();
            break;
            // ---- Club ----
        case "RegisterClub":
            registerClub();
            break;
        case "EditClub":
            editClub();
            break;
        case "DeletClub":
            deleteClub();
            break;
        case "GetClub":
            getClub();
            break;
            // ---- Member ----
        case "RegisterMember":
            registerMember();
            break;
        case "EditMember":
            editMember();
            break;
        case "ChangeMemberPassword":
            changeMemberPassword();
            break;
        case "DeletMember":
            deleteMember();
            break;
        case "GetMember":
            getMember();
            break;
        case "GetMembersOfClub":
            getMembersOfClub();
            break;
            // ---- Court ----
        case "AddCourt":
            addCourt();
            break;
        case "EditCourt":
            editCourt();
            break;
        case "DeleteCourt":
            deleteCourt();
            break;
        case "GetCourt":
            getCourt();
            break;
        case "getCourtsOfClub":
            getCourtsOfClub();
            break;
            // ---- Reservation ----
        case "AddReservation":
            addReservation();
            break;
        case "EditReservation":
            editReservation();
            break;
        case "DeleteReservation":
            deleteReservation();
            break;
        case "GetRervation":
            getReservation();
            break;
        case "GetReservationsOfClub":
            getReservationsOfClub();
            break;
            // ---- Nothing ----
        default:
            die("Nix!");
            break;
    }
}

function login()
{
    $query = "SELECT * FROM member WHERE email= '" . $GLOBALS['data']->email . "' AND password = '" . sha1($GLOBALS['data']->password) . "'";
    $user = $GLOBALS['connection']->query($query);
    if ($user->num_rows > 0)
        die(json_encode($user->fetch_assoc()));
    else
        die("noMatch");
}

// ---------------------------- Club Begin ----------------------------
function registerClub()
{
    $query = "INSERT INTO club (clubname, address, postcode, logo, hoursAtOnce, hoursPerWeek, openFrom, openUntil, daysBefore) 
    VALUES ('" . $GLOBALS['data']->clubname . "','" . $GLOBALS['data']->address . "','" . $GLOBALS['data']->postcode . "','" . $GLOBALS['data']->logo . "','" . $GLOBALS['data']->hoursAtOnce . "','" . $GLOBALS['data']->hoursPerWeek . "','" . $GLOBALS['data']->openFrom . "','" . $GLOBALS['data']->openUntil . "','" . $GLOBALS['data']->daysBefore . "');";
    $result = $GLOBALS['connection']->query($query);
    die($result ? json_encode($GLOBALS['connection']->insert_id) : "Could not register club");
}

function editClub()
{
    $query = "UPDATE club SET (clubname, address, postcode, logo, hoursAtOnce, hoursPerWeek, openFrom, openUntil, daysBefore)
    VALUES ('" . $GLOBALS['data']->clubname . "','" . $GLOBALS['data']->address . "','" . $GLOBALS['data']->postcode . "','" . $GLOBALS['data']->logo . "','" . $GLOBALS['data']->hoursAtOnce . "','" . $GLOBALS['data']->hoursPerWeek . "','" . $GLOBALS['data']->openFrom . "','" . $GLOBALS['data']->openUntil . "','" . $GLOBALS['data']->daysBefore . "') 
    WHERE clubname = '" . $GLOBALS['data']->clubname . "';";
    $result = $GLOBALS['connection']->query($query);
    die($result ? "Edit successfully :)" : "Could not edit club");
}

function deleteClub()
{
    $query = "DELETE FROM club WHERE clubname='" . $GLOBALS['data']->clubname . "'";
    $result = $GLOBALS['connection']->query($query);
    die($result);
}

function getClub()
{
    $query = "SELECT * FROM club WHERE clubname = '" . $GLOBALS['data']->clubname . "'";
    $club = $GLOBALS['connection']->query($query);
    if ($club)
        die(json_encode($club->fetch_assoc()));
    else
        die(false);
}
// ---------------------------- Club End ----------------------------
// ---------------------------- Member Begin ----------------------------
function registerMember()
{
    $query = "INSERT INTO member (first_name, last_name, gender, birthday, phonenumber, email, password, role, clubname) 
    VALUES ('" . $GLOBALS['data']->first_name . "','" . $GLOBALS['data']->last_name . "','" . $GLOBALS['data']->gender . "','" . $GLOBALS['data']->birthday . "','" . $GLOBALS['data']->phonenumber . "','" . $GLOBALS['data']->email . "','" . sha1($GLOBALS['data']->password) . "'," . $GLOBALS['data']->role . ",'" . $GLOBALS['data']->clubname . "');";
    $result = $GLOBALS['connection']->query($query);
    die($result ? json_encode($GLOBALS['connection']->insert_id) : "Could not register member");
}

function editMember()
{
    $query = "UPDATE member SET (first_name, last_name, gender, birthday, phonenumber, email, role, clubname) 
    VALUES ('" . $GLOBALS['data']->first_name . "','" . $GLOBALS['data']->last_name . "','" . $GLOBALS['data']->gender . "','" . $GLOBALS['data']->birthday . "','" . $GLOBALS['data']->phonenumber . "','" . $GLOBALS['data']->email . "','" . $GLOBALS['data']->role . "','" . $GLOBALS['data']->clubname . "') 
    WHERE membernumber = '" . $GLOBALS['data']->membernumber . "';";
    $result = $GLOBALS['connection']->query($query);
    die($result ? "Edit successfully :)" : "Could not edit member");
}

function changeMemberPassword()
{
    $query = "UPDATE member SET (password) 
    VALUES ('" . $GLOABALS['data']->password . "') 
    WHERE membernumber = '" . $GLOABALS['data']->membernumber . "';";
    $result = $GLOBALS['connection']->query($query);
    die($result ? "Changed Password successfully :)" : "Could not change Member Password");
}

function deleteMember()
{
    $query = "DELETE FROM member WHERE membernumber='" . $GLOBALS['data']->membernumber . "';";
    $result = $GLOBALS['connection']->query($query);
    die($result);
}
function getMember()
{
    $query = "SELECT * FROM member WHERE membernumber = '" . $GLOBALS['data']->membernumber . "'";
    $club = $GLOBALS['connection']->query($query);
    if ($club)
        die(json_encode($club->fetch_assoc()));
    else
        die(false);
}

function getMembersOfClub()
{
    $query = "SELECT * FROM member WHERE clubname = '" . $GLOBALS['data']->clubname . "'";
    $club = $GLOBALS['connection']->query($query);
    if ($club)
        die(json_encode($club->fetch_all(MYSQLI_ASSOC)));
    else
        die(false);
}
// ---------------------------- Member End ----------------------------
// ---------------------------- Court Begin ----------------------------
function addCourt()
{
    $query = "INSERT INTO court (clubname, name, surface) VALUES ('" . $GLOBALS['data']->clubname . "','" . $GLOBALS['data']->name . "','" . $GLOBALS['data']->surface . "');";
    $result = $GLOBALS['connection']->query($query);
    die($result ? json_encode($GLOBALS['connection']->insert_id) : "Could not add court");
}

function editCourt()
{
    $query = "UPDATE court SET (clubname, name, surface) VALUES ('" . $GLOBALS['data']->clubname . "','" . $GLOBALS['data']->name . "','" . $GLOBALS['data']->surface . "') 
    WHERE courtid = '" . $GLOBALS['data']->id . "';";
    $result = $GLOBALS['connection']->query($query);
    die($result ? "Edit successfully :)" : "Could not edit court");
}

function deleteCourt()
{
    $query = "DELETE FROM court WHERE courtid='" . $GLOBALS['data']->id . "';";
    $result = $GLOBALS['connection']->query($query);
    die($result);
}
function getCourt()
{
    $query = "SELECT * FROM court WHERE courtid = '" . $GLOBALS['data']->courtid . "'";
    $club = $GLOBALS['connection']->query($query);
    if ($club)
        die(json_encode($club->fetch_assoc()));
    else
        die(false);
}

function getCourtsOfClub()
{
    $query = "SELECT * FROM court WHERE clubname = '" . $GLOBALS['data']->clubname . "'";
    $club = $GLOBALS['connection']->query($query);
    if ($club)
        die(json_encode($club->fetch_assoc()));
    else
        die(false);
}
// ---------------------------- Court End ----------------------------
// ---------------------------- Reservation Begin ----------------------------
function addReservation()
{
    $query = "INSERT INTO reservation (reservedFrom, reservedUntil, date, reservationstype, courtid, membernumber, activ) VALUES ('" . $GLOBALS['data']->reservedFrom . "','" . $GLOBALS['data']->reservedUntil . "','" . $GLOBALS['data']->date . "','" . $GLOBALS['data']->reservationstype . "','" . $GLOBALS['data']->courtid . "','" . $GLOBALS['data']->membernumber . "','" . $GLOBALS['data']->activ . "');";
    $result = $GLOBALS['connection']->query($query);
    die($result ? json_encode($GLOBALS['connection']->insert_id) : "Could not add court");
}

function editReservation()
{
    $query = "UPDATE reservation SET (reservedFrom, reservedUntil, date, reservationstype, courtid, membernumber, activ) VALUES ('" . $GLOBALS['data']->reservedFrom . "','" . $GLOBALS['data']->reservedUntil . "','" . $GLOBALS['data']->date . "','" . $GLOBALS['data']->reservationstype . "','" . $GLOBALS['data']->courtid . "','" . $GLOBALS['data']->membernumber . "','" . $GLOBALS['data']->activ . "') 
    WHERE reservationnumber = '" . $GLOBALS['data']->reservationnumber . "';";
    $result = $GLOBALS['connection']->query($query);
    die($result ? "Edit successfully :)" : "Could not add court");
}

function deleteReservation()
{
    $query = "DELETE FROM reservation WHERE reservationnumber='" . $GLOBALS['data']->reservationnumber . "';";
    $result = $GLOBALS['connection']->query($query);
    die($result);
}

function getReservation()
{
    $query = "SELECT * FROM reservation WHERE reservationnumber = '" . $GLOBALS['data']->reservationnumber . "'";
    $club = $GLOBALS['connection']->query($query);
    if ($club)
        die(json_encode($club->fetch_assoc()));
    else
        die(false);
}

function getReservationsOfClub()
{
    $query = "SELECT * FROM reservation WHERE clubname = '" . $GLOBALS['data']->clubname . "'";
    $club = $GLOBALS['connection']->query($query);
    if ($club)
        die(json_encode($club->fetch_assoc()));
    else
        die(false);
}
// ---------------------------- Reservation End ----------------------------

$GLOBALS['connection']->close();
