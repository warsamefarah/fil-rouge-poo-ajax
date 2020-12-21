<?php


define("ROOT", dirname(__DIR__));

require ROOT."/Autoloader.php";
Autoloader::register();

require ROOT . "/App/Controller/indexController.php";
use App\Controller\Menu;

$menu = new Menu();
$redirected = false;

if($_GET){
    $redirected = true;
}

if($redirected){
    $page = $_GET['page'];
    $view = $menu->getView($page);
    include $view;
}

if(!$_GET && !$redirected){
    include "../App/View/homeView.php";
}

?>