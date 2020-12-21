<?php

define("ROOT", dirname(__DIR__));
require ROOT . "/App/Controller/indexController.php";
use App\Controller\Menu;

$menu = new Menu();

$page = $_GET['page'];
$menu->getView($page);

?>