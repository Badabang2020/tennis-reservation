<?php
$servername = "db1552.mydbserver.com";
$username = "p452177d1";
$password = "oa6O8g,6movs";
$dbname = "usr_p452177_4";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error)
    die("Connection failed: " . $connection->connect_error);

$connection->close();