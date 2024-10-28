let imgElem = document.getElementsByTagName('img');
// descripcion, periodo, actividades-320
let DGPC = Array("Apoyo técnico","Mayo 2024- Julio 2024","Analisis espacial y estadístico de localidades afectadas por fenómenos naturales; Mejoramiento de herramientas en el geoportal del Proyecto Mesoamérica.");
let ICAYYC = Array("Apoyo técnico","Julio 2022 - Mayo 2024","Análisis de datos de la calidad del aire en la Ciudad de México; Desarrollo de un modelo de pronóstico de la calidad del aire.");
let INGE = Array("Ayudante de profesor", "Septiembre 2019 - Enero 2024","Miembro del equipo responsable de la recolección de información y redacción para la prouesta del Programa de Especialidad en Sistemas de Información Geográfica que se impartirá en la Facultad de Ingeniería de la UNAM. ");
let ADN = Array("Analista territorial","Julio 2021 - Abril 2022", " Miembro del equipo responsable del análisis de información espacial usada en los Planes de Acción Urbana (PAU), que forman parte del Programam de Mejoramiento Urbano (PMU) de la Secretaría de Desarrollo Agrario, Territorial y Urbano (SEDATU).");
let ENCIT = Array("Profesor de asignatura","Julio 2023 - Agosto 2023", "Profesor de la asignatura de Sistemas de Información Geográfica en la Licenciatura en Geografía Aplicada de la Escuela Nacional de Ciencias de la Tierra de la UNAM.");

$(document).ready(function(){
    AjaxRequest();
    for(i=0;i<imgElem.length;i++){
        let e=imgElem[i];
        e.addEventListener('click',()=>{
            if (!e.classList.contains('fade-in') || !e.classList.contains('fade-out')) {
                showImage(e);
                
            }
            //alert(`You clicked on the image `);
            //showImage(e);
        });
    
    };
});


function showImage(e){
    //alert(`You clicked on the image ${e.id}`);
    if (e.classList.contains('fade-in')) {
        e.classList.remove('fade-in');
        e.classList.add('fade-out');
    } else{
        e.classList.remove('fade-out');
        e.classList.add('fade-in');
    }
}

function getXMLHttp(){
    var xmlHttp;
    try{
        xmlHttp = new XMLHttpRequest();
    } catch(e){
        try{
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e){
            try{
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e){
                alert("Old browser? Upgrade today so you can use AJAX!");
                return false;
            }
        }
    }
    return xmlHttp;
}
function AjaxRequest(){
    var xmlHttp = getXMLHttp();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            HandleResponse(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", "datos.php", true);
    xmlHttp.send(null);
}
function HandleResponse(response){
    document.getElementById('contacto').innerHTML = response;
}

