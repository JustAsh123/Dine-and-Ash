<?php
header("Access-Control-Allow-Origin: *");
$host = "localhost";
$username = "root";
$password = "";
$database = "cafe";

$conn = new mysqli($host,$username,$password,$database);

if($conn->connect_error){
    die("Connection Success");
}

$sql = "select * from menu";
$result = $conn->query($sql);

$data = array();
while ($row = $result->fetch_assoc()){
    $data[] = $row; 
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($data);

?>