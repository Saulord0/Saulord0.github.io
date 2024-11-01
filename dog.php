<?php
class Dog{
    private $dog_size = 0;
    private $dog_weight = 0;
    private $dog_breed = "no breed";
    private $dog_color = "no color";
    private $dog_name = "no name";

    // constructor que recibe datos y los asigna a variables
    function __construct($value1,$value2,$value3,$value4){
        $name_error = $this->set_dog_name($value1) == TRUE ? 'True,' : 'False, ';
        $breed_error = $this->set_dog_breed($value2) == TRUE ? 'True,' : 'False, ';
        $color_error = $this->set_dog_color($value3) == TRUE ? 'True,' : 'False, ';
        $weight_error = $this->set_dog_weight($value4) == TRUE ? 'True,' : 'False, ';
        $this->error_message = $name_error . $breed_error . $color_error . $weight_error;
    
    }
    public function __toString(){
        return $this->error_message;
    }

    function set_dog_name($value){
        $error_message = TRUE;
        (ctype_alpha($value) && strlen($value) <= 21) ? $this->dog_name = $value :  $error_message = FALSE; 
        return $error_message;
    }
    function set_dog_weight($value){
        $error_message = TRUE;
        (ctype_digit($value) && ($value>0 && $value<=120)) ? $this->dog_weight = $value :  $error_message = FALSE; 
        return $error_message;
    }
    function set_dog_breed($value){
        $error_message = TRUE;
        (ctype_alpha($value) && strlen($value)<=35) ? $this->dog_breed = $value :  $error_message = FALSE; 
        return $error_message;
    }
    function set_dog_color($value){
        $error_message = TRUE;
        (ctype_alpha($value) && strlen($value)<=15) ? $this->dog_color = $value :  $error_message = FALSE; 
        return $error_message;
    }

    function display_properties(){
        print "<p> Dog_weight is:  $this->dog_weight. Dog breed is: $this->dog_breed. Dog color is: $this->dog_color.</p>";
    }
    function get_properties(){
        return "$this->dog_name,$this->dog_weight,$this->dog_breed,$this->dog_color.";
    }

    function get_dog_name(){
        return $this->dog_name;
    }
    function get_dog_weight(){
        return $this->dog_weight;
    }
    function get_dog_breed(){
        return $this->dog_breed;
    }
    function get_dog_color(){
        return $this->dog_color;
    }
    
    
}
?>