<?php

namespace App\Controller;

class Menu {
    public function getView($page){
        if($page == "signup")
            return '../App/View/signUp.php';
        return '../App/View/' . $page;
    }
}
?>