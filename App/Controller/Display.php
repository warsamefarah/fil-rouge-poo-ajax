<?php

namespace App\Controller;

class Display {

    public function __construct()
    {
        $this->json_path = ROOT ."/App/Data/poll.json";
    }

    public function getTheme(){
        $file = file_get_contents($this->json_path);
        echo $file;
    }

    public function getPoll($id){
        $file = file_get_contents($this->json_path);
        $array = json_decode($file);
        $questions = array();
        foreach($array as $theme){
            $theme = json_decode(json_encode($theme), true);
            if($theme['ID'] == $id){
                $questions = $theme['questions'];
            }
        }
        // $questions = json_encode($array['questions']);
        echo json_encode($questions);
    }
}

?>