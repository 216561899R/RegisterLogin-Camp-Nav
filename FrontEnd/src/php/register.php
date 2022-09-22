
<?php

if (empty($_POST["user_id"])) {
    die("User id is required");
}

if (empty($_POST["first_name"])) {
    die("First name is required");
}

if (empty($_POST["last_name"])) {
    die("Last name is required");
}

if (empty($_POST["gender"])) {
    die("Gender is required");
}

if (empty($_POST["user_type"])) {
    die("User type is required");
}

if ( ! filter_var($_POST["user_email"], FILTER_VALIDATE_EMAIL)) {
    die("Valid email is required");
}

if (strlen($_POST["password"]) < 8) {
    die("Password must be at least 8 characters");
}

if ( ! preg_match("/[a-z]/i", $_POST["password"])) {
    die("Password must contain at least one letter");
}

if ( ! preg_match("/[0-9]/", $_POST["password"])) {
    die("Password must contain at least one number");
}




$mysqli = require __DIR__ . "/database.php";

$sql = "INSERT INTO user (user_id,first_name,last_name,gender,user_type,user_email,password)
        VALUES (?, ?, ?, ?, ?, ?, ?)";
        
$stmt = $mysqli->stmt_init();

if ( ! $stmt->prepare($sql)) {
    die("SQL error: " . $mysqli->error);
}

$stmt->bind_param("issssss",
                  $_POST["user_id"],
                  $_POST["first_name"],
                  $_POST["last_name"],
                  $_POST["gender"],
                  $_POST["user_type"],
                  $_POST["user_email"],
                  $password);
                  
if ($stmt->execute()) {

    header("Location: signup-success.html");
    exit;

} else {
    
    if ($mysqli->errno === 1062) {
        die("email already taken");
    } else {
        die($mysqli->error . " " . $mysqli->errno);
    }
}








