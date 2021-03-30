<?php
// DB config
require_once "helpers.php";
require_once "config.php";

// MySQL init
$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
check_mysql($db);

if(isset($_POST) && isset($_POST['email'])){
    $email = $_POST['email'];

    $query = $db->query("SELECT email FROM subscriptions WHERE email = '" . $email . "'");

    if($query->num_rows == 0) {
        $blacklist = file('../data/blacklist.txt', FILE_IGNORE_NEW_LINES);
        $email_domain = explode('@', $email);
        $email_domain = $email_domain[1];

        if(in_array($email_domain, $blacklist)){
            echo json_encode("blacklist");
        }else{
            if ($db->query("INSERT INTO subscriptions (email) VALUES ('" . $email . "')")) {
                echo json_encode("New record created successfully");
              } else {
                echo json_encode("Error: " . $sql . "<br>" . $conn->error);
              }
            echo json_encode("added");
        }

    }else{
        echo json_encode("exists");
    }

    $db->close();
}