<?php
$host = "localhost";
$user = "root"; // Default XAMPP username
$pass = "";
$dbname = "auction_platform";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT username, email, role FROM users";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    echo "User: " . $row["username"] . " | Role: " . $row["role"] . "<br>";
}
$conn->close();
?>
