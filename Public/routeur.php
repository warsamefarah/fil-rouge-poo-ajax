<?php

define("ROOT", dirname(__DIR__));
require ROOT . "/App/Controller/Display.php";
use App\Controller\Display;

$disp = new Display();
if(isset($_GET['id']))
    $id = $_GET['id'];
else
    $id = null;
switch ($_GET["function"]) {
    case 'getTheme':
        $disp->getTheme();
        break;
    case 'getPoll':
        $disp->getPoll($id);
        break;
}