<?php

define("ROOT", dirname(__DIR__));
require ROOT . "/Core/Database.php";
use Core\Database;

$db = new Database();

$db->prepare(
    'INSERT INTO users (pseudo, email, password) VALUES (:pseudo, :email, :password)',
    array(
        'pseudo' => $_POST['pseudo'],
        'email' => $_POST['email'],
        'password' => $_POST['password']
        )
);

header("Location: index.php?page=loginView.php");
exit;