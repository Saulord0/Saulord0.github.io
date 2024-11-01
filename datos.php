<?php
 $experiencia = array(
    "DGPC" => array(
        "descripcion" =>"Apoyo técnio",
        "periodo" => "Mayo 2024- Julio 2024",
        "actividades" => "Analisis espacial y estadístico de localidades afectadas por fenómenos naturales; Mejoramiento de herramientas en el geoportal del Proyecto Mesoamérica."),
    "ICAYCC" => array(
        "descripcion" => "Apoyo técnico",
        "periodo" => "Agosto 2024 - Diciembre 2024",
        "actividades" => "Análisis de datos de la calidad del aire en la Ciudad de México; Desarrollo de un modelo de pronóstico de la calidad del aire.")
);
print "<h2> {$experiencia["ICAYCC"]["descripcion"]}</h2>";
//------------ ejemplos de libro ----------------------
require_once('dog.php');
$lab = new Dog('pablo','pug','black','20');
$dog_properties = $lab->get_properties();
list($name_error, $breed_error,$color_error, $weight_error) = explode(',', $lab);
print "<p> Valores por entrada </br>Dog name: $name_error. Dog breed: $breed_error Dog color: $color_error. Dog weight: $weight_error. </p>";

$dog_error_message = $lab->set_dog_name('SAULO');
print $dog_error_message == TRUE ? 'Name update succesfull<br/>' : 'Name update not succesfull<br/>';

$dog_error_message = $lab->set_dog_weight(50);
print $dog_error_message == TRUE ? 'weight update succesfull<br/>' : 'weight update not succesfull<br/>';

$dog_error_message = $lab->set_dog_breed('lab');
print $dog_error_message == TRUE ? 'breed update succesfull<br/>' : 'breed update not succesfull<br/>';

$dog_error_message = $lab->set_dog_color('Yellow');
print $dog_error_message == TRUE ? 'color update succesfull<br/>' : 'color update not succesfull<br/>';
//------ get properties ------
print $lab->get_dog_name()."<br/>";
print $lab->get_dog_weight()."<br/>";
print $lab->get_dog_breed()."<br/>";
print $lab->get_dog_color()."<br/>";
$dog_properties = $lab->get_properties();
list($dog_name,$dog_weight, $dog_breed,$dog_color) = explode(',', $dog_properties);
print "<p>dog name: $dog_name. Dog weight: $dog_weight. Dog color: $dog_color.</p>";

?>
