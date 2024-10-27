let imgElem = document.getElementsByTagName('img');

for(i=0;i<imgElem.length;i++){
    let e=imgElem[i];
    e.addEventListener('click',()=>{
        showImage(e);
        //alert(`You clicked on the image `);
        //showImage(e);
    });

}

function showImage(e){
    //alert(`You clicked on the image ${e.id}`);
    if (!e.classList.contains('fade-in') && !e.classList.contains('fade-out')){
        e.classList.add('fade-in');
    } else if (e.classList.contains('fade-in')) {
        e.classList.remove('fade-in');
        e.classList.add('fade-out');
    } else{
        e.classList.remove('fade-out');
        e.classList.add('fade-in');
    }
}