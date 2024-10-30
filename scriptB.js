$(document).ready(function(){
    // elementos de la seccion Experiencia
    let expElem = document.getElementsByClassName('experiencia')[0].children;
    // para cada elemento toma la imagen
    for(i=0;i<expElem.length;i++){
        //toma la imagen
        imagen=expElem[i].getElementsByTagName('img')[0];
        let desc = expElem[i].getElementsByTagName('div')[0];
        //añade evento click a cada imagen para que esconda o muestre el contenido
        imagen.addEventListener('click',()=>{
            showExperience(desc);    
        });
    };
});

function showExperience(desc){
    if (desc.classList.contains('slide-text')) {
        desc.classList.remove('slide-text');
    } else{
        desc.classList.add('slide-text');
    };
};


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

