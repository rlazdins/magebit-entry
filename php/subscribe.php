<?php
// DB config
require_once "helpers.php";
require_once "config.php";

// MySQL init
$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
check_mysql($db);

