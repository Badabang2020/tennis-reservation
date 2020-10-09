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

//$connection->close();
?>

<!-- Functions!-->

<?php
    //$_REQUEST ['purpose': 'myPurpose', 'target': 'myTarget', 'values': myValues['key1': 'value1', 'key2': 'value2', 'key3': 'value3',...] ]
    if ($_REQUEST) {

        //get purpose
        $purpose = $_REQUEST['purpose'];
        
        switch($_REQUEST['target']) {
            
        }
        switch($purpose) {
            case "add": add();
            break;
            case "edit": edit();
            break;
            case "delete": delete();
            break;
            case "get": get();
            break;
        }

        //add to database
        //creates an sql INSERT statement based on values of $_REQUEST, and executes it.
        function add(){
            
            $target = $_REQUEST['target'];
            // <-------HEAD-------><-------KEYSSTRING--------><--MID---><--------VALUESSTRING------------>
            // INSERT INTO 'target'('key1', 'key2', 'key3',...) VALUES ('value1', 'value2', 'value3',...);
            $queryHead = "INSERT INTO '".$target."'(";
            $keysString = "";
            $queryMid = ") VALUES (";
            $valuesString = "";
            foreach ($_REQUEST['fields'] as $key => $value) {
                $keysString .= ",'".$key."'";
                $valuesString .= ",'".$value."'";
            }
            $valuesString.=");";
            //first char of $keysString and $valuesString is an unwanted ','
            $query = $queryHead.substr($keysString, 1).$queryMid.substr($valuesString, 1);
            global $connection;
            $connection->query($query);
            return;
        }


        //delete from database
        function delete(){

        }


        //edit data in database
        function edit(){

        }


        //get data from database
        function get(){

        }
    }

?>