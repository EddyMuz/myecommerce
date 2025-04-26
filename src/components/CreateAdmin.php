<?php
session_start();
if ($_SESSION["role"] !== "admin") {
    die("Access Denied: Only admins can create new admin accounts.");
}

$host = "localhost";
$user = "root"; // Default XAMPP username
$pass = "";
$dbname = "ecommerce"; // ✅ Updated to match your database name

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle admin creation logic
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password_hash = hash("sha256", $_POST["password"]);

    $sql = "INSERT INTO users (username, email, password_hash, role, created_by_admin)
            VALUES ('$username', '$email', '$password_hash', 'admin', TRUE)";

    if ($conn->query($sql) === TRUE) {
        echo "New admin account created successfully!";
    } else {
        echo "Error creating admin: " . $conn->error;
    }
}

$conn->close();
?>
