<?php

namespace App\Controller;

class Menu {
    public function getView($page){
        return '../App/View/' . $page;
    }
}
?>