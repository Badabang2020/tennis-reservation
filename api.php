//TODO: DB-CONNECTION SETUP
<?php
$servername = "178.16.63.152";
$username = "p452177d1";
$password = "oa6O8g,6movs";
$dbname = "usr_p452177_4";

//CREATE CONNECTION
$connection = new mysqli($servername, $username, $password, $dbname);

//CHECK CONNECTION
if ($connection->connect_error)
    die("Connection failed: " . $connection->connect_error);


// $query = "SELECT * FROM member";
// $result = $connection->query($query);
// if ($result) {
//     if ($result->num_rows > 0) {
//         while ($row = $result->fetch_assoc()) {
//             echo " **************** <br/>";
//             echo $row["first_name"] . " " . $row["last_name"] . "<br/>";
//             echo " **************** <br/>";
//             echo "<br/>";
//         }
//     }
// } else
//     echo ("Zero results.");

$connection->close();

?>